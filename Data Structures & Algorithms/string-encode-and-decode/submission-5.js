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
        console.log(str)
        const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
        const indexes = []
        // [2, 6]
        let num = ''
        let t = 0
        // t = 5
        for (let i=0; i < str.length; i++){
            const ch = str[i]
            // console.log(ch, i)
            // if (i <= t-1){
            //     continue
            // }
            if (nums.includes(ch) && (i > t || i === 0 )){
                console.log(ch)
                num = num + ch
            } else if (ch === '#' && num !== ''){
                indexes.push([i+1, i+ Number(num)+ 1])
                t = i + Number(num)
                num = ''
            } else {
                num = ''
            }
        }

        const res = []
        for (let i of indexes){
            const s = i[0]
            const e = i[1]
            const word = str.slice(s, e)
            res.push(word)
        }

        return res
    }
}
