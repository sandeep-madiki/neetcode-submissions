class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0
        
        let left = 0
        let right = height.length-1

        let leftMax = 0
        let rightMax = 0

        while (left < right){ 
            if (height[left] < height[right]){
                // const waterHeight = Math.min(leftMax, rightMax) - height[left]
                res += Math.max(0, leftMax - height[left])
                leftMax = Math.max(height[left], leftMax)
                left++
            } else {
                // const waterHeight = Math.min(leftMax, rightMax) - height[right]
                res += Math.max(0, rightMax - height[right])
                rightMax = Math.max(height[right], rightMax)
                right--
            }
        }

        return res
    }
}
