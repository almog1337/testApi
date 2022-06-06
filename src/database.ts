import {connect, connection} from "mongoose";
import mongoUriBuilder from 'mongo-uri-builder';
import { profileEnd } from "console";

// Initialize Connection
export async function connectToDatabase() {
    try {
        const uri = mongoUriBuilder({
            port: Number(process.env.MONGO_DB_PORT),
            database: process.env.MONGO_DB_NAME,
            username: process.env.MONGO_DB_USERNAME,
            password: process.env.MONGO_DB_PASSWORD
        });
        console.log("uri: ", uri);
        console.log("connection to db...");
        connect(uri);
        console.log(await connection.asPromise());
        await connection.asPromise();
        console.log('Successfully connected to database');

    } catch(e) {
        console.log('DB connection error');
    }
}