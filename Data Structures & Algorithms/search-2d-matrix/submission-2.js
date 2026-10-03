class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let haveNum = []
        let l = 0
        let r = matrix.length -1
        while (l <= r){
            const mid = Math.floor((l + r) / 2)
            const arr = matrix[mid]
            if (arr[0] <= target && arr[arr.length-1] >= target){
                haveNum = arr
                break
            }
            if (arr[arr.length - 1] < target){
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        
     

        if (haveNum.length === 0){
            return false
        }
        let left = 0
        let right = haveNum.length -1
        while (left <= right){
            const mid = Math.floor((left + right) / 2)
            if (haveNum[mid] === target){
                return true
            }

            if (haveNum[mid] < target){
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return false
    }
}
