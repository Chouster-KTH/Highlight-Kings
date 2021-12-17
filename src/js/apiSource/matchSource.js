const MatchSource =  {
    async compCall(params) {
        let response = await fetch("https://api.football-data.org/v2/" +params, {
            "method": "GET",              // HTTP method
            "headers": {                  // HTTP headers
                'X-Auth-Token': "108695e7a2ba4fe6982714e3c844c10a"
            }
        })
    return response.json();
    }
    ,
    getAllCompetitions() {
        return MatchSource.compCall("/competitions/");
    }
    ,
    
    getMatches(id){    
    return MatchSource.compCall("/competitions/" +id+ "/matches") 
    .then(data => data);
    }
    ,
    getFromDate(id, startDate, endDate){
    return MatchSource.compCall(id+"/matches?dateFrom="+startDate+"&dateTo=" +endDate)
        .then(data => data);
    }
    ,
    getFromStatus(id, status){
        return MatchSource.compCall(id+ "/matches?status=" +status)
        .then(data => data);
    }
    ,
    getStandings(id){
        return MatchSource.compCall("/competitions/" +id+ "/standings")
        .then(data => data);
    }
    ,
    getTeamCrests(id){
        return MatchSource.compCall("/competitions/"+id+"/teams")
        .then(data=> data);

    }
    
}
export default MatchSource;


