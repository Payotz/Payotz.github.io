function openMercEngine(){
    window.open('https://www.github.com/Payotz/mercEngine') 
}
function openNeneQuest(){
    window.open('https://www.github.com/Payotz/Nene-Quest')
}
function openGithub(){
    window.open('https://www.github.com/Payotz/')
}

function createStartMenu(){
    var base = document.createElement("div")
    var top_header = document.createElement("div")
    
    base.style.width = "20%"
    base.style.height = "50%"

    base.appendChild(top_header)
    base.style.backgroundColor = "white"
    base.style.position = "absolute"
    base.style.bottom = "4%"
    return base
}

function createButton(label_string,class_type,width,height,callback){
    var button = document.createElement("div")
    var label = document.createElement("p")
    
    button.setAttribute("class", class_type)
    button.style.width = width;
    button.style.height = height;

    label.style.position = 'relative';
    label.style.bottom = '50%'
    label.style.left = '10%'
    label.style.userSelect = 'none';
    label.innerHTML += label_string;

    if(callback != null){
        button.onclick = callback
    }

    button.appendChild(label);
    return button
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
    
    if (callback != null)
        Icon.ondblclick = callback
    return Icon
}

function startGUI(){
    var desktop = document.getElementById("desktop_area")
    var taskbar = document.createElement("div")
    var system_tray = document.createElement("div")
    var startMenu = createStartMenu()
    var startButton = createButton("<b> Start </b>","startButton","5%","4%","15%","15%",null)

    while(desktop.firstChild)
        desktop.removeChild(desktop.firstChild)

    taskbar.setAttribute("class","taskbar")
    taskbar.style.width = "85%"
    taskbar.style.height = "4%"

    system_tray.setAttribute("class","system_tray")
    system_tray.style.width = "28%"
    system_tray.style.height = "4%"
    system_tray.onclick = openGithub

    startMenu.style.display = 'none'
    startMenu.style.backgroundColor = '#6487DC'

    startButton.onclick = function(){
        if (startMenu.style.display == 'none')
            startMenu.style.display = 'block'
        else if (startMenu.style.display == 'block')
            startMenu.style.display = 'none'
    }

    desktop.appendChild(taskbar)
    desktop.appendChild(system_tray)
    desktop.appendChild(startMenu)
    desktop.appendChild(startButton)
    desktop.appendChild(createIcon("Github","desktop","rsc/github.png","15%","15%",openGithub))
    desktop.appendChild(createIcon("Terminal","desktop","rsc/github.png","15%","15%",enableCLI))
}