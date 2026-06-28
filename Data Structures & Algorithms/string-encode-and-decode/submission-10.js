class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = ''
        for (let str of strs){
            const length = str.length
            const eStr = `${length}#${str}`
            encodedStr = encodedStr + eStr
        }
        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []
        let num = ''
        for (let i=0; i < str.length; i++){
            const ch = str[i]
            if (ch >= '0' && ch <= '9'){
                num = num + ch
            } else if (ch === '#'){
                res.push(str.slice(i+1, i+ Number(num)+ 1))
                i = i + Number(num)
                num = ''
            } else {
                num = ''
            }
        }

        return res
    }
}
