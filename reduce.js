//reduce and things

let arr = [1, 2, 3, 4, 5];

let obj = { name: "James", age: 26, sanity: null, hair: "plenty" };

let otherArr = [{ "1": 0 }, { "2": 1 }, { "3": 16 }, { "4": 81 }, { "5": 256 }];

//syntax

// array.reduce((accumulator, item) => {
//     do stuff here
// }, [intial accumulator])

//Grab all even number values from each object in otherArr

let final = otherArr.reduce((acc, ob) => {
  console.log(ob, "ob");
  let val = Object.values(ob);
  console.log(val, "val");

  if (val[0] % 2 === 0) {
    acc.push(val[0]);
  }
  return acc;
}, []);
