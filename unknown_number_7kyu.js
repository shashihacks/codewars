function findUnknowNumber(x,y,z){
   let number=1;
   while(!(number%3==x && number%5==y && number%7==z)) {
     number+=1
   }
   return number
  }
console.log(findUnknowNumber(2,3,2))