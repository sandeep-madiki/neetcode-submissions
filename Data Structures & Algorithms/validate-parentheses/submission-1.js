class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const pairs = {
            ')' : '(',
            '}' : '{',
            ']' : '['
        }

        for (const str of s){
            if (pairs[str]){
                const last = stack.pop()
                if (last !== pairs[str]){
                    return false
                }
            } else {
                stack.push(str)
            }
        }

        return stack.length === 0
    }
}
