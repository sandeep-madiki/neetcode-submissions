class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map()
        for (let i=0; i<nums.length; i++){
            const  n = nums[i]
            const required = target - n
            if (map.has(required)){
                return [map.get(required), i]
            }
            else {
                map.set(n, i)
            }
        }
    }
}
