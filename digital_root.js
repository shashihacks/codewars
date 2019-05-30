function digital_root(n) {
  let numArray = []
    n = n.toString().split('').forEach(element => {
      numArray.push(parseInt(element))
    });
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    while(numArray.length > 1) {
      n = numArray.reduce(reducer).toString().split('');
      numArray = [];
      n.forEach(element => {
        numArray.push(parseInt(element))
      });
    }
   return (numArray.reduce(reducer));  
}

console.log(digital_root(132189)) //2