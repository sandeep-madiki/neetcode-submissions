class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const stack = []
        let maxValue = 0

        for (let i=0; i <= heights.length; i++){
            const currentHeight = i === heights.length ? 0 : heights[i]

            while(stack.length && currentHeight < heights[stack[stack.length-1]]){
                const height = heights[stack.pop()]
                const left = stack.length ? stack[stack.length-1] : -1

                const width = i - left - 1
                const area = height * width

                maxValue = Math.max(area, maxValue)
            }

            stack.push(i)
        }
        return maxValue
    }
}
