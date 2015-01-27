/**
 * Created by naver on 2014. 7. 10..
 */
var jm = {
    pin : function(){
        $(function(){
            $('.wrap').masonry({
                // options
                itemSelector : '.item',
                isAnimated: true,
                isFitWidth: true
            });
        })
    },
    init : function(){
        jm.pin()
    }
}
jm.init()