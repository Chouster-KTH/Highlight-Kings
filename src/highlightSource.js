const HighlightSource =  {
    async apiCall() {
        let response = await fetch("https://www.scorebat.com/video-api/v3/", {
            "method": "GET",              // HTTP method
            /*"headers": {                  // HTTP headers
                'X-Auth-Token': "108695e7a2ba4fe6982714e3c844c10a"
            }*/
        })
    return response.json();
    }
    ,
    searchHighlight(params) {
        return HighlightSource.apiCall()
            .then(data => { return { data } });
    }
    ,
    getHighlight(){    
    return HighlightSource.apiCall(); 
    }
}
export default HighlightSource;