import express from 'express';
import { router } from './src/router/index.js';



const app = express();


const port = 8080;


app.use(express.json())
app.use(express.urlencoded({extended: true}))

router(app)
