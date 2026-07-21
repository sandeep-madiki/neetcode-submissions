class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const res = [];
        for (let i = 0; i < sortedNums.length; i++) {
            const target = sortedNums[i];
            const previous = sortedNums[i - 1];
            if (i > 0 && target === previous) {
                continue;
            }

            let left = i + 1;
            let right = sortedNums.length - 1;
            while (left < right) {
                const sum = sortedNums[left] + sortedNums[right];
                const total = sum + target
                const found = total === 0;
                
                if (total > 0) {
                    right--;
                }
                if (total < 0) {
                    left++;
                }
                if (found) {
                    const triplet = [target, sortedNums[left], sortedNums[right]];
                    res.push(triplet);
                    

                    while (left < right && sortedNums[left] === sortedNums[left+1]){
                        left++
                    }
                    while (left < right && sortedNums[right] === sortedNums[right-1]){
                        right--
                    }

                    left++;
                    right--;
                }
            }
        }

        return res;
    }
}
