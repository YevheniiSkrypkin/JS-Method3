//indexOf

function indexOf(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
  
    return -1;
}


// lastIndexOf
function lastIndexOf(arr, element) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === element) {
        return i;
      }
    }
  
    return -1;
}

//find

function find(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
        return arr[i];
      }
    }  
    return undefined;
}

// findIndex

function findIndex(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
      if (cb(arr[i])) {
        return i;
      }
    }
  
    return -1;
}

//includes

function includes(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return true;
      }
    }
  
    return false;
}
  


  //every

function every(arr, callback, thisArg) {
    let i, length = arr.length;
    for (i = 0; i < length; i = i + 1) {
      if (!callback.call(thisArg, arr[i], i, arr)) {
        return false;
      }
    }
    return true;
};


//some 

function some(arr, callback, thisArg) {
    for (i = 0; i < arr.length; i = i + 1) {
      if (callback.call(thisArg, arr[i], i, arr)) {
        return true;
      }
    }
    return false;
};



function isEven(x) {
    return x % 2 === 0;
  }
  
  let data = [1, 2, 2, 3, 3, 4, 4, 5, 5];


console.log("indexOf", indexOf(data, 3));
console.log("lastIndexOf", lastIndexOf(data, 5));
console.log("find", find(data, isEven));
console.log("findIndex", findIndex(data, isEven));
console.log("includes", includes(data, "0"));