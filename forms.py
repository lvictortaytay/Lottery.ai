from flask_wtf import FlaskForm 
from wtforms import StringField , FloatField  , PasswordField
from wtforms.validators import DataRequired

 
class LoginForm(FlaskForm):
    username = StringField("username"  , validators = [DataRequired()] , render_kw={"placeholder": "username"})
    password = PasswordField("Password" , validators = [DataRequired()] , render_kw={"placeholder": "password"})



class SignUpForm(FlaskForm):
    username = StringField("username"  , validators = [DataRequired()] , render_kw={"placeholder": "username"})
    firstName = StringField("firstname" , validators = [DataRequired()] , render_kw={"placeholder": "First Name"})
    lastName = StringField("lastname" , validators = [DataRequired()] , render_kw={"placeholder": "Last Name"})
    email = StringField("email" , validators = [DataRequired()] , render_kw={"placeholder": "Email"})
    password = PasswordField("Password" , validators = [DataRequired()] , render_kw={"placeholder": "password"})
    