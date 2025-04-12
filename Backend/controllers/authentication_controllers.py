from flask import Blueprint, request, jsonify, make_response
from flask_jwt_extended import get_jwt_identity, create_access_token, create_refresh_token, jwt_required
from utility.password_hash import check_password_hash, hash_password
from models.database import get_db_connection

auth = Blueprint('auth', __name__)

@auth.route('/register', methods=['GET'])
def register():
    conn = get_db_connection()
    cursor = conn.cursor()
    username = 'Admin'
    password = 'Gabgab92210'
    
    hashed_password = hash_password(password)
    
    try:
        cursor.execute('INSERT INTO appartment_accounts (username, password) VALUES (%s, %s)', (username, hashed_password))
        row = conn.commit()
        
        if row > 0:
            return jsonify({'message': 'data inserted successfully'})
        
    except:
        return jsonify({'error': 'failed to insert data'})
    finally:
        cursor.close()
        conn.close()

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute('SELECT id, username, password, role FROM appartment_accounts WHERE username = %s', (username,))
        user = cursor.fetchone()
        
        if user and check_password_hash(user['password'], password):
            create_token = create_access_token(identity=str(user['id']))
            ref_token = create_refresh_token(identity=str(user['id']))
            role = user['role']
            
            # Create response
            res = make_response(jsonify({
                'message': 'login success',
                'token': create_token,
                'role': role
            }), 200)
            
            # Set cookies for access token and refresh token
            res.set_cookie(
                'access_token_cookie', create_token, httponly=True, secure=True, samesite='Strict'
            )
            res.set_cookie(
                'refresh_token_cookie', ref_token, httponly=True, secure=True, samesite='Strict'
            )
            
            return res
        
    except Exception as e:
        return jsonify({'error': 'Invalid Credentials', 'message': str(e)}), 401
    finally:
        cursor.close()
        conn.close()
        

@auth.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    curr_user = get_jwt_identity()
    return jsonify({'user': curr_user})

@auth.route('/id', methods=['GET'])
@jwt_required()
def get_id():
    id = get_jwt_identity()
    
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT role FROM appartment_accounts WHERE id = %s', (id,))
    user = cursor.fetchone()
    
    if user:
        return jsonify({'role': user['role']}), 200
    else:
        return jsonify({'error': 'User not found'}), 404
    
    
@auth.route('/rooms', methods=['GET'])
def rooms():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute('SELECT  id, title, sizeX, sizeY, price, bedrooms, bathrooms, room_id, room_status, img_url FROM rooms')
        room = cursor.fetchall()

        # Return the list of rooms as JSON response
        return jsonify(room), 200

        
        
    except:
        return jsonify({'error': 'failed to fetch rooms'})
    finally:
        cursor.close()
        conn.close()