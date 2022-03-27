


function findMatching(drivers, matching){
  return drivers.filter( possibleMatch => possibleMatch.toLowerCase() === matching.toLowerCase()
  )
}

function fuzzyMatch(drivers,matching){
    return drivers.filter(possibleMatch =>
        possibleMatch.toLowerCase().indexOf(matching.toLowerCase()) === 0
    )
}
function matchName(drivers, matching){
    return drivers.filter(record => record.name === matching)
}