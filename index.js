// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
  return function(fare) {
    return fare*multiplier;
  }
}

const fareDoubler = createFareMultiplier(2);

fareDoubler(100);

const fareTripler = createFareMultiplier(3);

fareTripler(100);

const selectDifferentDrivers = (arr, func) => {
  return func(arr);
}