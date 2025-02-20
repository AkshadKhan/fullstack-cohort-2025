// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
    // Return the value from the nested object based on keyPath
    const val = keyPath.split(".").reduce((acc,key)=>{
      return acc && acc[key];
    },obj);
    if(val===undefined) return "Key not found";
    else return val;
  }
  
