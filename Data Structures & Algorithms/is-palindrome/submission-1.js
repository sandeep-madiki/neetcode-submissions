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
        
        let start = 0
        let end = s.length - 1
        while (start < end){
            const b = s[start].toLowerCase()
            const e = s[end].toLowerCase()
            const startCon = (b.charCodeAt() >= a && b.charCodeAt() <= z) || (b.charCodeAt() >= zero && b.charCodeAt() <= nine)
            const endCon = (e.charCodeAt() >= a && e.charCodeAt() <= z) || (e.charCodeAt() >= zero && e.charCodeAt() <= nine)
            if (!startCon){
                start++
            } else if (!endCon){
                end--
            } else {
                if (b !== e){
                    return false
                } else {
                    start++
                    end--
                }
            }
        }

        return true
    }
}
