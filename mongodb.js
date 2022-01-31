const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-app';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) return console.log(error);

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Matija',
    //     age: 24
    // }, (error, result) => {
    //     if (error) return console.log(error);

    //     console.log(result);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Filip',
    //         age: 28
    //     },
    //     {
    //         name: 'Marko',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) return console.log(error);

    //     console.log(result);
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Task 1',
            completed: true
        },
        {
            description: 'Task2',
            completed: false
        },
        {
            description: 'Task 3',
            completed: true
        }
    ], (error, result) => {
        if (error) return console.log(error);

        console.log(result);
    })
});