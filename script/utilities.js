function getJSON(urlText){
    var xmlHTTP = new XMLHttpRequest()
    xmlHTTP.open("GET",urlText,false)
    try{
        xmlHTTP.send(null)  
        return xmlHTTP.responseText
    }catch(exception){
        if (exception.name == 'NetworkError')
            window.alert("There is a network error. Please check your connection.")
    }
}