import express from 'express';
import dotenv from 'dotenv';


async function start() {

    console.log("\n \n \n \n Entry Point ----> \n \n \n \n")



    // Load Env

    dotenv.config({
        path : "./.env"
    });

    const thanga_app = express();

    thanga_app.get('/', (req, res) => {
        res.send('Hello there !');
    });

    thanga_app.listen(process.env.HTTP_PORT, () => {
        console.log("\n server is running on port - \n" + process.env.HTTP_PORT);
    })
    
}

start();