from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from datetime import datetime

bcrypt = Bcrypt()





db = SQLAlchemy()


def connect_db(app):
    db.app = app
    db.init_app(app)




class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer,primary_key = True ,autoincrement = True , nullable = False)
    userName = db.Column(db.String , unique = True , nullable = False)
    password = db.Column(db.Text , nullable = False)
    firstName = db.Column(db.String , unique = False , nullable = False)
    lastName = db.Column(db.String , nullable = False)
    email = db.Column(db.String , nullable = False)
    Numbers = db.relationship("Number" , backref = "Number" , cascade = "all , delete-orphan")

    @classmethod
    def register(cls , username , password , firstName  , lastName , email):
        hashed = bcrypt.generate_password_hash(password)
        hashed_utf8 = hashed.decode("utf8")
        return cls(userName=username, password=hashed_utf8 , firstName = firstName , lastName = lastName , email = email)
    

    @classmethod
    def authenticate(cls , username , password):
        user = User.query.filter_by(userName = (f"{username}")).first()
        # currUser = cls(userName = username , password = password)
        print(f"user: {user}")
        # print(currUser)
        if user and bcrypt.check_password_hash(user.password, password):
            # print(currUser)
            return True
        else:
            return False

        




class Number(db.Model):
    __tablename__ = "user_numbers"
    id = db.Column(db.Integer,primary_key = True ,autoincrement = True , nullable = False)
    user_id = db.Column(db.Integer , db.ForeignKey("users.id"), nullable = False)
    number = db.Column(db.Integer , unique = False , nullable = False)



class WinningNums(db.Model):
    __tablename__ = "winning_numbers"
    id = db.Column(db.Integer , primary_key = True , autoincrement = True , nullable = False)
    user_id = db.Column(db.Integer , db.ForeignKey("users.id") , nullable = False )
    number = db.Column(db.Integer , nullable = False)
    date = db.Column(db.DateTime , default = datetime.utcnow() , nullable = False)
    User = db.relationship("User" , backref = "User" , cascade = "all , delete-orphan" , single_parent=True)

 

