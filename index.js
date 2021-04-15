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
    //creating an auxiliar array where to push our transformed data
    //after executing createEmployeeRecord and passing it each element
    //of our given array (at twoRows) as arguments
    const array = []
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
        hour: hour
    }
    objectEmployee.timeInEvents.push(newEvent)
    console.log(newEvent.type)
    console.log(newEvent.date)
    console.log(newEvent.hour)

    console.log(objectEmployee)


    
    return objectEmployee

    
}
let bpRecord = createEmployeeRecord(["moe", "sizlak", "barkeep", 2])

createTimeInEvent(bpRecord,"2014-02-28 1400") 






