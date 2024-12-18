
/* 
Fibonacci - each number is the sum of the previous two numbers
Sequence = 0, 1, 1, 2, 3, 5, 8, 13...
*/

/*Takes a number and returns an array of all fibonacci sequence up to and including that numbers position*/
function fibIterative(n) {
    //Make a base array with the starter numbers zero and one
    let array = []
    array.push(0);
    array.push(1);

    for(let i = 2; i <= n; i++){
        let curr = (array[i-1] + array[i-2]);
        array.push(curr);
    }

    console.log("fibonacci iterative array", array);
}

fibIterative(8);

function fibRecursiveArray(n) {
    console.log("This was printed recursively");
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return [0, 1];
    }

    const sequence = fibRecursiveArray(n - 1);
    const nextNumber = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(nextNumber);

    return sequence;
}

const fibonacciArray = fibRecursiveArray(8);
console.log("fibonacci recursive array", fibonacciArray);