// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject("Error: Not all items in the array are strings!");
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.sort())
      : reject("Error: Something went wrong with sorting words.");
  });
};

const textTransform = async (array) => {
  try {
    const firstResult = await makeAllCaps(array);
    //console.log(firstResult);
    const secondResult = await sortWords(firstResult);
    return secondResult;
  } catch (err) {
    console.log(`ERROR ${err}`);
  }
};

const test = async () => {
  console.log(await textTransform(["cucumber", "tomatos", "avocado"]));
};

// test();
// textTransform(["cucumber", "bacon", "avocado"]).then((result) => {
//   console.log(result);
// });
textTransform(["cucumber", 44, true]).then((result) => {
  console.log(result);
});
