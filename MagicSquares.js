//
// Description:
//     Magic squares are numbers in an n x n grids, where the sum of numbers sides and diagonals all give the same sum
//
// Example
// Below depicts the famous Lo Shu Magic Square. Where the sum of an array rows and columns, as well as diagonals, all sum up to 15
//
// var arr = [
//     [8, 1, 6]
//         [3, 5, 7]
//         [4, 9, 2]
// ];
// Details
// Your aim is to create a magicSquare() function that returns a boolean, to match whether the n x n array is a magic square, or not; i.e. returns true or false
//
// 3 x 3 Arrays
// magicSquare([[8, 1, 6], [3, 5, 7], [4, 9, 2]]) // should return true
// magicSquare([[9, 14, 7],[8, 10, 12],[13, 6, 11]]) // should return true
// magicSquare([[8, 6, 1], [3, 5, 7], [4, 9, 2]]) // should return false
// 4 x 4 Arrays
// magicSquare([[1, 15, 14, 4], [10, 11, 8, 5],[7, 6, 9, 12],[16, 2, 3, 13]]) // should return true
// magicSquare([[16, 3, 2, 13], [5, 10, 11, 8],[9, 6, 7, 12],[4, 15, 14, 1]]) // should return true
// magicSquare([[9, 6, 3, 16], [4, 15, 10, 5],[14, 1, 8, 11],[7, 18, 13, 2]]) // should return false
// Arrays that contain zero length should return false as it not a real magic square
// Arrays may also contain null and undefined values so configure you code to handle this additional input
// Only 3 x 3 and 4 x 4 magic squares will be tested here
// Note: Algorithms used to create magic squares higher than 4x4 are exhaustive and may not exist for even larger ones

const magicSquare=arr=>{
    if(arr.flat().some(el=>el===null||el===undefined)||!arr.length) return false
    let result = []
    result.push(...arr.map(el=>el.reduce((a,c)=>a+c,0)),
        arr.map((el,i)=>el[i]).reduce((a,c)=>a+c,0),
        arr.map((el,i)=>el[i]).reverse().reduce((a,c)=>a+c,0),
        ...arr.map((el,i)=>arr.map(n=>n[i]).reduce((a,c)=>a+c,0)))
    return result.every(magic=>magic===result[0])
}

