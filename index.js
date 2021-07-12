const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}// Code your solution in this file!

const returnLastTwoDrivers = function(drivers){
    return drivers.slice( -2)
}

// const selectingDrivers = function(){
//     return returnFirstTwoDrivers().slice(0,1)
// }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fare){
    return function (value){
        return fare * value
    }

}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers,twoDrivers){
    return twoDrivers(drivers)
}

// selectDifferentDrivers(drivers, returnLastTwoDrivers)
// selectDifferentDrivers(drivers, returnFirstTwoDrivers)