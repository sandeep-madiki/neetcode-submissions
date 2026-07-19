class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        console.log(numbers, target)
        const map = {}
        for (let i=0; i < numbers.length; i++){
            const n = numbers[i]
            const remaining = target - n
            if (map[remaining] !== undefined){
                return [map[remaining], i + 1]
            } else {
                map[n] = i + 1
            }
        }

        return []
    }
}
