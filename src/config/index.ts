import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();

if (envFound.error){
    throw new Error("Couldnt find .env file");
}

export default {
    port: parseInt(process.env.PORT, 10),

    databaseURL: process.env.MONGODB_URI,

    jwtSecret: process.env.JWT_SECRET,

    CodeRequest: {
        OK: 0,
        VAL: 1,
    },

    logs: {
        level: process.env.LOG_LEVEL || 'silly'
    },

    api:{
        prefix: '/api'
    }
}
