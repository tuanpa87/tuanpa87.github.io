// var MongoClient = require('mongodb').MongoClient

// MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
//   if (err) throw err
// db.collection('mammals').find().toArray(function (err, result) {
//   if (err) throw err

//   console.log(result)
// })
//})

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/animals');
// mongoose.connection.once('open', () => {
//   console.log('connected');
// }).on('error', (err)=> {
//   console.log('could not connected', err)
// })

const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err;
  const db = client.db('animals');
  const object = ObjectId();
  console.log(object);
  console.log('connected');

  db.collection('mammals').insertOne({
    name: 'cat',
    legs: 4

  }, (err, result) => {
    if (err) return console.log(err);
    console.log('inserted');

  })
})


