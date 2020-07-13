// Exercise 3
// ----------

const { resolveInclude } = require("ejs");

const doublesLater = (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
    if (typeof num !== "number") {
      reject("Not a Number");
    }
  });
  // 2. returns the double of the num
  return promise;
};
// 3. handleSum function (async/await)

const handleSum = async (num) => {
  try {
    console.log(`Processing request...`);
    const result1 = await doublesLater(num);
    const result2 = await doublesLater(result1);
    const result3 = await doublesLater(result2);
    return result3;
  } catch (err) {
    console.log("Error: ", err);
  }
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
