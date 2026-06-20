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

        const res = new Map()
        for (let str of strs){
            const freq = new Array(26).fill(0);
            for (let ch of str){
                 freq[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
            }
            const key = freq.join("#");
            if (!res.has(key)) {
                res.set(key, [])
            }
            res.get(key).push(str)
        }
        console.log([...res.values()])
        // console.log(Object.values(res))
        return [...res.values()]
    }
}
