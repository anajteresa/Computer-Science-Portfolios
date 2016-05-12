var item1 = document.getElementById("item1");
var item2 = document.getElementById("item2");
var item2 = document.getElementById("item3");
var item2 = document.getElementById("item4");
var info1 = document.getElementById("info1");
var info2 = document.getElementById("info2");
var info2 = document.getElementById("info3");

item1.addEventListener("click", function(){
    info1.innerHTML = "She is a 21 year old singer from Oakland California.";
    info2.innerHTML = "Her mixtape You Should Be Here was nominated for a grammy this year but sadly did not win it.";
    info3.innerHTML = "She became known because of her mixtape, You Should Be Here.";
});
                       
item2.addEventListener("click", function(){
    info1.innerHTML = "He is a 26 year old rapper from Oakland California.";
    info2.innerHTML = "He has collaborated with famous artists such as Chris Brown, E-40, Kehlani, etc.";
    info3.innerHTML = "He mostly became know for his album called When Its Dark Out.";
});

item3.addEventListener("click", function (){
    info1.innerHTML = "He is a 29 year old singer and producer from San Fransisco California.";
    info2.innerHTML = "He is known for his EP called East Hollywood.";
    info3.innerHTML = "H has collaborated with artists like G Eazy, Kehlani, Pia Mia, etc.";
});

item4.addEventListener("click", function (){
    info1.innerHTML = "She is a 25 year old musical artist from Oakland California.";
    info2.innerHTML = "She is known for her EP called Lungs.";
    info3.innerHTML = "She has collaborated with artists like G Eazy, KYLE, Blackbear, etc.";
});