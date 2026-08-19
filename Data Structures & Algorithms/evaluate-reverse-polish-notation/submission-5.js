class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for (const t of tokens){
            if (t === '+' || t === '-' || t === '*' || t === '/'){
                const a = stack.pop()
                const b = stack.pop()

                let res
                if (t === '+'){
                    res = b + a
                } else if (t === '-'){
                    res = b - a
                } else if (t === '*'){
                    res = b * a
                } else {
                    res = Math.trunc(b / a)
                }

                stack.push(res)
            }
             else {
                stack.push(Number(t))
            }
        }
        const res = stack.pop()
        return Math.trunc(res)
    }
}
