import {Capacitor, CapacitorHttp} from '@capacitor/core';
import {Directory, Filesystem} from '@capacitor/filesystem';
import {CapacitorSQLite, SQLiteConnection} from "@capacitor-community/sqlite";

export default class Database {
    static #instance = null;

    constructor(database_name) {
        this.database_name = database_name;
    }

    // Static ASYNC!!!! singleton factory method
    static async getInstance(database_name) {
        // If the instance already exists, return it
        if (Database.#instance) {
            return Database.#instance;
        }
        // Otherwise, initialize the instance and return it
        return await Database._init(database_name);
    }


     static async _init(database_name) {

        if (!await this.isDatabaseFileExists(database_name)){
            console.log("Database file does not exist. Downloading...");
            const base64_database = await this._downloadDatabaseFile(database_name);
            await this._saveDatabaseFileToLocal(database_name, base64_database);
        }

        Database.#instance = new Database(database_name);

        await Database.#instance._connectToLocalDatabase();
        return Database.#instance;
    }

    static async isDatabaseFileExists(database_name) {
        try {
            let fileName;

            if (Capacitor.getPlatform() === "android") {
                fileName = database_name + ".db";
            }
            else if (Capacitor.getPlatform() === "ios") {
                fileName = database_name + "SQLite.db";
            }
            await Filesystem.stat({
                path: fileName,
                directory: Directory.Library
            });
            return true;
        }
        catch (error) {
            return false;
        }
    }

    static async close() {
        if (Database.#instance) {
            await Database.#instance.db.close();
            Database.#instance = null;
        }
    }

    // Private method to download the database file from the server
    static async _downloadDatabaseFile(database_name) {
        const file_path = `/home/ubuntu/Programming/portfolio-website/src/etumobile/database/${database_name}.db`;

        const options = {
            url: "https://archyn.com.tr/etumobile/api/v1/download",
            headers: { "x-api-key": "AlkinOruspu" },
            responseType: "blob",
            params: { file_path: file_path },
        };

        const response = await CapacitorHttp.get(options);

        // console.log("downloaded database file:")

        return response.data;
    }

    // Private method to save the database file to the local storage
    static async _saveDatabaseFileToLocal(database_name, base64_database) {
        let fileName;

        if (Capacitor.getPlatform() === "android") {
            fileName = database_name + ".db";
        }
        else if (Capacitor.getPlatform() === "ios") {
            fileName = database_name + "SQLite.db";
        }

        await Filesystem.writeFile({
            path: fileName,
            data: base64_database,
            directory: Directory.Library,
        });

        // console.log("Database file saved locally: " + fileName);
    }

    // Private method to connect to the local database
    async _connectToLocalDatabase() {
        const sqlite = new SQLiteConnection(CapacitorSQLite);

        if (Capacitor.getPlatform() === "android") {
            await sqlite.moveDatabasesAndAddSuffix("files");
        }

        this.db = await sqlite.createConnection(this.database_name, false, "no-encryption", 1, false);

        await this.db.open();
        // console.log("connected to local database: " + this.database_name);
    }

    // Public method to query the local database
    async query(query, values = []) {
        if (await this.db.isDBOpen()) {
            return await this.db.query(query, values)
                .then(response => response.values)
                .catch(error => console.log(error))
        } else {
            throw new Error("Database connection is not open");
        }
    }
}
