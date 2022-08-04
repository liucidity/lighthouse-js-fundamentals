const chooseStations = function (stations) {
  // Your code in here ..//create a new array to add suitable voting stations 
  let goodStations = [];
  
  //look into the array of each school to see the type, and capacity
  
  //loop through the stations array, and check second and third elements within each array

//   for (let x = 0; x < stations.length; x++){


//     // check if second item in array is > 20 and if third element is 'school' or 'community centre'
//     if (stations[x][1] >= 20 && (stations[x][2] == 'school' || stations[x][2] == 'community centre')){
//       //add stations to our goodStations array
//       goodStations.push(stations[x][0]);
//     } else {
//       console.log(`${stations[x][0]} is no good`);
//     }
//   }
//   return goodStations;
// };

//instead of using above ^ code, we can try an for.. of statement:
  for (let station of stations){
    let buildingName = station[0]
    let capacity = station[1];
    let buildingType = station[2];

    if (capacity >= 20 && (buildingType == 'school' || buildingType == 'community centre')){
      console.log(buildingName)
      goodStations.push(buildingName);
    } else {
      console.log(`${buildingName} is no good`)
    }
  }
    console.log(goodStations);
    return goodStations;
};

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);