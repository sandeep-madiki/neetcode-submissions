class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row=0; row < 9; row++){
            const set = new Set()
            for (let col=0; col<9; col++){
                const value = board[row][col]
                if (value === '.') continue
                if (set.has(value)) return false
                set.add(value)
            }
        }

        for (let col=0; col<9; col++){
            const set = new Set()
            for (let row=0; row<9; row++){
                const value = board[row][col]
                if (value === '.') continue
                if (set.has(value)) return false
                set.add(value)
            }
        }

        for (let row=0; row < 9; row += 3){
            for (let col=0; col < 9; col += 3){
                const set = new Set()

                for (let i=0; i<3; i++){
                    for (let j=0; j<3; j++){
                        const value = board[row+i][col+j]
                        if (value === '.') continue
                        if (set.has(value)) return false
                        set.add(value)
                    }
                }
            }
        }

        return true
    }
}
