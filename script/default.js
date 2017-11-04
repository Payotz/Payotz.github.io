var interface = 0;

function enableGUI(){
    document.getElementById('gui').style.display = 'block';
    interface = 1;
}

function enableCLI(){
    document.getElementById('cli').style.display = 'block';
    interface = 2;
    limit = document.getElementById('prompt_text').innerHTML.length;
    test()
}

window.onload = enableCLI