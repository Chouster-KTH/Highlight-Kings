const HighlightSource = {
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method": "GET",              // HTTP method
            "headers": {                  // HTTP headers
                'X-Mashape-Key': API_KEY,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
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
        return HighlightSource.apiCall("" + new URLSearchParams(params))
            .then(data => { return { data } });
    }
    ,
    getMatchDetails(params) { return HighlightSource.apiCall(""); }
}