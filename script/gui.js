function openMercEngine(){
    window.open('https://www.github.com/Payotz/mercEngine') 
}
function openNeneQuest(){
    window.open('https://www.github.com/Payotz/Nene-Quest')
}
function openGithub(){
    window.open('https://www.github.com/Payotz/')
}
function startMenuEmail(){
    window.open("mailto:josiah.cotas@gmail.com")
}
function startMenuLinkedin(){
    window.open("https://linkedin.com/in/jackcotas")
}

function createStartMenu(){
    var base = document.createElement("div")
    var top_header = document.createElement("div")
    var left_column = document.createElement("div")
    var right_column = document.createElement("div")
    var avatar = document.createElement("img")
    var header_text = document.createElement("h2")

    avatar.setAttribute("src","rsc/avatar.jpg")
    avatar.style.width = "64px"
    avatar.style.height = "64px"

    header_text.style.position = "absolute"
    header_text.style.top = "0"
    header_text.style.left = "20%"
    header_text.style.color = "white"
    header_text.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
    header_text.innerHTML = "Payotz"

    top_header.id = "startMenuHeader"
    left_column.id = "leftColumnHeader"
    right_column.id = "rightColumnHeader"

    top_header.style.position = "absolute"
    top_header.style.width = "100%"
    top_header.style.height = "15%"
    top_header.appendChild(avatar)
    top_header.appendChild(header_text)

    left_column.style.position = "absolute"
    left_column.style.top = "15%"
    left_column.style.left = "0%"
    left_column.style.width = "50%"
    left_column.style.height = "75%"
    left_column.style.backgroundColor = "white"
    left_column.style.display = "flex"

    left_column.appendChild(createColumnItem("Linkedin","linkedin.com/in/jackcotas","dummy","rsc/linkedin.png",startMenuLinkedin))
    right_column.appendChild(createColumnItem("Email","Business Email","dummy","rsc/email.jpg",startMenuEmail))

    right_column.style.position = "absolute"
    right_column.style.top = "15%"
    right_column.style.right = "0%"
    right_column.style.width = "50%"
    right_column.style.height = "75%"
    right_column.style.backgroundColor = "#83A6F4"

    base.style.width = "30%"
    base.style.height = "70%"
    base.style.zIndex = "1000"

    base.appendChild(top_header)
    base.appendChild(left_column)
    base.appendChild(right_column)
    base.style.backgroundColor = "#6487DC"
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

function createColumnItem(label_string,subtitle_string,class_type,img_path,callback){
    var base = document.createElement("div")
    var icon_pic = document.createElement("img")
    var icon_name = document.createElement("p")
    var subtitle = document.createElement("p")

    icon_pic.setAttribute("src",img_path)
    icon_pic.style.position = "absolute"
    icon_pic.style.width = "32px";
    icon_pic.style.height = "32px";
    icon_pic.style.top = "10px"
    
    icon_name.style.position = "absolute"
    icon_name.style.left = "20%"
    icon_name.style.top = "0%"
    icon_name.style.fontSize ="8"
    icon_name.innerHTML = "<b> " + label_string + "</b>"

    base.style.width = "100%"
    base.onclick = callback

    base.appendChild(icon_pic)
    base.appendChild(icon_name)
    return base
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

    startButton.onclick = function(){
        if (startMenu.style.display == 'none')
            startMenu.style.display = 'block'
        else if (startMenu.style.display == 'block')
            startMenu.style.display = 'none'
    }

    desktop.onclick = function(){
        if(startMenu.display == 'block')
            startMenu.style.display = 'none'
    }

    desktop.appendChild(taskbar)
    desktop.appendChild(system_tray)
    desktop.appendChild(startMenu)
    desktop.appendChild(startButton)
    desktop.appendChild(createIcon("Github","desktop","rsc/github.png","15%","15%",openGithub))
    desktop.appendChild(createIcon("Terminal","desktop","rsc/terminal.png","15%","15%",enableCLI))
}