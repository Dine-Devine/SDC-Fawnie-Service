const {Client} = require('pg');

const pgUser = process.env.PG_USER;
const pgPASS = process.env.PG_PASS;

const client = new Client({
    user: pgUser,
    host: 'localhost',
    database: 'restuarants',
    password: pgPASS,
    port: 5432,
})
client.connect()

// client.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//     client.end()
//   })


  
  
let createData = (obj, cb) => {
    const text = `INSERT INTO data (uuid, name, bld, category, images) 
    VALUES (${obj.uuid}, '${obj.name}', '${obj.bld}', '${obj.category}', '${obj.images}')`
    client.query(text, (err, data) => {
        console.log('inside client queury')
        if (err) {
            console.log(err)
        } else {
            cb(null,data);
        }
    })
}

let deleteData = (obj, cb) => {
    const text = `DELETE from data WHERE uuid = ${obj.uuid}`
    client.query(text, (err,data) => {
        if(err) {
        console.log('error in deleting data from DB', err)
        } else {
        console.log('sucessfully deleted data from DB', data)
        cb(null,data);
        }
    })
};

let readData = (obj, cb) => {
    const text = `SELECT * from data WHERE uuid = ${obj.uuid}`
    client.query(text, (err,data) => {
        if(err) {
        console.log(err)
        } else {
        cb(null,data)
        }
    })
}

let updateData = (target, obj,cb) => {
    const keys = Object.keys(obj);
    let string = ''
    for(let i = 0; i < keys.length; i++){
        if(keys[i] === 'name') {
            string += `${keys[i]} = '${obj[keys[i]]}',`;
        }
        if(keys[i] === 'bld') {
        string += `${keys[i]} = '${obj[keys[i]]}',`;
        }
        if(keys[i] === 'category') {
        string += `${keys[i]} = '${obj[keys[i]]}',`;
        }
        if(keys[i] === 'images') {
            string += `${keys[i]} = '${obj[keys[i]]}',`;
        }         
    }
    string = string.slice(0,string.length-1);
    const text = `UPDATE data SET ${string} WHERE (uuid = ${target.uuid})`;
        client.query(text,(err,data) => {
            if(err) {
                console.log('error in updating data from DB', err);
                cb(err,null)
            } else {
                console.log('data sucessfully updated', data);
                cb(null,data);
            }
        })
};

module.exports = {createData, deleteData, readData, updateData};