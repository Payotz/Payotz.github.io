var limit = 0;

var cli_commands = {};
var open_commands = {};
var info_commands = {};
var save_commands = {};
cli_commands["test"] = cli_hello
cli_commands["github"] = cli_github
cli_commands["info"] = cli_info
cli_commands["open"] = cli_open
cli_commands["save"] = cli_save
cli_commands["gui"] = function(){
    document.getElementById('cli').style.display = 'none';
    document.getElementById('gui').style.display = 'block';
    startGUI()
}

var invalid_input = [16,18,19,20,27,33,34,35,36,37,38,39,40,45,46,104,
                     105,106,107,109,110,112,113,114,115,116,117,118,
                     119,120,121,123,144,145,186,187,188,189,190,191,
                     192,220,221,222]
function test(){
    var target = document.getElementById('prompt_text')
    document.onkeydown = function(event){
        if (event.keyCode == 13){
            var input_string = target.innerHTML.substr(limit).toLowerCase()
            input_string = input_string.split(" ")
            console.log(input_string[0])
            console.log(input_string[1])
            
            if(input_string.length > 1){
                if(input_string[0] == 'info'){
                    for (var i = 0; i < repoJSON.length; i++){
                        if (repoJSON[i]["name"].toLowerCase() == input_string[1]){
                            writeText('<br>' + repoJSON[i]["description"])
                        }
                    } 
                }
                else if(input_string[0] == 'open'){
                    for (var i = 0; i < repoJSON.length; i++){
                        if (repoJSON[i]["name"].toLowerCase() == input_string[1]){
                            writeText('<br>' + "Opening :" + repoJSON[i]["html_url"])
                            window.open(repoJSON[i]["html_url"])
                        }
                    } 
                } 
                else if(input_string[0] == 'save')
                for (var i = 0; i < repoJSON.length; i++){
                    if (repoJSON[i]["name"].toLowerCase() == input_string[1]){
                        writeText('<br>' + "Git link: " + repoJSON[i]["name"] + " from: " + repoJSON[i]["clone_url"])
                    }
                } 
                else
                    target.innerHTML +='<br>' + 'Command not identified'
            }else{
                if(input_string in cli_commands)
                    cli_commands[input_string]()
                else
                  target.innerHTML +='<br>' + ' Command not identified'
            }
            
            target.innerHTML += '<br><br>' + '[payotz.github.io ~]$ '
            limit = target.innerHTML.length + 1
            document.scrollingElement.scrollTop = 10000
        }
        if (event.keyCode == 8){
            event.preventDefault()
            if(target.innerHTML.length >= limit){
                target.innerHTML = target.innerHTML.slice(0,-1)
                return
            }
        }
        if (event.keyCode == 173 && !event.shiftKey){
            target.innerHTML += "-"
        }
        if (event.keyCode == 190)
            target.innerHTML += "."

        if(invalid_input.indexOf(event.keyCode) == -1){
            if(event.shiftKey){
                if(event.keyCode == 173)
                    target.innerHTML += "_"
                else
                    target.innerHTML += String.fromCharCode(event.keyCode)   
            }
          else
            target.innerHTML += String.fromCharCode(event.keyCode).toLowerCase()
        }
    }
}

function cli_hello(){
    var target = document.getElementById('prompt_text')
    console.log(repoJSON)
}
function cli_open(){
  var target = document.getElementById('prompt_text')
  target.innerHTML += '<br>' + 'open &lt;repo_name &gt; : opens the repository in a new tab'
}
function cli_info(){
  var target = document.getElementById('prompt_text')
  target.innerHTML += '<br>' + 'info &lt;repo_name&gt; : lists information about the repository'
}
function cli_save(){
  var target = document.getElementById('prompt_text')
  target.innerHTML += '<br>' + 'save &lt;repo_name&gt; : Shows the clone url for repository'
}

function cli_github(){
    var target = document.getElementById('prompt_text')
    target.innerHTML += '<br> Repos found: '
    for (var i = 0; i < repoJSON.length; i++){
        target.innerHTML += '<br> <b>' + repoJSON[i]["name"] + '</b> : ' + repoJSON[i]["description"]
    }
}

function writeText(text){
    var target = document.getElementById('prompt_text')
    target.innerHTML += '<br>' + text
}