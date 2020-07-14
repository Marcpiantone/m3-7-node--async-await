const dad = require("./__workshop/exercise-4.1.js");
const tronald = require("./__workshop/exercise-4.2.js");
const geek = require("./__workshop/exercise-4.3.js");
const { getDadJoke2 } = require("./__workshop/exercise-4.1.js");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2.js");
const { getGeekJoke } = require("./__workshop/exercise-4.3.js");

const handleJoke = async (req, res) => {
  const type = req.params.type;

  switch (type) {
    case "geek":
      await getGeekJoke().then((response) =>
        res.status(200).json({
          status: 200,
          type: type,
          joke: response,
        })
      );
    case "dad":
      await getDadJoke2().then((response) =>
        res.status(200).json({
          status: 200,
          type: type,
          joke: response,
        })
      );
    case "tronald":
      await getTronaldDumpQuote().then((response) =>
        res.status(200).json({
          status: 200,
          type: type,
          joke: response,
        })
      );

    default:
      return res.status(404).send("Unrecognized type");
  }
};

module.exports = { handleJoke };
