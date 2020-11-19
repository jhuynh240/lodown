'use strict';

// YOU KNOW WHAT TO DO //

/**
 * 
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 *collection
 * 
 * Syntax: _.each(list, function)
 * 
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * 
 * identity: Returns the value unchanged 
 *  describes the property of objects that distinguishes them from other objects.
 * 
 * @param {*} value: the value to be returned from this function
 * 
 * @returns {*} : the value unchanged
 * 
 * Syntax: _.identity( object );
 * 
 */

 function identity(value){
    return value;
}
 module.exports.identity = identity;

/**
 * 
 * typeOf: returns a string that represents the current type of a variable
 * 
 * @param: will not be able to use on all data types. Date, Null and Arrays can not use typeof.  
 * 
 * @returns: returns the data type of its operand in the form of a string. 
 *           The operand can be any object, function, or variable.
 *
 */
 
 function typeOf(value){
    if(Array.isArray(value)){
        return "array";
    } else if (value === null){
        return "null";
// return the rest
    } else {
        return typeof value;
    }
}

module.exports.typeOf = typeOf;

/**
 * 
 * first: is used to return the first element of the array, i.e. the number at the zeroth index. 
 *        It returns first n elements in the array of m size (n < m) by just passing the variable n 
 *        in the array.
 * 
 * @param: This function accepts two parameter as mentioned above and described below:
 *
 *         array: This parameter is used to hold the array of elements.
 *         variable: It tells the number of elements wanted.
 * 
 * @returns: This function returns the array of elements.
 *
 * Syntax: _.first(array, [n]) 
 * 
 */
 
 function first(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];
    } else if(typeof number !== 'number'){
        return array[0];
    } else {
        return array.splice(0, number);
    }
}

module.exports.first = first;

/**
 * 
 * last: is used to display the last element of the array. It is usually applied to separate the elements 
 *       of an array by making it into 2 arrays. One which contains only the last element and the other 
 *       which contains all the elements except the last one.
 * 
 * @param: This function accepts two parameter which are listed below:
 *         array: This parameter is used to hold the array elements.
 *         n: This parameter is used to hold the last element.
 *
 * 
 * @returns: It returns the last element of the array.
 * 
 * Syntax: _.last( array, [n] ) 
 * 
 */
 
 function last(array, number){
      if(!Array.isArray(array)|| number < 0){
            return [];
    } else if(typeof number !== "number"){
            return array[array.length-1];
    } else if(number > array.length){
            return array;
    } else {
            return array.slice(array.length - number);
    }
}

module.exports.last = last;

/**
 * 
 * indexOf: takes the element from the list one by one and checks whether it is equal to the passed 
 *          element in the second parameter. If it is equal then the result is it’s index otherwise 
 *          -1 is returned. 
 * 
 * @param: It takes three arguments:
 *
 *         The array
 *         The value
 *         The isSorted (optional)
 *
 * 
 * @returns: It returns the position of the passed element.
 * 
 * Syntax: _.indexOf(array, value, [isSorted])
 * 
 */
 
 function indexOf(array, value){
    for(let i = 0; i < array.length; i++){
        if(array[i] === value){
            return i;
        } 
    }       return -1;
}

module.exports.indexOf = indexOf;

/**
 * 
 * contains: is used to check whether a particular item is given in the list of not. This function
 *           needs to pass the list to this function. If list contains large of items then simply define 
 *           the list earlier and pass the name of the list as argument to the _.contians() function.
 * 
 * @param: This function accepts three parameters as mentioned above and described below:
 *
 *         List: This parameters contains the list of items.
 *         value: This parameter is used to store the value which need to search in the list.
 *         fromIndex: It is optional parameter which holds the index to start search.
 *
 * 
 * @returns: This function returns the value which is either true (when the element is present in the list) 
 *           or false (when the element is not in the list).
 * 
 * Syntax: _.contains( list, value, [fromIndex] )
 * 
 */
 
 function contains(array, value){
    return array.includes(value) ? true: false;
}

module.exports.contains = contains;

/**
 * 
 * unique: returns the array which does not contain duplicate elements. The first occurrence of element 
 *         is included in the resultant array. The operation of checking whether the array is duplicate 
 *         or not. It is done by the ‘===’ operation.
 * 
 * @param: This function accepts three parameters which are listed below:
 *
 *         array: This parameter is used to hold the array of elements.
 *         isSorted: It is optional parameter. This parameter is used to hold true for sorted array.
 *         iteratee: It is optional parameter which is used ho hold iteratee function.
 *
 * 
 * @returns: It returns an array of unique elements.
 * 
 * Syntax: _.uniq( array, [isSorted], [iteratee] )
 * 
 */
 
 function unique(array){
    return array.filter((a, b) => array.indexOf(a) === b);
} 

