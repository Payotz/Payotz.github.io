function getJSON(){
    var request = new XMLHttpRequest();
    request.open('GET','https://api.github.com/users/defunkt',true);
    request.onload = function(){
        if(request.status >= 200 && request.status < 400){
            console.log(JSON.parse(request.responseText))
        }else{
            console.log("ERROR! Reached Target Server: " + request.responseText)
        }
    }
    request.setRequestHeader("Accept","application/vnd.github.v3+json")
    request.onerror = function(){
        console.log("ERROR! Connection Error : " + request.statusText)
    }
    request.send()
}