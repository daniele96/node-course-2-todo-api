//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return console.log('_Unable to instert todo', err)
    //     }

    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    db.collection('Users').insertOne({
        name: 'Daniele',
        age: 22,
        location: 'Italy'
    },(err,result)=>{
        if(err){
            return console.log('Unable to instert todo', err)
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    })
    client.close(); 
});
