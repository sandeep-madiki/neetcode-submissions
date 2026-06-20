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
            if (!smap[i]) {
                smap[i] = 1;
            } else {
                smap[i] = smap[i] + 1;
            }
        }
        const tmap = {};
        for (let i of t) {
            if (!tmap[i]) {
                tmap[i] = 1;
            } else {
                tmap[i] = tmap[i] + 1;
            }
        }

        if (Object.keys(smap).length !== Object.keys(tmap).length) {
            return false;
        }

        for (const key in smap) {
            if (smap[key] !== tmap[key]) {
                return false;
            }
        }

        return true;
    }
}
