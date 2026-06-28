class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const encodedList = []
        for (let str of strs){
            const length = str.length
            const eStr = `${length}#${str}`
            encodedList.push(eStr)
        }
        return encodedList.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        const res = []
        let num = ''
        for (let i=0; i < str.length; i++){
            const ch = str[i]
            if (nums.includes(ch)){
                num = num + ch
            } else if (ch === '#'){
                res.push(str.slice(i+1, i+ Number(num)+ 1))
                // res.push([i+1, i+ Number(num)+ 1])
                i = i + Number(num)
                num = ''
            } else {
                num = ''
            }
        }

        // const res = []
        // for (let i of indexes){
        //     const s = i[0]
        //     const e = i[1]
        //     const word = str.slice(s, e)
        //     res.push(word)
        // }

        return res
    }
}
