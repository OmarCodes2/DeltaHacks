const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
 
}
mongoose.set('strictQuery', true);
mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

app.listen(4000, () => console.log("Server started on port 4000"));
