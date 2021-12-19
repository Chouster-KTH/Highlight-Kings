const MatchSource =  {
    async compCall(params) {
        const response = await fetch("https://api.football-data.org/v2/" + params, {
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
    return MatchSource.compCall("/competitions/" +id+ "/matches");
    }
    ,
    getFromStatus(id, status){
    return MatchSource.compCall(id+ "/matches?status=" +status);
    }
    ,
    getStandings(id){
    return MatchSource.compCall("/competitions/" +id+ "/standings");
    }
    ,
    getTeamCrests(id){
    return MatchSource.compCall("/competitions/"+id+"/teams");

    }
    
}
export default MatchSource;


