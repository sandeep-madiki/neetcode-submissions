class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const a = 97
        const z = 122
        const zero = 48
        const nine = 57

        let cleanedStr = ''
        
        for (const e of s){
            const str = e.toLowerCase()
            const code = str.charCodeAt()
            const lower = code >= a && code <= z
            const nums = code >= zero && code <= nine

            const condition = lower || nums
            if (condition){
                cleanedStr = cleanedStr + str
            }
        }

        
        let start = 0
        let end = cleanedStr.length - 1
        while (start < end){
            if (cleanedStr[start] !== cleanedStr[end]){
                return false
            }
            start++
            end--
        }

        return true
    }
}
