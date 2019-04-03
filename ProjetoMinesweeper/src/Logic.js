const createBoard = (rows, columns)=>{
    return Array(rows).fill(0).map((_, nRow)=>{
        return Array(columns).fill(0).map((_,nColumn)=>{
            return{
                nRow,
                nColumn,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board, minesAmount)=>{
    const rows = board.length
    const columns = board[0].length
    let minesPlanted = 0

    while(minesPlanted < minesAmount){
        const rowSet = parseInt(Math.random()*rows,10)
        const columnSet = parseInt(Math.random()*columns,10)
        if(!board[rowSet][columnSet].mined){
            board[rowSet][columnSet].mined = true
            minesPlanted++
        }
    }
}

const createMinedBoard=(rows, columns, minedAmount)=>{
    const board=createBoard(rows, columns)
    spreadMines(board, minedAmount)
    return board
}

export {createMinedBoard}