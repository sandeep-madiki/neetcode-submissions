class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
       let top = 0
       let bottom = matrix.length - 1

       while (top <= bottom){
        const mid = Math.floor((top+bottom) / 2)
        const arr = matrix[mid]
        if (arr[arr.length-1] < target){
            top = mid + 1
        } else if (arr[0] > target){
            bottom = mid - 1
        } else {
            let left = 0
            let right = arr.length - 1
            while (left <= right){
                const center = Math.floor((left + right) / 2)
                if (arr[center] === target){
                    return true
                }
                if (arr[center] < target){
                    left = center + 1
                } else {
                    right = center - 1
                }
            }

            return false
        }
       }
       return false
    }
}
