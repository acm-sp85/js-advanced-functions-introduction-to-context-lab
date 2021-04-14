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
    
    console.log(array)

    return array;
    
    }

createEmployeeRecords([
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
  ])


