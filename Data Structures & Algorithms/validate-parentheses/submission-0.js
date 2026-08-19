class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []

        for (const str of s){
            if (str === ']'){
                const last = stack.pop()
                if (last !== '[') {
                    return false
                }
            }
            else if (str === '}'){
                const last = stack.pop()
                if (last !== '{') {
                    return false
                }
            }
            else if (str === ')'){
                const last = stack.pop()
                if (last !== '(') {
                    return false
                }
            }
           else {
            stack.push(str)
           }
        }

        return stack.length === 0
    }
}
