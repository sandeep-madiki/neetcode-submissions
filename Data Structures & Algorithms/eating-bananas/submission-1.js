class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1
        let max = Math.max(...piles)

        while (min <= max){
            const mid = Math.floor((min + max) / 2)
            let hours = 0
            for (let n of piles){
                const t = Math.ceil(n / mid)
                hours += t
            }
            if (hours > h){
                min = mid + 1
            } else {
                max = mid - 1
            }
        }
        return min
    }
}
