class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const sign = {
            a: 0,
            b: 0,
            c: 0,
            d: 0,
            e: 0,
            f: 0,
            g: 0,
            h: 0,
            i: 0,
            j: 0,
            k: 0,
            l: 0,
            m: 0,
            n: 0,
            o: 0,
            p: 0,
            q: 0,
            r: 0,
            s: 0,
            t: 0,
            u: 0,
            v: 0,
            w: 0,
            x: 0,
            y: 0,
            z: 0,
        };

        const res = {}
        for (let str of strs){
            const temp = {...sign}
            for (let i of str){
                temp[i] = temp[i] + 1
            }
            if (res[Object.values(temp).join('#')] === undefined) {
                res[Object.values(temp).join('#')] = []
            }
            res[Object.values(temp).join('#')].push(str)
        }
        return Object.values(res)
    }
}
