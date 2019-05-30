function findOutlier(integers){
    let modArray = [];
    let evenCount = 0
    let oddCount = 0
    let even,odd;
    integers.forEach(integer => {
      modArray.push(integer % 2);
      if( integer % 2 ==0 || integer % 2 == -0) {
        even=integer;
        evenCount +=1;
        
      }
      else if(integer % 2 == 1 || integer % 2 == -1){
        odd = integer;
        oddCount +=1;
      }
    })
    return evenCount == 1 ? even : odd
  }