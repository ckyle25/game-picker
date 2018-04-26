const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const gc = require('./controllers/game_controller.js')
// const config = require('../src/config');
const router = express.Router();
const request = require('request');
// const axios = require('axios');

let app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static( __dirname + '/../public'))

const baseURL = "/api/myGames"
app.get(baseURL,gc.read)
app.post(`${baseURL}`,gc.create)
app.put(`${baseURL}/:id`,gc.update)
app.delete(`${baseURL}/:id`,gc.delete)

app.get('/game',(req,res,next) => {
    axios.get('https://www.giantbomb.com/api/game/3030-34407/?api_key=b016ac3d46ccfa9ced1a62719e40c70a5bfd8191&format=json&field_list=name')
        .then(response => {
            console.log(req.headers)
            // res.json(response)
        })
}) 

// router.get('/getGameInfo', function(req, res, next) {
//     request({
//       url: 'http://www.giantbomb.com/api/search',
//       qs: {
//         api_key: 'b016ac3d46ccfa9ced1a62719e40c70a5bfd8191',
//         query: 'World of Warcraft: Legion'
//       }
//     }).pipe(res);
//   });

// module.exports = router;

app.listen(3001,() => console.log('Im Listening on port 3001'));
