function loopyLighthouse (range, multiples, words) {


  let i = range[0];

  while (i <= range[1]) {

    if (i % multiples[0] === 0 && i % multiples[1] === 0){
      console.log(words[0]+words[1]);
    } else if (i % multiples[1] === 0){
      console.log(words[1]);
    } else if (i % multiples[0] === 0){
      console.log(words[0])
    } else {
      console.log(i);
    }
    i++
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

//The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".