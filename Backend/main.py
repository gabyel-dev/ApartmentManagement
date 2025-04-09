from flask import Flask
from flask_cors import CORS
from Config.config import Config
from flask_jwt_extended import JWTManager
from utility.password_hash import bcrypt
from controllers.authentication_controllers import auth

app = Flask(__name__)
app.config.from_object(Config)
app.register_blueprint(auth)

jwt = JWTManager(app)
bcrypt.init_app(app)


CORS(app, supports_credentials=True)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)