module.exports.unique = unique;

/**
 * 
 * filter: Designed to filter values in a collection based on a test. 
 * Takes a collection, Array or Object, and passes each value 
 * in the collection through a test Function. The test Function returns 
 * true if the value passes the test, false otherwise. Values that pass 
 * the test are collected and returned in an output Array.
 * 
 * @param This function accept three parameters as mentioned above and described below:
 *
 *        list: This parameter is used to hold the list of items.
 *        predicate: This parameter is used to hold the truth condition.
 *        context: The text content which need to be display. It is optional parameter.
 *
 * 
 * @return {Array}: An Array containing the filtered collection values. 
 *                  The Array will contain only the values that passed the test.
 * 
 * Syntax: _.filter( list, predicate, [context] )
 * 
 */
 
 function filter(array, func){
    
    let newArray = [];
      each(array, function(e, i, array){
        let result = func(e, i, array);
          if(result === true) {
            newArray.push(e);
        }
        
    }); return newArray;
    
     
        
    
}

module.exports.filter = filter;

/**
 * 
 * reject: is used to give the answer which does not match with the given condition. It is used to 
 *         find out those elements from the list which does not satisfy the given condition and then 
 *         to make changes to them only. When all the elements of the list are passed to the function/iterates 
 *         and no more elements remains then the _.reject() loop ends. It is opposite of _.filter() function 
 *         as filter selects those items which satisfy the given condition.
 * 
 * @param: Parameters: This function accepts three parameters as mentioned above and described below:
 *
 *         List: This parameter contains the element list.
 *         Predicate: This parameter contains the condition which is used to reject the elements.
 *         Context: It is the text which is used to display. It is optional parameter.
 *
 * 
 * @returns: This function returns the array of elements which does not fulfill the condition of 
 *           _.reject() function.
 * 
 * Syntax: _.reject( list, predicate, [context] )
 * 
 */
 
 function reject(array, func){
    
    let arrayA = [];
      each(array, function(e, i, array){
        let result = func(e, i, array);
           if(result !== true) {
             arrayA.push(e);
        }
        
    }); return arrayA;

}

module.exports.reject = reject;

/**
 * 
 * partition: is used to get an array as input and returns two arrays. The first array containing those 
 *            elements that satisfy the predicate (condition) and the second array contains the remaining 
 *            elements.
 * 
 * @param: This function accepts two parameters as mentioned above and described below:
 *
 *         list: This parameter holds the list of items.
 *         predicate: This parameter holds the truth condition.
 *
 * 
 * @returns: This function returns two separated array based on predicate condition.
 * 
 * Syntax: _.partition(list, predicate)
 * 
 */
 
 function partition(array, func){
    let newArray = [[], []];
      each(array, function(e, key, array){
        var result = func(e, key, array);
          if (result === true) {
            newArray[0].push(e);
          }else if (result === false){
            newArray[1].push(e)
          }
    });
        return newArray;
}

module.exports.partition = partition;

/**
 * 
 * map: is an inbuilt function in Underscore.js library of the JavaScript which is used to produce 
 *      a new array of values by mapping each value in list through transformation function (iteratee). 
 *      It displays the result as a list on the console. In this list the output of the first element, 
 *      i.e, the element at index 0 has it’s result at index 0 of the returned list and when all the 
 *      elements of the list are passed to the function/iteratee and no more elements remain then the 
 *      _.map loop ends.
 * 
 * @param: It accepts two parameters which are specified below-
 *
 *         list: It is the list which contains some elements.
 *         function: It is the function which is executed by taking each element of the list.
 *
 * @returns: It returns the object property value or array element value at the current position.
 * 
 * Syntax: _.map(list, function)
 * 
 */
 
 function map(collection, func){
   let newArray = [];
     each(collection,function(e, i, collection){
        newArray.push(func(e, i, collection));
    })
        return newArray;
    
}

module.exports.map = map;

/**
 * 
 * pluck: is used when we need to extract a list of a given property. Like we have to find out the name 
 *        of all the students, then we can simply apply the _.pluck() function on the details of all the 
 *        students. It will only extract the name from the details of all the stuf=dents and display it. 
 *        The hence formed list will be an array of names only.
 * 
 * @param: It takes two arguments:
 *
 *         List
 *         Property Name: It is the property on which we need to aggregate the content.
 *
 * 
 * @returns: The returned value is an array of that property’s detail which we need to extract. The array
 *           will contain the elements in the same order in which they were in the list.
 * 
 * Syntax: _.pluck(list, propertyName)  
 * 
 */
 
 function pluck(array, prop){
    let newArray = [];
      map(array, function(e, i, array){
        newArray.push(array[i][prop]);
    });
        return newArray;
}

