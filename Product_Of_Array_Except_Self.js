var productExceptSelf = function(nums) {
    let answer = [];

    for(let i = 0; i < nums.length; i++){
        let total = 1;
        for(let j=0; j < nums.length; j++){
            if(i !== j) total *= nums[j];
        }
        answer.push(total);
    }
    return answer;
};