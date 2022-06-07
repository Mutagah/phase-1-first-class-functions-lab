// Code your solution in this file!
const returnFirstTwoDrivers = function FirstDrivers(drivers){
        return drivers.slice(0,2);
}

const returnLastTwoDrivers = function LastDrivers(drivers)
{
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(fare){
    return function(numberOfTimes)
    {
        return numberOfTimes* fare;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function(arrayOfDrivers, firstTwoDrivers){
        return firstTwoDrivers(arrayOfDrivers);
}
