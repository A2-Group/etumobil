import sqlite3
from config_loader import Config_Loader


class Database:
    def __init__(self, db_name=None):
        if db_name is None:
            db_name = Config_Loader.get_config()['DB_NAME']
        self.connection_obj = None
        self.db_name = db_name

    def connect(self):
        try:
            self.connection_obj = sqlite3.connect(self.db_name)
            print("Successfully connected!")
        except self.connection_obj.Error as err:
            print(f"Error: '{err}'")

    def execute_query(self, query):
        if self.connection_obj is not None:
            cursor_obj = self.connection_obj.cursor()
            cursor_obj.execute(query)
            self.connection_obj.commit()
            print("Query successful!")
        else:
            print("Connection failed!")

    def execute_read_query(self, query):
        cursor = self.connection_obj.cursor()
        cursor.execute(query)
        result = cursor.fetchall()
        return result

    def insert_multiple(self, query, data):
        cursor = self.connection_obj.cursor()
        cursor.executemany(query, data)
        self.connection_obj.commit()

    def close(self):
        self.connection_obj.close()
