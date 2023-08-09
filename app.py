from flask import Flask , render_template , redirect , flash
from datetime import datetime
import requests 
from models import db , connect_db , User , Number , WinningNums , bcrypt
from forms import LoginForm , SignUpForm

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///lottery"
app.config["SECRET_KEY"] = "KERKJNDWECS"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = True
connect_db(app)
app.app_context().push()





res = requests.get("https://api.fungenerators.com/lottery/countries", params = {"api_key":"k0RyfVyNEf4wRPFMfvm5jQeF"})

print(res)


@app.route("/" , methods = ["GET" , "POST"])
def welcomepage():
    signUp = SignUpForm()
    form = LoginForm()
    if signUp.validate_on_submit():
            print("good")
            userName = signUp.username.data
            firstName = signUp.firstName.data
            lastName = signUp.lastName.data
            email = signUp.email.data
            password = signUp.password.data
            newUser = User.register( userName , password, firstName, lastName , email)
            db.session.add(newUser)
            try:
                db.session.commit()
                return render_template("home.html" , user = userName)
            except Exception as error:
                print(error.args[0])
                return redirect("/")
                
    if form.validate_on_submit():
        try:
            name = form.username.data
            pas = form.password.data
            authenticated = User.authenticate(name ,pas)
            # return render_template("index.html", form = form , signUp = signUp )
            if authenticated:
                return render_template("home.html" , user = name)
            else:
                print(authenticated)
                return("not authenticated")
        except Exception as error:
            flash("invalid")
            return redirect("/")
    else:
        flash("message")
        return render_template("index.html", form = form , signUp = signUp )
        
    




# @app.route("/signUp" , methods = ["POST"])
# def registerUser():
#     if(form.validate_on_submit)
#     return redirect("/home")



# @app.route("/login" , methods = ["POST"])
# def randomTest():
#     return  "this is the login-page"