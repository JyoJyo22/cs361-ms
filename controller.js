// receive beach name from POST from React app, 
// then send this name to mapbox API which will convert the name to lat/long. 
// This lat/long will be a JSON obj and you send this JSON obj back to the React app. 
// This API will be public on your github which will be linked to render.com for public use


import 'dotenv/config';
import express from 'express';
import axios from 'axios';
// import the export obj from model.mjs and name it LeetCodeModels
// import * as LeetCodeModels from './model.mjs';

// const PORT = process.env.PORT;
const PORT = 3000;
const app = express();
// REST controllers require JSON MIME type   (so: npm install rest)
app.use(express.json());



// const geocodingAxios = async (url) => {
//     await axios
//         .get(url)
//             .then((response) => {
//             if (response == null || response == undefined) {
//                 console.log("Axios failed");
//             }
//             console.log("AXIOS data: ", response.data);
//             })
//         .catch(error => {
//             console.log(error);
//         })

//     return response.data;
//     }


//  POST CONTROLLER     ######################################
app.get('/get/:beachName', async (req, res) => {

    const beachName = req.params.beachName;           
    console.log("REQ BODY: " + beachName);

    const mapbox_token = 'pk.eyJ1IjoianlvanlvIiwiYSI6ImNsaGFvdnRieTBqZmgzcnMwbnZmZzZmcWoifQ.6AksXc5oklL4ZU-MPrkKWw';

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + `${beachName}` + '.json?access_token=' + `${mapbox_token}`;
    console.log(url);

    try {
        const response = await axios.get(url);
        res.json(response.data);
        console.log(response.data);

    } catch (error) {
        console.error(error);
    }

});


    // const mapbox_token = 'pk.eyJ1IjoianlvanlvIiwiYSI6ImNsaGFvdnRieTBqZmgzcnMwbnZmZzZmcWoifQ.6AksXc5oklL4ZU-MPrkKWw';
        // tokens are needed to access the MapBox API

    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + `${beachName}` + '.json?access_token=' + `${mapbox_token}`;
    // console.log(url);

    // const axios_res = geocodingAxios(url);
    // console.log("AFTER AXIOS FUNCTION: ", axios_res);

    // res.send(axios_res);
    // res.send(axios_res); 
    // res.send(axios_res);
    
    // const geocoding = await fetch(url, { method: 'GET' })
    //     .then(response => {
    //         if (response !== null && response !== undefined) {
    //             console.log(response);
    //             console.log("Successfully retrieved beach lat/long from MapBox API");
    //             // parse geocoding for lat/long
    //             //res.send(response);
    //         } else {
    //             console.log("Failed to retrieve beach lat/long from MapBox API");
    //             res.send("The Microservice failed to retrieve the lat/long");
    //         }
    //     })
    //     .catch(error => {
    //         console.error(error);
    //         res.send("The Microservice failed to retrieve the lat/long");
    //     })


    // const geocodingAxios = async () => {
    //     axios
    //         .get(url)
    //             .then((response) => {
    //             if (response == null || response == undefined) {
    //                 console.log("Axios failed");
    //             }
    //             console.log("AXIOS data: ", response.data);
    //             })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     }


    // res.json(geocoding);


// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}...`);
// });