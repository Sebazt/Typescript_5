console.log("-------------------------- exercise 1 --------------------------");

const exercise1 = (month:number): number  => {
  if(month >= 1 && month <= 3){
    return 1
  };
  if(month >= 4 && month <= 6){
    return 2
  };
  if(month >=7 && month <= 9){
    return 3
  }
  if(month >=10 && month <= 12){
    return 4
  }
  return 0
}
console.log(exercise1(4));


console.log("-------------------------- exercise 2 --------------------------");
const exercise2 = (value:boolean):string=>{
  return value === true ? "Yes" : "No"
}
console.log(exercise2(true))

console.log("-------------------------- exercise 3 --------------------------");
const exercise3 = (myName:string):string=>{
  const myNameArray:string[] = myName.split(" ")
  const formatName:string = myNameArray[0][0].toUpperCase() + "." + myNameArray[1][0].toUpperCase();
  return formatName
}
console.log(exercise3("juan sebastian"))