// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.
//
//     Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
//
//     Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)
//
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

const numberOfPairs=gloves=>{
    let obj = gloves.reduce((a, v) => (a[v]?{...a,[v]:a[v]+1}:{ ...a,[v]: 1}), {})
    return Object.values(obj).reduce((a,v)=>a+(Math.floor(v/2)),0)

}