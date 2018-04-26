const axios = require('axios');

start()

function start(){
  axios.get('').then(response => {
    let data = response.data;
    drawResults(response.data);
  })
}

function drawResults(){
  
}