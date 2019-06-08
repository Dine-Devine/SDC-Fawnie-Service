const mongoose = require('mongoose');
const fs = require('fs');
//const {username, password} = require('./config.js');
require('dotenv').config();

const mongoUser = process.env.MONGO_USER;
const mongoPASS = process.env.MONGO_PASS;

//mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPASS}@thedarkness-hrmqy.mongodb.net/test?retryWrites=true` , {useNewUrlParser: true});
mongoose.connect('mongodb://localhost:27017/restuarants', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const searchbarSchema = new mongoose.Schema({
  uuid : {
      type: Number,
      unique : true
  },
  name : String,
  category : String,
  BLD : String,
  images : Array,

  })
  let searchbar = mongoose.model('data', searchbarSchema)

  let readData = (obj, cb) => {
    searchbar.findOne(obj, function(err,data){
      if(err) {
        console.log(err)
      } else {
        cb(null,data)
      }
    })
  }

  let createData = () => {
    insertOne
  };

  let updateData = () => {
    updateOne
  }

  let deleteData = (obj) => {
    searchbar.deleteOne(obj, (err,data) => {
      if(err) {
        console.log('error in deleting data from DB', err)
      } else {
        console.log('sucessfully deleted data from DB', data)
      }

    })
  }





module.exports = {searchbar, readData, deleteData};




// module.exports.seed = ()=>{
//   // we're connected!
//     fs.readFile('databaseSeed.txt', (err, data) => {
//         if (err) throw err;
//         searchbar.insertMany(JSON.parse(data).map((restaurant)=>{
//             return new searchbar(restaurant);
//         }), (err, docs)=>{});
//       });
//     }
