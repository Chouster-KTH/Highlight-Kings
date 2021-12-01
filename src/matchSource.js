const MatchSource =  {
    async apiCall(params) {
        let response = await fetch("http://api.football-data.org/v2/" +params, {
            "method": "GET",              // HTTP method
            "headers": {                  // HTTP headers
                'X-Auth-Token': "108695e7a2ba4fe6982714e3c844c10a"
            }
        })
    return response.json();
    }
    ,
    searchVideos(params) {
        return MatchSource.apiCall()
            .then(data => { return { data } });
    }
    ,
    getMatchDetails(year){    
    return MatchSource.apiCall("competitions/" +year+ "/matches"); 
    }
}
export default MatchSource;