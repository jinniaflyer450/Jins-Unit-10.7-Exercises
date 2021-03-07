//Write a function that returns true if an array has a duplicate and false if an array does not.

function hasDuplicate(arr){
    const noDupes = [...new Set(arr)]    
    if(noDupes.length === arr.length){
        return false
    }
    return true
}

//Write a function called vowelCount that accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(str){
    const allVs = 'aeiou'
    const stringVs = [...new Set(str)].filter(char => allVs.indexOf(char) !== -1)
    const vMap = new Map()
    for(v of stringVs){
        const singleV = [...str].filter(char => char === v)
        vMap.set(v, singleV.length)
    }
    return vMap
}