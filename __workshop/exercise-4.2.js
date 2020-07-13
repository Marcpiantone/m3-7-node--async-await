const request = require("request-promise");
const { promiseImpl } = require("ejs");

const getTronaldDumpQuote = async () => {
  try {
    const response = await request({
      uri: "https://www.tronalddump.io/random/quote",
      headers: { Accept: "application/json" },
      json: true,
    });
    return response.value;
  } catch (err) {
    console.log(err);
  }
};
getTronaldDumpQuote().then((data) => console.log(data));

module.exports = { getTronaldDumpQuote };
