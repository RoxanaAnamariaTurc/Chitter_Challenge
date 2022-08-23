import mongoose from 'mongoose';
import express from "express";
import bodyParser from 'body-parser';
import https from 'https';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
import { login } from './routes/login.js'
import { register } from './routes/register.js'
import { messages } from './routes/messages.js'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(`/login`, login)
app.use(`/register`, register)
app.use(`/messages`, messages)


const port = process.env.PORT;
const host = process.env.HOST;

const main = async () =>
{
    await mongoose.connect(process.env.DB_URI);
}

main().then(() => console.log(`Connected to DB`)).catch(err => console.log(err));

const server = app.listen(port, host, () =>
{
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
})

export default server;