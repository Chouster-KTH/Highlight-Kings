const MatchSource =  {
    async compCall(params) {
        let response = await fetch("https://api.football-data.org/v2/competitions/" +params, {
            "method": "GET",              // HTTP method
            "headers": {                  // HTTP headers
                'X-Auth-Token': "108695e7a2ba4fe6982714e3c844c10a"
            }
        })
    return response.json();
    }
    ,
    async matchCall(params) {
        let response = await fetch("http://api.football-data.org/v2/matches/" +params, {
            "method": "GET",              // HTTP method
            "headers": {                  // HTTP headers
                'X-Auth-Token': "108695e7a2ba4fe6982714e3c844c10a"
            }
        })
    return response.json();
    }
    ,
    getAllCompetitions() {
        return MatchSource.compCall("");
    }
    ,
    getAllMatches(){
        return MatchSource.matchCall("");
    }
    ,
    getStandings(id){    
    return MatchSource.compCall(id+ "/matches"); 
    }
    ,
    getMatches(id){
        return MatchSource.compCall(id+ "/standings")
    }
}
export default MatchSource;