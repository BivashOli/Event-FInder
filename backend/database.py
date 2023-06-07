import mysql.connector

class User:
     def __init__(self, user_id : int, username : str) -> None:
          self.user_id = user_id
          self.username = username

class Event:
     def __init__(self, event_id : str, event_name : str, event_address : str, event_info : str, user_id : int) -> None:
          self.event_id = event_id
          self.event_name = event_name
          self.event_address = event_address
          self.event_info = event_info 
          self.user_id = user_id

class Database:
     def __init__(self) -> None:
          self.db = mysql.connector.connect(host="localhost", user="root", password="root", database="event_map")
          self.cursor = self.db.cursor()
          self.event_length = 5
          
     # return -1 == username already exist, 0 == success
     def create_user(self, username : str, password : str) -> int:
          self.cursor.execute("SELECT * FROM users")
          result = self.cursor.fetchall()
          for row in result:
               if row[1] == username:
                    print("BRUH THATS THE SAME ONE", row[1])
                    return -1
          self.cursor.execute(f"INSERT INTO Users(username, password) VALUES('{username}', '{password}')")
          self.db.commit()
          return 0
     
     # -1 failure, 0 success
     def login_user(self, username : str, password : str) -> int:
          self.cursor.execute("SELECT * FROM users")
          result = self.cursor.fetchall()
          for row in result:
               if row[1] == username:
                    if row[2] == password:
                         return 0
                    else:
                         return -1
          return -1
     
     # returns user, if returns None then user cannot be found     
     def get_user(self, username : str) -> User:
          self.cursor.execute("SELECT * FROM Users")
          result = self.cursor.fetchall()
          for row in result:
               if row[1] == username:
                    return User(row[0], row[1])
          return None 

     def create_event(self, event_name : str, event_info : str, longitude, latitude, user_id : int,):
          
          self.cursor.execute(f"INSERT INTO event_list(event_name, event_info, longitude, latitude, user_id) VALUES('{event_name}', '{event_info}', {str(longitude)}, {str(latitude)}, {user_id})")
          self.db.commit()
          # self.cursor.execute("SELECT * FROM event_list WHERE event_id = LAST_INSERT_ID()")

     def get_events_by_user(self, user_id : int) -> list:
          events = []
          self.cursor.execute(f"SELECT * FROM event_list WHERE user_id = {user_id}")
          result = self.cursor.fetchall()
     
          for row in result:
               if row[4] == user_id:
                    events.append(Event(row[0], row[1], row[2], row[3], row[4]))
          return events 
     
     def get_event(self, event_id : int) -> Event:
          self.cursor.execute(f"SELECT * FROM event_list WHERE event_id = {event_id}")
          row = self.cursor.fetchall()[0]
          if len(row) != self.event_length:
               return None 
          return Event(row[0], row[1], row[2], row[3], row[4])

     def get_events_all(self):
          events = []
          self.cursor.execute(f"SELECT * FROM event_list")
          result = self.cursor.fetchall()
     
          for row in result:
               events.append(Event(row[0], row[1], row[2], row[3], row[4]))
          return events 