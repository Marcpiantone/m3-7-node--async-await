const request = require("request-promise");
const { resolveInclude } = require("ejs");
const { response } = require("express");

// getDadJoke

const getDadJoke = new Promise((resolve, reject) => {
  try {
    request({
      uri: "https://icanhazdadjoke.com",
      headers: { Accept: "application/json" },
      json: true,
    }).then((response) => {
      resolve(response.joke);
    });
  } catch (err) {
    reject(err);
  }
});

// 4.1
getDadJoke.then((data) => console.log(data));

// DIFFERENT WAY... SAME RESULT

const getDadJoke2 = async () => {
  try {
    const response = await request({
      uri: "https://icanhazdadjoke.com",
      headers: { Accept: "application/json" },
      json: true,
    });
    return response.joke;
  } catch (err) {
    console.log(err);
  }
};

// 4.1
getDadJoke2().then((data) => console.log(data));

module.exports = { getDadJoke, getDadJoke2 };
