const request = require("request-promise");

const getGeekJoke = async () => {
  try {
    const response = await request({
      uri: "https://geek-jokes.sameerkumar.website/api?format=json",
      headers: { Accept: "application/json" },
      json: true,
    });
    return response.joke;
  } catch (err) {
    console.log(err);
  }
};

getGeekJoke().then((data) => console.log(data));
