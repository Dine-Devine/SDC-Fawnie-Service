const faker = require('faker');
//const axios = require('axios');
const fs = require('fs');

// create data for csv file for post gres data base
// used pipe to seperate data as , is not suffiecient due to commas in name field

// const dataCreator = () => {

//     for (let i = 0; i < 10000000; i++) {
//         let data = `${i+1}| "${faker.fake("{{company.companyName}}")}"| "${["Italian", "Mexican", "Thai", "Japanese", "Tex-Mex", "Seafood", "Diner"][Math.floor(Math.random()*7)]}"| "${["Breakfast", "Lunch", "Dinner"][Math.floor(Math.random()*3)]}"| "${faker.fake("{{image.food}}")}" \n`

//         fs.appendFileSync('data1.csv', data, (err) => {
//             if (err) {
//                 console.log('error', err);
//             }
//         })
        
//     };
// }

// invoke datacreator so function can generate data for csv file
//dataCreator();


///////  - below is to created data for a json file for mongo data base

// let counter = 1;

// const creator = () => {
//     let Restaurant  = {
//         name : faker.company.companyName(),
//         bld : ["Breakfast", "Lunch", "Dinner"][Math.floor(Math.random()*3)],
//         category : ["Italian", "Mexican", "Thai", "Japanese", "Tex-Mex", "Seafood", "Diner"][Math.floor(Math.random()*7)],
//         images : [faker.image.food(),faker.image.food(),faker.image.food(),faker.image.food(),faker.image.food(),faker.image.food(),faker.image.food(),faker.image.food(),faker.image.food(),faker.image.food() ],
//         uuid : counter++
//     }
//     return JSON.stringify(Restaurant);
// }

// for(let i = 0; i < 10000000; i++){

//     fs.appendFileSync('data.json', creator()+'\n', (err)=>{
//         if(err){
//             console.log(err, "ya borked it");
//         }else{
//             console.log('not borked');
//         }
//     })
// }


const dataCreator = () => {

    for (let i = 9000000; i < 10000000; i++) {
        let data = `${i+1} \n`

        fs.appendFileSync('uuid.csv', data, (err) => {
            if (err) {
                console.log('error', err);
            }
        })
        
    };
}

dataCreator();
