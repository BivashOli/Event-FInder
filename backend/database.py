import mysql.connector

class User:
     def __init__(self, user_id : int, email : str, username : str) -> None:
          self.user_id = user_id
          self.email = email 
          self.username = username

class Event:
     def __init__(self, event_id : str, user_id : int, name : str, description : str, picture, longitude : str, latitude : str) -> None:
          self.event_id = event_id
          self.user_id = user_id
          self.name = name
          self.description = description
          self.picture = picture
          self.longitude = longitude
          self.latitude = latitude

class Database:
     def __init__(self) -> None:
          self.db = mysql.connector.connect(host="localhost", user="root", password="root", database="event_map")
          self.cursor = self.db.cursor()
          self.event_length = 5
               
     def does_user_exist(self, email : str) -> bool:
          self.cursor.execute(f"SELECT * FROM users WHERE email = '{email}'")
          list_of_users = self.cursor.fetchall()
          return len(list_of_users) != 0

     def create_user(self, email : str, username : str) -> int:
          self.cursor.execute(f"INSERT INTO Users(email, username) VALUES('{email}', '{username}')")
          self.db.commit()
          return 0
     
     def get_user(self, email : int) -> User:
          self.cursor.execute(f"SELECT * FROM Users WHERE user_id = {user_id}")
          user_id, email, username = self.cursor.fetchall()
          return User(user_id, email, username)

     def get_user_id(self, email : str) -> int:
          self.cursor.execute(f"SELECT * FROM Users WHERE email = '{email}'")
          user_row = self.cursor.fetchall()
          user_id = user_row[0][0]
          return user_id 
     
     def create_event(self, user_id : int, name : str, description : str, picture, longitude : str, latitude : str):
          self.cursor.execute(f"INSERT INTO events(user_id, name, description, longitude, latitude) VALUES({user_id}, '{name}', '{description}', '{longitude}', '{latitude}')")
          self.db.commit()
     
     def get_events_created_by_user(self, user_id : int) -> list:
          events = []
          self.cursor.execute(f"SELECT * FROM events WHERE user_id = {user_id}")
          result = self.cursor.fetchall()
     
          for row in result:
               if row[0] == user_id:
                    events.append(Event(row[0], row[1], row[2], row[3], row[4], row[5], row[6]))
          return events 
     
     def get_event_ids_attended_by_user(self, user_id : int) -> list:
          events = []
          self.cursor.execute(f"SELECT * FROM events_list WHERE user_id = {user_id}")
          result = self.cursor.fetchall()
     
          for row in result:
               if row[0] == user_id:
                    events.append(Event(row[0], row[1], row[2], row[3], row[4], row[5], row[6]))
          return events 
     
     def get_event_from_id(self, event_id : int) -> Event:
          self.cursor.execute(f"SELECT * FROM events WHERE event_id = {event_id}")
          row = self.cursor.fetchall()[0]
          if len(row) != self.event_length:
               return None 
          return Event(row[0], row[1], row[2], row[3], row[4], row[5], row[6])

     def get_events_all(self):
          events = []
          self.cursor.execute(f"SELECT * FROM events")
          result = self.cursor.fetchall()
     
          for row in result:
               events.append(Event(row[0], row[1], row[2], row[3], row[4], row[5], row[6]))
          return events 
     
     def create_attendee(self, event_id, user_id):
          self.cursor.execute(f"INSERT INTO events_list(event_id, user_id) VALUES({event_id}, {user_id})")
          self.db.commit()

     
     