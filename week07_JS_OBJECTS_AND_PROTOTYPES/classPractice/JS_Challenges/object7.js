// You just need to implement the objectToArray function
function objectToArray(obj) {
    // Convert the object into an array of key-value pairs
    let arr = [];
    for(const key in obj){
      arr.push([key,obj[key]])
    }
    return arr;
  }
  
