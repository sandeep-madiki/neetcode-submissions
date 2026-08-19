class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = []
        for (const t of tokens){
            if (t === '+'){
                const firstLast = stack.pop()
                const secondLast = stack.pop()
                const res = secondLast + firstLast
                stack.push(res)
            } else if (t === '-'){
                const firstLast = stack.pop()
                const secondLast = stack.pop()
                const res = secondLast - firstLast
                stack.push(res)
            } else if (t === '*'){
                const firstLast = stack.pop()
                const secondLast = stack.pop()
                const res = secondLast * firstLast
                stack.push(res)
            } else if (t === '/'){
                const firstLast = stack.pop()
                const secondLast = stack.pop()
                const res = secondLast / firstLast
                stack.push(Math.trunc(res))
            } else {
                stack.push(Number(t))
            }
        }
        const res = stack.pop()
        console.log(stack)
        console.log(res)
        return Math.trunc(res)
    }
}
