// You just need to implement the createStudentProfile function
function createStudentProfile(name, age, grade) {
    // Return an object with name, age, and grade
    if(typeof name!='string' || typeof age != 'number' || age<=5  || typeof grade!='string' || !(grade.endsWith("th")))
    {
      return "Invalid input";
    }
    
    return {
      name : name,
      age : age,
      grade : grade
    }
  }
  
  