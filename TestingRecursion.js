let number = 0;

const recurse = num => {
  //console.log("before");
  if (num < 10) {
    //console.log("inside");
    num++;
    return recurse(num);
    //num = recurse(num);
  }
  console.log("end");
  return num;
};

console.log(recurse(number));
