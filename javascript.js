function singleNumber(nums) {
    let result = 0;

    nums.forEach(element => {
        result = result ^ element
    });

    console.log(result)
    return result;
};

singleNumber([4,1,2,1,2])