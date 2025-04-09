from Config.config import Config
import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    try:
        conn = psycopg2.connect(Config.DB_URL, cursor_factory=RealDictCursor)
        print('Database Connected')
        return conn
    except:
        return print('Database Connection Failed')
    
get_db_connection()