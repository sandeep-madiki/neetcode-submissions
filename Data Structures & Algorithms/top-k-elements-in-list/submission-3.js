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
       const buckets = Array(nums.length + 1).fill().map(() => [])
    //    console.log(buckets)

       for (const num in map){
        const freq = map[num]
        // console.log(freq, num)
        buckets[freq].push(Number(num))
       }
       console.log(buckets)
       const res = []
       for (let i=buckets.length-1; i >=0 && res.length < k;  i--){
        for (const num of buckets[i]){
            res.push(num)

            if (res.length === k){
                return res
            }
        }

        
       }
       return res
    }
}
