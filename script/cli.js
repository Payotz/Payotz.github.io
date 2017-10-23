var limit = 0;

var cli_commands = {};
cli_commands["github"] = cli_github
cli_commands["mercengine"] = cli_github_mercEngine
cli_commands["nenequest"] = cli_github_NeneQuest
cli_commands["gameboyemu"] = cli_github_gameboy
cli_commands["chip8emu"] = cli_github_chip8
cli_commands["payotzbot"]=cli_github_bot

var invalid_input = [16,18,19,20,27,33,34,35,36,37,38,39,40,45,46,104,
                     105,106,107,109,110,112,113,114,115,116,117,118,
                     119,120,121,123,144,145,186,187,188,189,190,191,
                     192,220,221,222]
function test(){
    var target = document.getElementById('prompt_text')
    document.onkeydown = function(event){
        if (event.keyCode == 13){
            var input_string = target.innerHTML.substr(limit).toLowerCase()
            if(input_string in cli_commands){
                cli_commands[input_string]()
            }
            else
                target.innerHTML +='<br>' + ' Command not identified'
            target.innerHTML += '<br>' + '[payotz.github.io ~]$ '
            limit = target.innerHTML.length + 1
            document.scrollingElement.scrollTop = 10000
        }
        if (event.keyCode == 8){
            if(target.innerHTML.length >= limit){
                target.innerHTML = target.innerHTML.slice(0,-1)
                return
            }
        }
        if(invalid_input.indexOf(event.keyCode) > -1){
            console.log("Removed : " + event.keyCode)
            return
        }
        
        target.innerHTML += String.fromCharCode(event.keyCode)
    }
}

function cli_hello(){
    var target = document.getElementById('prompt_text')
    target.innerHTML +='<br>' + 'This is a test prompt!'
}
function cli_github(){
    var target = document.getElementById('prompt_text')
    target.innerHTML +='<br>' + 'github.com/Payotz'
    target.innerHTML +='<br>' + '/* '
    target.innerHTML +='<br>' + '* Several Commands have been found: '
    target.innerHTML +='<br>' + '* mercEngine : A 2D GameEngine written in D'
    target.innerHTML +='<br>' + '* payotzBot : My Own Personal Discord Bot'
    target.innerHTML +='<br>' + '* Chip8Emu : My attempt at a Chip8 emu '
    target.innerHTML +='<br>' + '* GameBoyEmu : My attempt at a GameBoy emu '
    target.innerHTML +='<br>' + '* neneQuest : An attempt at recreating Nene Quest'
    target.innerHTML +='<br>' + '/*'
    target.innerHTML +='<br>' + 'Type any command to continue'
}

function cli_github_mercEngine(){
    var target = document.getElementById('prompt_text')
    target.innerHTML += '<br> <b> Link to Repository: https://github.com/Payotz/mercengine <br>'
    target.innerHTML += '<br> <b> Data Loading from README.md : </b><br>'
    target.innerHTML += `<br> <p>A WIP 2D engine made in Dlang using SDL.</p>
    <p>You need [Dub](http://code.dlang.org/download) and [DMD](http://dlang.org/download.html#dmd) to build it.</p>
    <p>### Dependencies ###</p>
    <p>SDL2.dll </p>
    <p>SDL2_mixer</p>
    <p>SDL2_ttf</p>
    <p>SDL2_net</p>
    <p>SDL2_image</p>
    <p>lua 5.3</p>
    <p>### How it works ? ###</p>
    <p>Put the Runtime Binaries inside /build/ and just run dub at the root of the directory.</p>
    <p>Actual Game Project files are in /build/resources. </p>
    <p>start.lua is modified to load the 'main.lua' files inside a respective Game Folder, hence loading Game.</p>
    <p>### DISCLAIMER ###<br>
    Assets are placeholder and are not mine.</p>
    <p>As of now, the scripting language is incomplete.</p>
    <p>You can check the bindings in /source/ml_engine/core/script</p>
    <p>This project is still highly unstable</p>
    <p>
    ### TODO ###</p>
    <p>Transfer all game logic to lua script files</p>
    <p>Replace the SDL_Renderer with the OpenGL Renderer</p>
    <p>### INFO ###</p>
    <p>Branch opengl_render is open. The OpenGL process is there.<br>
    </p>`

}
function cli_github_bot(){
    var target = document.getElementById('prompt_text')
    target.innerHTML += '<br> <b> Link to Repository: https://github.com/Payotz/Payotz_Bot <br>'
    target.innerHTML += '<br> <b> Data Loading from ReadMe.md : </b><br>'
    target.innerHTML += `<p># Payotz_Bot My own Personal Discord Bot</p>
    <p># Dependencies:</p> 
    <p>Discord.py</p>
    <p>Requests for humans</p>`
}

