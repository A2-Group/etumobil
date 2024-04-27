import json

CONFIG_PATH = './config.json'
QUERY_PATH = './sql_queries.json'


class Config_Loader:
    config = None
    queries = None

    @staticmethod
    def load_config():
        with open(CONFIG_PATH, 'r') as f:
            Config_Loader.config = json.load(f)

    @staticmethod
    def load_queries():
        with open(QUERY_PATH, 'r') as f:
            Config_Loader.queries = json.load(f)

    @staticmethod
    def get_config():
        if Config_Loader.config is None:
            Config_Loader.load_config()
        return Config_Loader.config

    @staticmethod
    def get_queries():
        if Config_Loader.queries is None:
            Config_Loader.load_queries()
        return Config_Loader.queries

    @staticmethod
    def get_insertion_queries():
        queries = Config_Loader.get_queries()
        return queries['insertion_queries']

    @staticmethod
    def get_insertion_query(query_name):
        queries = Config_Loader.get_queries()
        queries =  queries['insertion_queries']
        for query in queries:
            if query['name'] == query_name:
                return query['query']

