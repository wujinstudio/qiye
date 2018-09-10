window.onload=function () {
    let as=document.querySelectorAll("main .box .bo");
    let cs=document.querySelectorAll("main .box .abcd span.mm");
    // console.log(as,cs);
    cs[0].classList.add("active");
    for(let i=0;i<cs.length;i++) {
        cs[i].onclick = function () {
            for (let j = 0; j < cs.length; j++) {
                as[j].style.display = "none";
                cs[j].classList.remove("active");
            }
            cs[i].classList.add("active");
            as[i].style.display="block";
        };
    }
    let twos=document.querySelector("main li img.twos");
    let ones=document.querySelector("main li img.ones");
    let threes=document.querySelector("main li img.threes");
    let f=document.querySelector("main li img.fours");
    let fa=document.querySelector("main li img.fives");
    let faa=document.querySelector("main li img.six");
    let sa=document.querySelector("main li img.seven");
    let da=document.querySelector("main li img.eight");
    let ca=document.querySelector("main li img.nine");
    let te=document.querySelector("main li img.ten");
    ones.onclick=function () {
        window.open("Sugarbloom%20Bakery.html",'_self');
    }
    twos.onclick=function () {
        window.open("Oat%20Milk.html",'_self');
    }
    threes.onclick=function () {
        window.open("Coffee%20Match.html",'_self');
    }
    f.onclick=function () {
        window.open("chocolate.html",'_self');
    }
    fa.onclick=function () {
        window.open("Coffee’s%20Savory.html",'_self');
    }
    faa.onclick=function () {
        window.open("Holiday%20Gift.html",'_self');
    }
    sa.onclick=function () {
        window.open("Pro-Tips.html",'_self');
    }
    da.onclick=function () {
        window.open("Vegan.html",'_self');
    }
    ca.onclick=function () {
        window.open("Sixth%20Sense.html",'_self');
    }
    te.onclick=function () {
        window.open("Summertime.html",'_self');
    }

}