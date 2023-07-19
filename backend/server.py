from flask import Flask, redirect, request, jsonify
from flask_cors import CORS
from database import Database
from google.oauth2 import id_token
from google.auth.transport import requests
import jwt
import json 

db = Database() 
app = Flask(__name__)
CORS(app)
client_id = "948743406742-ajenkg2jp85kcvaunmul4poiapond0k1.apps.googleusercontent.com"

@app.route("/login", methods=['POST'])
def home():
     success_flag = {"success_flag" : False}
     token = request.get_json()
     print(token)
     try:
          idinfo = id_token.verify_oauth2_token(token, requests.Request(), client_id)
          userid = idinfo["sub"]
          user_email = idinfo["email"]
          user_name = idinfo["name"]

          print(userid)
          print(user_email)
          print(user_name)
          if not db.does_user_exist(user_email):
               db.create_user(user_email, user_name)

          success_flag["success_flag"] = True
          return success_flag
     except ValueError:
          print("VALUE ERROR!!")
          pass
     return success_flag

@app.route("/user/<username>")
def get_user(username):
     user = db.get_user(username)
     if user != None:
          return "Username: " + str(user.user_id)
     else:
          return 'User does not exist'
     
@app.route("/user", methods=['POST'])
def create_user():
     data = request.get_json()
     username = data['username']
     password = data['password']
     # password = request.form["password"]
     if db.create_user(username, password) == -1:
          return "Error"
     else:
          return "Success"

@app.route("/create-event", methods=['POST'])
def create_event():
     data = request.get_json()
     name = data['name']
     longitude = data['lng']
     latitude = data['lat']
     description = data['description']
     JWT = jwt.decode(data['JWT'], options={"verify_signature" : False})
     user_email = JWT["email"]
     userid = db.get_user_id(user_email)
     
     print("asdas", userid)
     db.create_event(userid, name, description, "", longitude, latitude)
     return "Success"

@app.route("/images", methods=['POST'])
def images():
     data = request.get_json()
     print(data)


@app.route("/events-by-user", methods=['POST'])
def get_events_by_user():
     data = request.get_json()
     username = data['username']
     events = db.get_events_by_user(db.get_user(username).user_id)
     events_dictionary = {}
     
     counter = 0
     for event in events:
          events_dictionary[counter] = event.__dict__
          counter += 1
     return events_dictionary

@app.route("/events-all")
def get_events_all():
     events = db.get_events_all()
     events_dictionary = {}
     counter = 0
     for event in events:
          events_dictionary[counter] = event.__dict__
          counter += 1
     return events_dictionary

def convertFileToBLOB(filename : str) -> bytes:
     with open(filename, 'rb') as file:
          binary_data = file.read()
     return binary_data

if __name__ == "__main__":
     app.run()