function createMenu(label_string,width,height){
    var startMenu = document.createElement("div",)
    var label = document.createElement("p")
    
    startMenu.setAttribute("class", "menu")
    startMenu.style.width = width;
    startMenu.style.height = height;

    label.style.position = 'relative';
    label.style.bottom = '50%'
    label.style.userSelect = 'none';
    label.innerHTML += label_string;

    startMenu.appendChild(label);
    return startMenu
}

function createIcon(){
    var Icon = document.createElement("div")
    Icon.innerHTML += "This is an Icon";
    return Icon;
}

function startGUI(){
    var desktop = document.getElementById('desktop')
    desktop.appendChild(createMenu("Start","5%","4%"))
    desktop.appendChild(createIcon())
}