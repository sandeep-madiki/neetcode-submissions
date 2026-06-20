class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const smap = {};
        for (let i of s) {
            smap[i] = (smap[i] || 0) + 1;
        }
        for (let i of t) {
            if (!smap.hasOwnProperty(i)) {
                return false;
            } else {
                if (smap[i] === 0) return false;
                smap[i] = smap[i] - 1;
            }
        }

       

        return true;
    }
}
