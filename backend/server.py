from flask import Flask, redirect, request, jsonify
from flask_cors import CORS
from database import Database
import json 

db = Database() 
app = Flask(__name__)
CORS(app)


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

@app.route("/login", methods=['POST'])
def login():
     data = request.get_json()
     username = data['username']
     password = data['password']
     if db.login_user(username, password) == 0:
          return "Success!!!"
     else:
          return "Error"

@app.route("/event", methods=['POST'])
def create_event():
     data = request.get_json()
     event_name = data['event_name']
     event_address = data['event_address']
     event_info = data['event_info']
     user_id = db.get_user(data['username']).user_id
     
     db.create_event(event_name, event_address, event_info, user_id)
     return "Success"

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

if __name__ == "__main__":
     app.run()