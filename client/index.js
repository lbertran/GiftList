const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const readline = require("readline");

const serverUrl = 'http://localhost:1225';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  rl.question("What is your name? ", async function (name) {
    const { data: gift } = await axios.post(`${serverUrl}/gift`, {
      name: name,
    });
    console.log({ gift });
  });

  

  
}

main();