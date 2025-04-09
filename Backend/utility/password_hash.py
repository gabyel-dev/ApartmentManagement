from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

def check_password_hash(hash_password, raw_password):
    return bcrypt.check_password_hash(hash_password, raw_password)

def hash_password(password):
    return bcrypt.generate_password_hash(password, 12).decode('utf-8')