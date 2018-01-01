function enableGUI(){
    document.onkeydown = null
    document.getElementById('gui').style.display = 'block';
    startGUI()
}

function enableCLI(){
    document.onkeydown = null
    document.getElementById('cli').style.display = 'block';
    limit = document.getElementById('prompt_text').innerHTML.length;
    test()
}

document.onkeydown = function(event){
    if(event.keyCode == 13)
        enableCLI()
}

//window.onload = enableCLI
//window.onload = enableGUI