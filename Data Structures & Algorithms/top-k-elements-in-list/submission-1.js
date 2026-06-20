class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        for (const n of nums){
            map[n] = (map[n] || 0) + 1
        }
        const res = []
        for (const item in map){
            res.push([item, map[item]])
        }
        const sortedRes = res.sort((a, b) => b[1] - a[1])
        
        const firstK = sortedRes.slice(0, k)
      
        return firstK.map((i) => i[0])
    }
}
