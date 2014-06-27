/*
 SHUFFLE 2014 remake version by Joontop (Hwang Junsang)
 SHUFFLE first version 2010.6
 */
var start;
function shuffle(id){
    this.sfW = $("." + id);
    this.sf = $(".grid1");
    this.sfl = this.sf.length;
    this.sfz = this.sf[0].offsetWidth;
    this.sfPer = 100;
    this.sfOffs = [];
    this.sfHs = [];
    this.dct = 0;
    this.sfn = 1;
    this.doc = document.documentElement;
    this.na = window.navigator;
    this.Inter = null;
    this.timer = null;
    this.timer2 = null;
}
shuffle.prototype.sfMin = function(){
    var min = this.sfHs[0];
    for(var i = 1; i < this.sfHs.length; i++){
        min = Math.min(min, this.sfHs[i]);
    }
    return this.sfHs.indexOf(min);
}
shuffle.prototype.sfMax = function(){
    var max = this.sfHs[0];
    for(var i = 1; i < this.sfHs.length; i++){
        max = Math.max(max, this.sfHs[i]);
    }
    return max;
}
shuffle.prototype.sfAct = function(){
    if(this.dct < this.sfl){
        if(this.doc.clientWidth < 480){this.sfn = 2;}else if(this.doc.clientWidth >= 480 && this.doc.clientWidth < 640){this.sfn = 3;}else if(this.doc.clientWidth >= 640 && this.doc.clientWidth < 800){this.sfn = 4;}else if(this.doc.clientWidth >= 800 && this.doc.clientWidth < 960){this.sfn = 5;}else if(this.doc.clientWidth >= 960 && this.doc.clientWidth < 1120){this.sfn = 6;}else if(this.doc.clientWidth >= 1120 && this.doc.clientWidth < 1280){this.sfn = 7;}else if(this.doc.clientWidth >= 1280 && this.doc.clientWidth < 1440){this.sfn = 8;}else if(this.doc.clientWidth >= 1440 && this.doc.clientWidth < 1600){this.sfn = 9;}else if(this.doc.clientWidth >= 1600 && this.doc.clientWidth < 1760){this.sfn = 10;}else if(this.doc.clientWidth >= 1760 && this.doc.clientWidth < 1920){this.sfn = 11;}else if(this.doc.clientWidth >= 1920){this.sfn = 12;}
        this.sfPer = (100 / this.sfn).toFixed(2);
        this.sfz = (this.doc.clientWidth - 10) / this.sfn;
        this.sf.eq(this.dct).css({
            position : "absolute",
            display : "block",
            width : this.sfPer + "%"
        });
        if(this.dct < this.sfn){
            this.sf.eq(this.dct).css({
                top : "0",
                left : (this.sfz * this.dct).toFixed(2) + "px"
            });
            this.sfOffs[this.dct] = this.sfz * this.dct;
            this.sfHs[this.dct] = this.sf.eq(this.dct).height();
        }else{
            var min = this.sfMin();
            this.sf.eq(this.dct).css({
                top : this.sfHs[min] + "px",
                left : this.sfOffs[min].toFixed(2) + "px"
            });
            this.sfHs[min] += this.sf.eq(this.dct).height();
        }
        //this.timer = setTimeout(this.name + ".sfAct()", 10);
        this.sfCal();
        this.sfW.css({
            height : this.sfMax() + "px"
        });
        this.dct++;
    }else{
        var end = new Date().getTime();
        console.log("개수 : " + this.dct);
        console.log((end - start) / 1000 + "초");
    }
}

shuffle.prototype.sfCal = function(){
    if(screen.availHeight + this.doc.scrollTop < this.sfW.height()){
        this.sfStop();
    }else{
        this.timer = setTimeout(this.name + ".sfAct()", 10);
    }
}

shuffle.prototype.sfGo = function(){
    // display 컨트롤이 성능에 영향을 미치는듯
    this.sf.css({
        display : "none"
    });
    /*
     this.sfW.css({
     height : "0"
     });
     */
    console.log("sfGo스타트");
    this.sfAct();
    //this.Inter = setInterval(this.name + ".sfAct()", 1);
}
shuffle.prototype.sfStop = function(){
    clearTimeout(this.timer);
    var end = new Date().getTime();
    console.log("개수 : " + this.dct);
    console.log((end - start) / 1000 + "초");
}