function cli_github_chip8(){
    var target = document.getElementById('prompt_text')
    target.innerHTML += '<br> <b> Link to Repository: https://github.com/Payotz/Chip8Emu </b> <br>'
    target.innerHTML += '<br> <b> Data Loading from ReadMe.md : </b><br>'
    target.innerHTML += `<p>**Build Instructions**</p>
    <p>Modify build.bat and set your include_path and lib_path accordingly.</p>
    <p>You can also modify build.bat to use a compiler of your choice.</p>
    <p>**Dependencies:**</p>
    <p>SDL2</p>
    <p>SDL2_mixer</p>
    <p>Visual Studio 2015 Build Tools</p>
    <p>**Usage**</p>
    <p>Execute the binary via command line. Ex: &#96;main.exe <rom_file>&#96;</p>
    <p>**Disclaimer**</p>
    <p>The SCHIP part of this emulator is still WIP. </p>
    <p>beep.wav is from : http://soundbible.com/1252-Bleep.html</p>
    <p>Roms came from : https://www.zophar.net/pdroms/chip8.html</p>
    <p>**References**:</p>
    <p>http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/</p>
    <p>http://devernay.free.fr/hacks/chip8/C8TECH10.HTM</p>
    <p>https://github.com/Spittie/chip8-sdl</p>
    <p>https://www.libsdl.org/projects/SDL_mixer/docs/SDL_mixer.html </p>`
}

function cli_github_gameboy(){
    var target = document.getElementById('prompt_text')
    target.innerHTML += '<br> <b> Link to Repository: https://github.com/Payotz/GameBoyEmu </b> <br>'
    target.innerHTML += '<br> <b> Data Loading from ReadMe.md : </b><br>'
    target.innerHTML += `<p>This is my attempt at a GameBoy Emulator.</p>
    <p> **Disclaimer**</p>
    <p> It is still very much WIP.</p>
    <p> **Dependencies**</p>
    <p> make</p>
    <p> SDL2</p>
    <p> SDL2_mixer</p>
    <p> #TODO#</p>
    <p> Refactor gameboy.cpp to be readable.</p>`
}

function cli_github_NeneQuest(){
    var target = document.getElementById('prompt_text')
    target.innerHTML += '<br> <b> Link to Repository: https://github.com/Payotz/Nene-Quest </b> <br>'
    target.innerHTML += '<br> <b> Data Loading from ReadMe.md : </b><br>'
    target.innerHTML += `<p>NENE Quest ==================</p>
    <p>![Screenshot](http://i.imgur.com/NhP9gp1.png &quot;Game on the left, Anime episode on the right&quot;)</p>
    <p>*Game on the left, Anime episode on the right.*</p>
    <p>## What is this? This is my attempt at recreating &quot;Nene Quest&quot;, a video game made by the anime character &quot;Sakura Nene&quot;. I wrote this to learn more about OpenGL, SDL and C++.</p>
    <p>This video game can be seen in New Game S2 - Episode 6.</p>
    <p>## Dependencies</p>
    <p>* gl3w</p>
    <p>* SDL2</p>
    <p>* SDL_Image</p>
    <p>* make</p>
    <p>**Note:** I am currently using mingw32, and I have only built it on mingw32. I don't know if it's buildable in actual GNU/Linux</p>
    <p>## Disclaimer: I do not own the Anime &quot;New Game&quot; nor am the creator or is involved in its production. The sprites used in this project are not mine and are taken directly from New Game S2 - Episode 6. </p>`
}