module.exports.pluck = pluck;

/**
 * 
 * every: checks whether all the elements of the array satisfy the given condition or not that is provided 
 *        by a method passed to it as the argument. 
 * 
 * @param: This method accepts five parameters as mentioned above and described below:
 *
 *         callback: This parameter holds the function to be called for each element of the array.
 *         element: The parameter holds the value of the elements being processed currently.
 *         index: This parameter is optional, it holds the index of the currentValue element in the array 
 *                starting from 0.
 *         array: This parameter is optional, it holds the complete array on which Array.every is called.
 *         thisArg: This parameter is optional, it holds the context to be passed as this to be used while 
 *                  executing the callback function.
 *                  If the context is passed, it will be used like this for each invocation of the callback 
 *                  function, otherwise undefined is used as default.
 * 
 * @returns: This method returns Boolean value true if all the elements of the array follow the condition 
 *           implemented by the argument method. If one of the elements of the array does not satisfy the 
 *           argument method, then this method returns false.
 * 
 * Syntax: _.every(list, [predicate], [context])
 * 
 */
 
 function every(collection,func){
   let result = true;
     each(collection, function(e, i, collection){
        if (typeof func === "function"){
        if(!func(e ,i, collection)){
          result = false;
    }
      } else if ( !e ) {
          result = false;
        }
    });
        return result;
}

module.exports.every = every;

/**
 * 
 * some: is used to find whether any value in the given list matches the given condition or not. If at least 
 *       one value satisfies this condition then the output will be true. When none of the values matches 
 *       then the output will be false.  
 * 
 * @param: This function accepts three parameters as mentioned above and described below:
 *
 *         List: This parameter contains the list of data.
 *         Predicate: This parameter is used to hold the test condition.
 *         Context: This parameter contains the text which need to display.
 *
 * 
 * @returns: The return value which is either true (when at least one element of the list fulfills the given 
 *           condition) or false (when none of the elements fulfill the condition).
 * 
 * Syntax: _.some(list, [predicate], [context])
 * 
 */
 
 function some(collection, func){
   let result = false;
     each(collection, function(e, i, collection){
        if(typeof func === "function"){
            if(func(e, i, collection)){
                result = true;
        }
            } else if (e){
                result = true;
            }
    });
        return result;
        
}

module.exports.some = some;

/**
 * 
 * reduce: method is an inbuilt method in Underscore.js which is used to transform an array’s/object’s 
 *         properties into one single value or is used to create a single result from a given list of values. 
 *         When all the elements of the list are passed to the function/iteratee and no more elements remains 
 *         then the _.each loop ends. The iteratee function makes use of memorization, i.e. it is remembering
 *         the return value each time it calculates a value.
 * 
 * @param: This method accept three parameters as mentioned above and described below:
 *
 *         list: It is the list containing some elements.   
 *         iteratee: It is the function which is used to take all the elements of the list and it also 
 *         remember all the returned value.
 *         seed: Initial value.
 *
 * @returns: It returns the value of the last iteration is returned by the _.reduce() function.
 * 
 * Syntax: _.reduce(list, iteratee, seed)
 * 
 */
 
 function reduce(array,func,seed){
        let previous = seed;
        if(seed === undefined){
            let previous = array[0];
            each(array, function( e, i ,array){
                if(i!==0){
                previous= func(previous, e, i );
                }
            });
        return previous;
        }
        each(array, function( e, i ,array){
            previous = func(previous, e, i);
        });
        return previous;
}

module.exports.reduce = reduce;

/**
 * 
 * extend: is used to create a copy of all of the properties of the source objects over the destination 
 *         object and return the destination object. The nested arrays or objects will be copied by using 
 *         reference, not duplicated.
 * 
 * @param: This function accept two parameters as mentioned above and described below:
 *
 *         destination: This parameter holds the destination object file.
 *         sources: This parameter holds the source object file.
 *
 * 
 * @returns: It returns a copy all of the properties of the source objects over the destination object, 
 *           and return the destination object. 
 * 
 * Syntax: _.extend(destination, *sources)
 * 
 */
 
 function extend(obj1, ...obj2){
    Object.assign(obj1, ...obj2);
        return obj1;
}

module.exports.extend = extend;


