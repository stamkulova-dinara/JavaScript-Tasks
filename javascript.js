//Single number
// function singleNumber(nums) {
//     let result = 0;

//     nums.forEach(element => {
//         result = result ^ element
//     });

//     console.log(result)
//     return result;
// };

// singleNumber([4,1,2,1,2])

// Sort Colors
const sortColors = (nums) => {
    let count = [0, 0, 0]

    for(let num of nums) count[num]++

    let index = 0
    for(let i = 0; i<count.length; i++){
        while(count[i] > 0) {
            nums[index] = i;
            count[i]--;
            index++;
        }
    }
}

console.log(sortColors([2,0,2,1,1,0]))