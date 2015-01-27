/**
 * Created by naver on 2014. 7. 4..
 */

jewel.dom = (function(){
    var $ = Sizzle;

    function hasClass(el,clsName){
        var regex = new RegExp("(^|\\s)" + clsName + "(\\s|$)");
        return regex.test(el.className)
    }

    function addClass(el,clsName){
        if (!hasClass(el,clsName)){
            el.className += " " + clsName;
        }
    }

    function removeClass(el,clsName){
        var regex = new RegExp("(^\\s)" + clsName + "(\\s|$)");
        el.className = el.className(regex, " ")
    }

    return {
        $ : $,
        hasClass : hasClass,
        addClass : addClass,
        removeClass : removeClass
    }
})();