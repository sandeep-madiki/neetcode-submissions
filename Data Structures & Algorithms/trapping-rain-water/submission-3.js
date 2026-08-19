class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0
        const prefix = [height[0]]
        for (let i=1; i<height.length; i++){
            const max = Math.max(height[i], prefix[i-1])
            prefix.push(max)
        }

        const suffix = new Array(height.length)
        suffix[height.length-1] = height[height.length-1]
        for (let i=height.length-2; i>=0; i--){
            const max = Math.max(height[i], suffix[i+1])
            suffix[i] = max
        }

        for (let i=0; i<height.length-1; i++){
            const water = Math.min(prefix[i], suffix[i]) - height[i]
            res += Math.max(0, water)
        }

        return res
    }
}
