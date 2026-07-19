class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const a = 97;
        const z = 122;
        const zero = 48;
        const nine = 57;

        let start = 0;
        let end = s.length - 1;
        while (start < end) {
            const left = s[start].toLowerCase();
            const right = s[end].toLowerCase();
            const leftCode = left.charCodeAt();
            const rightCode = right.charCodeAt();
            const leftValid =
                (leftCode >= a && leftCode <= z) || (leftCode >= zero && leftCode <= nine);
            const rightValid =
                (rightCode >= a && rightCode <= z) || (rightCode >= zero && rightCode <= nine);
            if (!leftValid) {
                start++;
            } else if (!rightValid) {
                end--;
            } else {
                if (left !== right) {
                    return false;
                }
                start++;
                end--;
            }
        }

        return true;
    }
}
