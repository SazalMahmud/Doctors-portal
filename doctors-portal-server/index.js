const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =  `mongodb+srv://${process.env.BD_User}:${process.env.DB_PASS}@cluster0.uzso5oq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//console.log(uri);

async function run(){

    try{
        await client.connect();
        const database = client.db('doctors_portal');
        const appointmentsCollection = database.collection('appointments');

        app.get('/appointments' , async(req, res) =>{
          const email = req.query;
          const date =req .query.date
          //console.log(date);
          //const query ={date:date}
          const cursor = appointmentsCollection.find(date);
          const appointments =await cursor.toArray();
          res.json(appointments);
        })

        app.post('/appointments', async(req, res) =>{
          const appointment = req.body;
          const result = await appointmentsCollection.insertOne(appointment);

          console.log(result);
          res.json(result);

        });

    }
    finally{
       // await client.close();

    }
}
 run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})