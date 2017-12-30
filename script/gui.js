function openMercEngine(){
    window.open('https://www.github.com/Payotz/mercEngine') 
}
function openNeneQuest(){
    window.open('https://www.github.com/Payotz/Nene-Quest')
}
function openGithub(){
    window.open('https://www.github.com/Payotz/')
}

function createMenu(label_string,width,height){
}

function createButton(label_string,class_type,width,height){
    var startMenu = document.createElement("div",)
    var label = document.createElement("p")
    
    startMenu.setAttribute("class", class_type)
    startMenu.style.width = width;
    startMenu.style.height = height;

    label.style.position = 'relative';
    label.style.bottom = '50%'
    label.style.left = '10%'
    label.style.userSelect = 'none';
    label.innerHTML += label_string;

    startMenu.appendChild(label);
    return startMenu
}

function createIcon(label_string,class_type,img_path,width,height,callback){
    var Icon = document.createElement("div")
    var icon_pic = document.createElement("div")
    var icon_name = document.createElement("div")

    icon_pic.style.backgroundImage = img_path
    icon_pic.style.backgroundRepeat = "no_repeat"
    icon_pic.style.backgroundSize = "cover"
    icon_pic.style.width = width
    icon_pic.style.height = height
    icon_pic.innerHTML = "<img src =\"" + img_path + "\" style = \" height:64px; width:64px\">"

    icon_name.style.position = "relative"
    icon_name.style.bottom = "90%"
    icon_name.innerHTML = label_string
    icon_name.style.userSelect = "none"

    Icon.appendChild(icon_pic)
    Icon.appendChild(icon_name)
    Icon.position = "relative"
    Icon.ondblclick = callback
    return Icon
}

function startGUI(){
    var desktop = document.getElementById("desktop_area")
    var taskbar = document.createElement("div")
    var system_tray = document.createElement("div")

    taskbar.setAttribute("class","taskbar")
    taskbar.style.width = "85%"
    taskbar.style.height = "4%"

    system_tray.setAttribute("class","system_tray")
    system_tray.style.width = "28%"
    system_tray.style.height = "4%"
    system_tray.onclick = openGithub

    desktop.appendChild(taskbar)
    desktop.appendChild(system_tray)
    desktop.appendChild(createButton("<b> Start </b>","startMenu","5%","4%","15%","15%"))
    desktop.appendChild(createIcon("Github","desktop","rsc/github.png","15%","15%",openGithub))
}