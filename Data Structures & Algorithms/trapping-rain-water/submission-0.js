class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0
        const prefix = [height[0]]
        for (let i=1; i<height.length; i++){
           const temp = Math.max(prefix[i-1], height[i])
           prefix.push(temp)
        }
        
        const suffix = [height[height.length-1]]
        for (let i=height.length-2; i >=0; i--){
            const temp = Math.max(height[i], suffix[0])
            suffix.unshift(temp)
        }
        // console.log(suffix)

        for (let i=1; i<height.length-1; i++){
            const leftMax = prefix[i-1]
            const rightMax = suffix[i+1]
            const minHeight = Math.min(leftMax, rightMax)
            const water = minHeight - height[i]
            if (water > 0){
                res = res+water
            }
        }
        console.log(res)
        return res
    }
}
