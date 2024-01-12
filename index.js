const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=(drivers)=>{
   return drivers.slice (0,2);
}


const returnLastTwoDrivers=(drivers)=>{
    return drivers.slice (-2);
}

const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]
 
function createFareMultiplier(num){
    return function(y){
        return num*y;
    }
}
 const fareDoubler=createFareMultiplier(2);
 const fareTripler=createFareMultiplier(3);

 const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
  };
