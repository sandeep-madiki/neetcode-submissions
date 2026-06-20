class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}
        for (let i=0; i<nums.length; i++){
            const  n = nums[i]
            const required = target - n
            if (map[required] !== undefined){
                return [map[required], i]
            }
            else {
                map[n] = i
            }
        }
    }
}
