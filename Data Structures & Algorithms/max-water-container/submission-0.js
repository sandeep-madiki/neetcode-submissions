class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        for (let i=0; i<heights.length-1; i++){
            for (let j=i+1; j<heights.length; j++){
                const height = Math.min(heights[i], heights[j])
                const width = j-i
                const area = height * width
                if (area > res){
                    res = area
                }
            }
        }

        return res
    }
}
