var div_element1 = document.createElement("div");
div_element1.setAttribute("id", "countdown");

var div_element2 = document.createElement("div");
div_element2.setAttribute("id", "result");

document.body.append(div_element1, div_element2);

var count = 10;

var count1 = function(start1){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        start1();
    }, 1000);
}

var count2 = function(start2){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        start2();
    }, 1000);
}

var count3 = function(start3){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        start3();
    }, 1000);
}

var count4 = function(start4){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        start4();
    }, 1000);
}

var count5 = function(start5){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        start5();
    }, 1000);
}

var count6 = function(start6){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        start6();
    }, 1000);
}

var count7 = function(start7){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        start7();
    }, 1000);
}

var count8 = function(start8){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        start8();
    }, 1000);
}

var count9 = function(start9){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        start9();
    }, 1000);
}

var count10 = function(){
    var startcount = document.getElementById("countdown");
    startcount.innerHTML = count;
    count--;

    setTimeout(() =>{
        startcount.innerHTML = "";
        var result = document.getElementById("result");
        result.innerHTML = "Happy Independence Day!"
    }, 1000);
}

count1(() =>{
    count2(() =>{
        count3(() =>{
            count4(() =>{
                count5(() =>{
                    count6(() =>{
                        count7(() =>{
                            count8(() =>{
                                count9(() =>{
                                    count10();
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})