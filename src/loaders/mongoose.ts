import mongoose from 'mongoose';
import { Db } from 'mongodb';
import config from '../config';

export default async(): Promise<Db> => {
    mongoose.set('useFindAndModify', false);
    const connection = await mongoose.connect(config.databaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    return connection.connection.db;
}
