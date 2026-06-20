class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set()
        for (let i of nums){
            if (seen.has(i)){
                return true
            } else {
                seen.add(i)
            }
        }
        return false
    }
}
