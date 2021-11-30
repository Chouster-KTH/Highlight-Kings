import React from "react";
const MatchSource = {
    apiCall(params) {
        return fetch("http://api.football-data.org/v2/matches", {
            "method": "GET",              // HTTP method
            "headers": {                  // HTTP headers
                'X-Auth-Token': "108695e7a2ba4fe6982714e3c844c10a"
            }
        })
        .then(response => {
            if (!response.ok) { throw 'Error: ' + response.statusText; }
            return response; 
        })
            // from HTTP response headers to HTTP response data
        .then(response => response.json());
    }
    ,
    searchVideos(params) {
        return MatchSource.apiCall()
            .then(data => { return { data } });
    }
    ,
    getMatchDetails(params) { return MatchSource.apiCall(""); }
}
export default MatchSource;