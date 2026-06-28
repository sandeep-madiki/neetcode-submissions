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
        let i = 0
        while (i < str.length){
            let j = i
            while (str[j] !== '#'){
                j++
            }

            const len = Number(str.slice(i, j))
            const word = str.slice(j+1, j+1+len)
            res.push(word)
            
            i = j+1+len
        }

        return res
    }
}
