 // Assigning variables; data types - string, number, boolean
 var myName = "Nick";
 var myAge = 24;
 var myFirstJavaScript = false;
 var myFavoriteFruit = "mango";
 var myFavoriteDinosaur = "triceratops";

 // Array, push
 var myArray = [];
 myArray.push(myName);
 myArray.push(myAge);
 myArray.push(myFirstJavaScript);
 myArray.push(myFavoriteFruit);
 myArray.push(myFavoriteDinosaur);
 console.log(myArray);

 // To string, map, filter
 var stringArray = myArray.map((element) => element.toString());
 var filteredArray = stringArray.filter((element) => element.length > 4);;
 console.log(filteredArray);

 // For .. of loop
 for(const element of myArray) {
    console.log(element);
   }

// Function definition
 function getBirthYear(currentAge) { 
    return 2024 - currentAge;
  }

 console.log(getBirthYear(24));
 console.log(getBirthYear(59));
