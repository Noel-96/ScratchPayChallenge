const states = require('./states');

const checkMatchedName = (clinic, query, arrayKey) => {
    let boolCheck = false;
    for (const key of arrayKey) {
        if (clinic[key]) {
         boolCheck = clinic[key].toLowerCase().indexOf(query.toLowerCase()) >= 0
        }
    }
    return boolCheck;
}

function checkMatchedState (clinic, query,  arrayKey) {
    let boolCheck = false;
    for (const key of arrayKey) {
        if (clinic[key]) {
           if (query.length === 2 ){
               query = query.toUpperCase() 
           } 
           else if(query.length !== 2 ){
             query =  query.charAt(0).toUpperCase() +  query.substring(1).toLowerCase()
           }
           if (query.toLowerCase() === clinic[key].toLowerCase() || states[query] ===  clinic[key] || states[clinic[key]] === query){
               boolCheck = true
           }
        }
    }
    return boolCheck
}


function checkIfOpened (clinic, query, arrayKey) {
    let isValid = false
    for (const key of arrayKey) {
        if (clinic[key]) {
            console.log("query")
            console.log(query)
            console.log(clinic[key].from )
            console.log(clinic[key].to)
            if (query >= clinic[key].from && query < clinic[key].to){
                isValid = true
            }
        }
    }
    return isValid
}



module.exports = {
    checkMatchedState,
    checkMatchedName,
    checkIfOpened,
}