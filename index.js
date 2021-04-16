// Your code here
function createEmployeeRecord (array) {

    const [firstName,familyName,title, payPerHour] = array;

    const testEmployee = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []

        
    }
    // console.log(testEmployee)
    return testEmployee;
    
    
}

function createEmployeeRecords(twoRows){
    const array = []
    //creating an auxiliar array where to push our transformed data
    //after executing createEmployeeRecord and passing it each element
    //of our given array (at twoRows) as arguments
    twoRows.forEach(element => {
        const objectEmployees = createEmployeeRecord(element)
        
        array.push(objectEmployees)
        
        return objectEmployees;
        
    });
    
    // console.log(array)

    return array;
    
    }


function createTimeInEvent(objectEmployee,timeString){


    const stringToArray =timeString.split(" ");
    const [date , hour] = stringToArray;
    const newEvent = {
        type: "TimeIn",
        date: date,
        hour: parseInt(hour,10)
    }
    objectEmployee.timeInEvents.push(newEvent)
    
    return objectEmployee
    
    
}
function createTimeOutEvent(objectEmployee,timeString){
    const stringToArray =timeString.split(" ");
    const [date , hour] = stringToArray;
    const newEvent = {
        type: "TimeOut",
        date: date,
        hour: parseInt(hour,10)
    }
    objectEmployee.timeOutEvents.push(newEvent)

    return objectEmployee


}

//RUNNING TESTS
let bpRecord = createEmployeeRecord(["moe", "sizlak", "barkeep", 2])

createTimeInEvent(bpRecord,"2013-02-22 1400") 
createTimeOutEvent(bpRecord,"2013-02-22 1600")
createTimeInEvent(bpRecord,"2013-01-1 0900") 
createTimeOutEvent(bpRecord,"2013-01-1 1000")
createTimeInEvent(bpRecord,"2013-11-5 0900") 
createTimeOutEvent(bpRecord,"2013-11-5 1900")
createTimeInEvent(bpRecord,"2013-10-15 1400") 
createTimeOutEvent(bpRecord,"2013-10-15 1600")
createTimeInEvent(bpRecord,"2013-11-1 0900") 
createTimeOutEvent(bpRecord,"2013-11-1 1000")
createTimeInEvent(bpRecord,"2013-12-5 0900") 
createTimeOutEvent(bpRecord,"2013-12-5 1900")

let bpRecord2 = createEmployeeRecord(["bart", "simpson", "rascal", 3])

createTimeInEvent(bpRecord2,"2014-02-23 1400") 
createTimeOutEvent(bpRecord2,"2014-02-23 1600")
createTimeInEvent(bpRecord2,"2014-01-1 0900") 
createTimeOutEvent(bpRecord2,"2014-01-1 1000")
createTimeInEvent(bpRecord2,"2014-11-5 0900") 
createTimeOutEvent(bpRecord2,"2014-11-5 1900")
createTimeInEvent(bpRecord2,"2014-10-15 1400") 
createTimeOutEvent(bpRecord2,"2014-10-15 1600")
createTimeInEvent(bpRecord2,"2014-11-1 0900") 
createTimeOutEvent(bpRecord2,"2014-11-1 1000")
createTimeInEvent(bpRecord2,"2014-12-5 0900") 
createTimeOutEvent(bpRecord2,"2014-12-5 1900")


let bpRecord3 = createEmployeeRecord(["lisa", "simpson", "student", 5])

createTimeInEvent(bpRecord3,"2015-02-24 1400") 
createTimeOutEvent(bpRecord3,"2015-02-24 1600")
createTimeInEvent(bpRecord3,"2015-01-1 0900") 
createTimeOutEvent(bpRecord3,"2015-01-1 1000")
createTimeInEvent(bpRecord3,"2015-11-5 0900") 
createTimeOutEvent(bpRecord3,"2015-11-5 1900")
createTimeInEvent(bpRecord3,"2015-10-15 1400") 
createTimeOutEvent(bpRecord3,"2015-10-15 1600")
createTimeInEvent(bpRecord3,"2015-11-1 0900") 
createTimeOutEvent(bpRecord3,"2015-11-1 1000")
createTimeInEvent(bpRecord3,"2015-12-5 0900") 
createTimeOutEvent(bpRecord3,"2015-12-5 1900")





function hoursWorkedOnDate(bpRecord,dateGiven){

//I need to look inside the Object for the DATE and pull the timeInEvents and timeOutEvents
//then return the difference

    const dateIn = bpRecord.timeInEvents
    const dateOut   = bpRecord.timeOutEvents

    const resultDateIn = dateIn.find(({date}) => date === dateGiven);
    const resultDateOut = dateOut.find(({date}) => date === dateGiven);

    const timeIn = resultDateIn.hour
    const timeOut = resultDateOut.hour

    // console.log(resultDateIn)
    // console.log(timeIn)
    // console.log(timeOut)


    return (timeOut - timeIn)/100
    



}
//RUNNING TESTS
// hoursWorkedOnDate(bpRecord, "2014-02-28")



function wagesEarnedOnDate(bpRecord,dateGiven){
    const hoursWorked = hoursWorkedOnDate(bpRecord,dateGiven)
    const wage = parseInt(bpRecord.payPerHour,10)

    // console.log(wage)
    // console.log(hoursWorked)

    console.log(hoursWorked*wage)

    return hoursWorked*wage



}
//RUNNING TESTS
// wagesEarnedOnDate(bpRecord, "2014-02-28")


function allWagesFor(bpRecord) {

    console.log(bpRecord)

    const arrayAllDatesWorked = []
    bpRecord.timeInEvents.forEach(element => {

        arrayAllDatesWorked.push(element.date)
        
    });

    console.log(arrayAllDatesWorked)

    const arrayTotalHoursWorked = []


    arrayAllDatesWorked.forEach(element => {

        arrayTotalHoursWorked.push(wagesEarnedOnDate(bpRecord,element))
        
    });

    let total = arrayTotalHoursWorked.reduce(
        ( accumulator, currentValue ) => accumulator + currentValue,
        0
      )

      return total;

}
//TESTING
// allWagesFor(bpRecord)


function calculatePayroll(arrayOfEmployees) {

    const arrayOfDates =[]
   
    arrayOfEmployees.forEach(element => {

        let elementInEvents = element.timeInEvents
        
        for (let i = 0 ; i < elementInEvents.length ; i++){
            

            arrayOfDates.push(elementInEvents[i].date)

        }
    
    });
    
    console.log(arrayOfDates)


        // hoursWorkedOnDate(objectEmployee,dateGivenString)



}


calculatePayroll([bpRecord,bpRecord2,bpRecord3])
