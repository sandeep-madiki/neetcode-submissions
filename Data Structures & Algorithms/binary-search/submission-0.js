class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        for (let i=0; i<nums.length; i++){
            const t = nums[i]
            if (t === target){
                return i
            }
        }
        return -1
    }
}
