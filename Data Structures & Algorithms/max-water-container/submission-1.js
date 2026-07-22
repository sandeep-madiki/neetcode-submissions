class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        
        let left = 0
        let right = heights.length - 1

        while (left !== right){
            const leftEl = heights[left]
            const rightEl = heights[right]
            const height = Math.min(leftEl, rightEl)
            const width = right - left
            const area = height * width
            if (area > res){
                res = area
            }
            if (leftEl < rightEl){
                left++
            }
            else {
                right--
            }
        }

        return res
    }
}
