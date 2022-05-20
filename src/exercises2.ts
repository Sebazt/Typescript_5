const ejercicio1 = (birds: string[]): string[] => {
  const geese: string[] = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];
  const newStringArray: string[] = [];
  birds.forEach((element) => {
    if (!geese.includes(element)) {
      newStringArray.push(element);
    }
  });
  return newStringArray;
};
console.log(
  "---------------------------exercise 1 ---------------------------------------"
);
console.log(
  ejercicio1([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

const ejercicio2 = (numbers: string): string => {
  const arrayString: string[] = numbers.split(" ");
  const numberArray: number[] = arrayString.map((element) => parseInt(element));
  /* 
  let auxMax: number = 0;
  let auxMin: number = 0; */

  const auxMax1: number = Math.max(...numberArray);
  const auxMin1: number = Math.min(...numberArray);

  /* arrayString.forEach((element) => {
    if (parseInt(element) > auxMax) {
      auxMax = parseInt(element);
    }
    if (parseInt(element) < auxMin) {
      auxMin = parseInt(element);
    }
  });
 */
  const result: string = `${auxMax1} ${auxMin1}`;

  return result;
};
console.log(
  "---------------------------exercise 2 ---------------------------------------"
);
console.log(ejercicio2("1 9 3 4 -5"));

const ejercicio3 = (str: string): number => {
  const arrayVowels: string[] = ["a", "e", "i", "o", "u"];
  const stringArray: string[] = str.split("");
  let i: number = 0;
  stringArray.forEach((element) => {
    if (arrayVowels.includes(element)) i++;
  });

  return i;
};
console.log("---------------------------exercise 3 ---------------------------------------");
console.log(ejercicio3("aswwqasshiiioonvca"));
