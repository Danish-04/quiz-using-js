let NumbersArray = [8,5,3,1,2,9,7,6,4,0];

let len = NumbersArray.length;

for (let i = 0; i < len-1; i++) {
    for (let j = 0; j < len-i-1; j++) {
        if (NumbersArray[j] > NumbersArray[j+1]) {
            let temp = NumbersArray[j];
            NumbersArray[j] = NumbersArray[j+1];
            NumbersArray[j+1] = temp;
        }
    }
}
console.log(NumbersArray)