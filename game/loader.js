/**
 *
 * Created by naver on 2014. 7. 4..
 */

var jewel = {}

window.addEventListener("load",function(){
    Modernizr.load([
        {
            load : [
                "sizzle.js",
                "dom.js",
                "game.js"
            ],
            complete : function(){
                jewel.game.showScreen("splash-screen")
                console.log("all file is loaded")
            }
        }
    ])
},false)