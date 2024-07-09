import express from 'express';
import dotenv from 'dotenv';

import cors from 'cors';
import bodyParser from 'body-parser';


import { Connection } from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/router.js';



dotenv.config();

const app = express();



const username = process.env.USER_NAME;
const password = process.env.PASSWORD;


const PORT = 8000;
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);

Connection(username,password);


app.listen(PORT,() => { 
    console.log(`server running on port ${PORT}`);
  });

  DefaultData;