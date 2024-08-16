var main = "";
var letter = document.getElementsByClassName("letter");
var il = document.getElementsByClassName('input-text');
var e;
var s;
const letters = /^[\s\S]*$/;
let mistakes = 0;
let lastlesson = 0;
let countletters = 0;


function generateform(x) {
    lastlesson = x;
    let span = "";
    const lettersrighthand = ["j", "k", "l", ";", "u", "i", "o", "p", "polio", "jolly", "polij", "b", "h", "y", "kluby", "polyp", "n", "m", "plumb", "blimp", ",", ".", "6", "7", "8", "9", "0", "<", ">", "?", ":", "/",];
    const letterslefthand = ["a", "s", "d", "f", "q", "w", "e", "r", "swear", "wards", "dares", "b", "g", "t", "water", "draft", "bread", "z", "x", "c", "v", "waxer", "1", "2", "3", "4", "5",]
    const bothhands = letterslefthand + lettersrighthand;
    const TEST = ["Sunny day make everything feel nice",
        "The cat sleeps on the yellow couch.",
        "Every rainy day makes me feel cozy.",
        "Books open all doors to new worlds.",
        "Quickly solved really tough puzzle.",
        "Coffee warms up my chilly mornings.",
        "She sings, and dances to the music.",
        "I'm traveling to Rome in the summer",
        "Cat sleep all day, dreaming of fish",
        "We met at the old, cozy coffee shop",
    ]
    
    main += '<div>';
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 35; j++) {
            if ((j + 1) % 6 == 0) {
                main += '<span class="letter"> </span>';
            }
            else {
                switch (x) {
                    case 0:
                        span = TEST[random(0, 9)];
                        break;
                    case 1:
                        span = lettersrighthand[random(0, 3)];
                        break;
                    case 2:
                        span = letterslefthand[random(0, 3)];
                        break;
                    case 3:
                        span = lettersrighthand[random(0, 7)];
                        break;
                    case 4:
                        span = letterslefthand[random(0, 7)];
                        break;
                    case 5:
                        span = lettersrighthand[random(0, 13)];
                        break;
                    case 6:
                        span = letterslefthand[random(0, 13)];
                        break;
                    case 7:
                        span = lettersrighthand[random(0, 19)];
                        break;
                    case 8:
                        span = letterslefthand[random(0, 21)];
                        break;
                    case 9:
                        span = lettersrighthand[random(0, 21)];
                        break;
                    case 10:
                        span = letterslefthand[random(0, 26)];
                        break;
                    case 11:
                        span = lettersrighthand[random(0, 26)];
                        break;
                    case 12:
                        span = bothhands[random(0, 53)];
                        break;
                    case 13:
                        span = lettersrighthand[random(0, 29)];
                        break;
                    case 14:
                        span = bothhands[random(0, 53)];
                        break;
                    case 15:
                        span = lettersrighthand[random(0, 31)];
                        break;
                    case 16:
                        span = bothhands[random(0, 58)];
                        break;
                }
                if (span.length > 1 && j % 6 == 0) {
                    for (let word = 0; word < span.length; word++) {
                        main += '<span class="letter">' + span[word] + '</span>';
                        j++;
                    }
                    if (j < 34)
                        main += '<span class="letter"> </span>';
                    else { }
                }
                else if (span.length <= 1) {
                    main += '<span class="letter">' + span + '</span>';
                }
                else
                    main += '<span class="letter">' + span[random(0, 4)] + '</span>';
            }
        }
        main += '<div>';
        for (let k = 0; k < 35; k++) {
            if (i == 0 && k == 0) {
                main += '<input type="text" oninput="tonext(' + i + ',' + k + ')" onkeydown="happening(' + i + ',' + k + ',event)" class="input-text" size="1" maxlength="1" autofocus />';
            }
            else {
                main += '<input type="text" oninput="tonext(' + i + ',' + k + ')" onkeydown="happening(' + i + ',' + k + ',event)" class="input-text" size="1" maxlength="1" />';
            }
        }
        main += '</div><br />';
    }
    main += '</div>';
}





function formi() {
    let form = document.getElementById("form");
    const todays = new Date();
    s = todays.getHours() * 3600 + todays.getMinutes() * 60 + todays.getSeconds();
    form.innerHTML = main;
}




function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function tonext(x, y) {
    let j = y + (x * 35);
    let i = 0;

    if (letters.test(il[j].value) == true) {
        i = 1;
    }
    else {
        i = 0;
    }


    if (i == 1 && (j + 1) <= 209) {
        il[j + 1].focus();
        countletters++;
    }
    else {
        countletters++;
    }


    if (il[j].value != letter[j].innerHTML) {
        il[j].style.backgroundColor = "#777474";
        mistakes++;
    }
    else {
    }
    if (i == 1 && j == 209) {
        setTimeout(end, 400);
    }
}


function happening(x, y, evt) {
    let przycisk = evt.key;
    let j = y + (x * 35);


    if (przycisk == "ArrowRight" && (j + 1) <= 209) {
        il[j + 1].focus();
    }
    else if (przycisk == "ArrowLeft" && (j - 1) >= 0) {
        il[j - 1].focus();
    }
    else if (przycisk == "Backspace" && (j - 1) >= 0) {
        il[j - 1].focus();
        il[j - 1].style.backgroundColor = "transparent";
        il[j - 1].value = "";
        countletters--;
        if (il[j - 1].value != letter[j - 1].innerHTML && mistakes>=1) { mistakes--; }
        else { }
    }
    else {
    }
}


function end() {
    let form = document.getElementById("form");
    const todaye = new Date();
    e = todaye.getHours() * 3600 + todaye.getMinutes() * 60 + todaye.getSeconds();
    let time = e - s;
    let perm = Math.floor((countletters / time) * 60);
    percentmistakes = mistakes / countletters;
    if (percentmistakes < 0.2 && perm > 100) {
        form.innerHTML = '<div id="fdiv"><h2>You finished your lesson</h2><p class="fspan">Time: ' + time + ' seconds</p><p class="fspan">Letters per minute: ' + perm + '</p><p class="fspan">Mistakes: ' + mistakes + '</p><p class="fspan">You should try NEXT</p><a href="LESSON_' + lastlesson + '.html" class="buttonagain">AGAIN</a><a href="LESSON_' + (lastlesson + 1) + '.html" class="buttonnext">NEXT</a><br /></div>';
    }
    else if (percentmistakes < 0.2 && perm > 100 && lastlesson == 16) {
        form.innerHTML = '<div id="fdiv"><h2>You finished your lesson</h2><p class="fspan">Time: ' + time + ' seconds</p><p class="fspan">Letters per minute: ' + perm + '</p><p class="fspan">Mistakes: ' + mistakes + '</p><p class="fspan">You should try TEST</p><a href="LESSON_' + lastlesson + '.html" class="buttonagain">AGAIN</a><a href="TEST.html" class="buttonnext">TEST</a><br /></div>';
    }
    else {
        form.innerHTML = '<div id="fdiv"><h2>You finished your lesson</h2><p class="fspan">Time: ' + time + ' seconds</p><p class="fspan">Letters per minute: ' + perm + '</p><p class="fspan">Mistakes: ' + mistakes + '</p><p class="fspan">You should try AGAIN</p><a href="LESSON_' + lastlesson + '.html" class="buttonagain">AGAIN</a><a href="LESSON_' + (lastlesson + 1) + '.html" class="buttonnext">NEXT</a><br /></div>';
    }
}