 //const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate(
        {
            _id: new ObjectID('5c72f2ce424e8ad5cccc1dfb')
        },{

            $set:{
                name:'New',
                age: 23
            }
        },{
            returnOriginal: false 
        }).then((results)=>{
            console.log(results);
        })
 
    //client.close(); 
});
