function persistence(n) {
    let numArray = []
    let multiplicationCount = 0;
     n = n.toString().split('').forEach(element => {
        numArray.push(parseInt(element))
      });
      const reducer = (accumulator, currentValue) => accumulator * currentValue;
      while(numArray.length > 1) {
        multiplicationCount+=1;
        n = numArray.reduce(reducer).toString().split('');
        numArray = [];
        n.forEach(element => {
          numArray.push(parseInt(element))
        });
      }
     numArray.reduce(reducer);
     return multiplicationCount;
 }

 console.log(persistence(4)) // 0