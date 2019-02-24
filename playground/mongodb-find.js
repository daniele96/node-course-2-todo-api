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

    // db.collection('Todos').find()
    //     .count().then((count)=>{
    //         console.log('Todos count', count);
    // },(err) =>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name: 'Daniele'})
    .toArray().then((count)=>{
        console.log('Users', count);
    },(err) =>{
        console.log('Unable to fetch todos', err);
    });

    //client.close(); 
});
