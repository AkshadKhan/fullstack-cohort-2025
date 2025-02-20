// You just need to implement the countProperties function
function countProperties(user) {
    // Return the number of properties in user
    let count = 0;
    for(const key in user){
      count++;
    }
    return (count===0)?0:count;
  }
  