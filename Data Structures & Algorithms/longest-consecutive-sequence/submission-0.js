class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums)
        let longest = 0

        for (const num of numSet){
            if (!numSet.has(num - 1)){
               let current = num
               let length = 1

               while (numSet.has(current + 1)){
                length++
                current++
               }

               longest = Math.max(longest, length)
            }
        }

        return longest
    }
}
