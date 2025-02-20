// You just need to implement the cleanObject function
function cleanObject(obj) {
    // Remove all properties with null or undefined values
    for(const key in obj){
      if(obj[key]===undefined || obj[key]==null) delete obj[key];
    }
    return obj;
  }
  
 