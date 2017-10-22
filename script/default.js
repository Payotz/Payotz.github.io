var interface = 0;
var limit = 23;

var cli_commands = {};
cli_commands["hello"] = cli_hello


function test(){
    var target = document.getElementById('prompt_text')
    document.onkeyup = function(event){
        if (event.keyCode == 13){//RETURN KEY
            if(target.innerHTML.substr(limit).toLowerCase() in cli_commands)
                cli_commands[target.innerHTML.substr(limit).toLowerCase()]()
            else
                target.innerHTML +='<br>' + ' Command not identified'
            target.innerHTML += '<br>' + '[payotz.github.io ~]$ '
            limit = target.innerHTML.length + 1
        }
        if (event.keyCode == 8){
            if(target.innerHTML.length >= limit){
                target.innerHTML = target.innerHTML.slice(0,-1)
                return
            }
        }
        target.innerHTML += String.fromCharCode(event.keyCode)
    }
}

function cli_hello(){
    var target = document.getElementById('prompt_text')
    target.innerHTML +='<br>' + 'This is a test prompt!' + '<br>'
}

function enableGUI(){
    document.getElementById('center').style.display = 'none';
    document.getElementById('gui').style.display = 'block';
    interface = 1;
}

function enableCLI(){
    document.getElementById('center').style.display = 'none';
    document.getElementById('cli').style.display = 'block';
    interface = 2;
    test()
}