function superbowlWin(record){
    //console.log(season)
    const findWins = record.find(season => season.result === 'W')
    if(findWins){
        return findWins.year
    }
    
}

superbowlWin(record)
