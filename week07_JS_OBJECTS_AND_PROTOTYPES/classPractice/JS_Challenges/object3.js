// Write a function to check if an object has a discount property or not
// You just need to implement the hasDiscount function
function hasDiscount(product) {
    // Check if product has discount property
    if("discount" in product) return true;
    else return false;
  }