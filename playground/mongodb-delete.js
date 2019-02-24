 //const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require ('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Mangiare'}).then(
    //     (result)=>{ console.log(result)}
    // );

    // db.collection('Todos').deleteOne({text: 'Mangiare'}).then(
    //     (result)=>{ console.log(result)}
    // );

    // db.collection('Todos').findOneAndDelete({completed:false}).then(
    //     (result) =>{console.log(result)}
    // );

    // db.collection('Users').deleteMany({name: 'Daniele'});
    db.collection('Users').findOneAndDelete({_id: 123}).then(
         (results) =>{
             console.log(JSON.stringify(results,undefined,2));
         }
     );

    //client.close(); 
});
