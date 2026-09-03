class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const fleets = []
        const combinePositionAndSpeed = () => {
            const temp = []
            for (let i=0; i < position.length; i++){
                temp.push([position[i], speed[i]])
            }
            return temp
        }
        const combined = combinePositionAndSpeed()

        const sorted = combined.sort(([a], [b]) => b-a)
        
        for (let i=0; i < sorted.length; i++){
            const [p, s] = sorted[i]
            const time = (target - p) / s
            
            if (fleets.length === 0 || (time > fleets[fleets.length-1])){
                fleets.push(time)
            }
        }
        
        console.log(fleets)
        return (fleets.length)
    }
}
