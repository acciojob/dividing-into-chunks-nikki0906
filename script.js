const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
    let currentChunk = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] <= n) {
            currentChunk.push(arr[i]);
            currentSum += arr[i];
        } else {
            result.push(currentChunk);
            currentChunk = [arr[i]];
            currentSum = arr[i];
        }
    }

    if (currentChunk.length > 0) {
        result.push(currentChunk);
    }

    return result;
};

   const n = prompt("Enter n: ");
   alert(JSON.stringify(divide(arr, n)));
