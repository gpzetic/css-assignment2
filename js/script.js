const lyrics = [
    "[00:03:00]",
    "[00:14.97]~Aren't you somethin' to admire?~",
    "[00:16.80]'Cause your $shine$ is somethin' like a $mirror$",
    "[00:19.2]And I can't help but notice",
    "[00:23.00]~You @reflect@ in this $@heart of mine@$~",
    "[00:26.72]If you &ever& feel alone",
    "[00:29.73]And the glare makes me @hard to find@",
    "[00:31.80]Just know that I'm &always&",
    "[00:35.01]Parallel on the $other side$",
    "[00:37.52]~'Cause with your !hand in my hand!~",
    "[00:39.28]And a pocket full of soul",
    "[00:41.92]~I can tell you there's no place we couldn't go~",
    "[00:43.96]Just put your hand on the glass",
    "[00:45.67]~I'll be tryin' to pull you through~",
    "[00:48.03]You just gotta be ^strong^",
    "[00:50.15]'Cause I don't wanna @lose@ you now",
    "[00:53.71]I'm lookin' right at $the other half of me$",
    "[00:56.60]The %vacancy% that sat in my &heart&",
    "[00:59.63]Is a &space& that $now you hold$",
    "[01:02.55]Show me how to %fight% for now",
    "[01:05.76]And I'll tell you, baby, $it was easy$",
    "[01:09.44]Comin' $back here to you$ once I figured it out",
    "[01:12.91]You were $right here$ all along",
    "[01:16.37]It's like you're my #mirror# (O-oh)",
    "[01:19.58]My mirror staring back at me %(O-oh, o-oh, o-oh)%",
    "[01:22.60]I couldn't get any bigger (O-%oh%)",
    "[01:25.55]With anyone else beside me (O-oh, o-oh, o-oh)",
    "[01:27.38]And now it's ^clear^ as this ^promise^",
    "[01:31.75]That we're making two reflections, &into one&",
    "[01:34.39]'Cause it's like you're my &mirror& (O-oh)",
    "[01:38.32]#My mirror staring back at me, staring back at me#",
    "[01:41.36]Aren't you somethin', an $original$?",
    "[01:44.71]'Cause it doesn't seem merely assembled",
    "[01:47.02]And I can't help but stare, 'cause",
    "[01:50.06]I see #truth# somewhere in your eyes",
    "[01:53.50]Ooh, I can't ever change without you",
    "[01:56.00]You reflect me, I %love% that about you",
    "[02:01.00]And if I could, I would look at us all the time",
    "[02:02.92]'Cause with your $hand in my hand$",
    "[02:05.07]And a pocket full of soul",
    "[02:07.36]I can tell you there's #no place# we couldn't go",
    "[02:10.18]Just put your hand on the glass",
    "[02:11.82]I'll be tryin' to pull you through",
    "[02:14.28]You just gotta be ^strong^",
    "[02:16.62]'Cause I don't wanna %lose you% now",
    "[02:19.92]I'm lookin' right at the $other half of me$",
    "[02:22.77]The $#vacancy# that sat in my heart$",
    "[02:25.98]Is a space that now you hold",
    "[02:28.99]Show me how to ^fight^ for now",
    "[02:32.28]And I'll tell you, baby, it was easy",
    "[02:35.58]Comin' back here to you once I figured it out",
    "[02:39.15]You were $right here all along$ (Oh)",
    "[02:42.65]It's like you're my #mirror# (O-oh)",
    "[02:45.77]My mirror $staring back at me$ (O-oh, o-oh, o-oh)",
    "[02:48.90]I couldn't get any bigger (O-oh)",
    "[02:51.55]With anyone else beside me (O-oh, o-oh, o-oh)",
    "[02:54.46]And now it's clear as this ~promise~",
    "[02:58.37]That we're making two reflections into one",
    "[03:01.28]~'Cause it's like you're my mirror (O-oh)~",
    "[03:05.15]My mirror staring back at me, staring back at me",
    "[03:10.94]~Yesterday is history~, oh",
    "[03:15.68]~Tomorrow's a mystery~, ohh",
    "[03:24.79]I can see you ~lookin' back at me~",
    "[03:29.60]Keep your eyes on me",
    "[03:31.89]Baby, keep your eyes on me",
    "[03:33.23]~'Cause I don't wanna lose you now~",
    "[03:36.92]I'm lookin' right at the other half of me",
    "[03:40.09]The vacancy that sat in my heart",
    "[03:44.35]Is a space that now you hold #(Nooo)#",
    "[03:48.68]Show me how to %fight% for now (Please show me, baby)",
    "[03:51.50]I'll tell you, baby, it was easy",
    "[03:54.22]Comin' back here to you once I figured it out",
    "[03:58.85]You were ~right here all along~",
    "[04:04.14]It's like you're my ~mirror~ (O-oh)",
    "[04:08.12]~My mirror staring back at me~ (O-oh, o-oh, o-oh)",
    "[04:11.63]I couldn't get any bigger (O-oh)",
    "[04:15.44]With anyone else beside me (O-oh, o-oh, o-oh)",
    "[04:18.23]And now it's ~clear as this promise~",
    "[04:23.33]That we're making ~two reflections into one~",
    "[04:27.35]'Cause it's like you're my #mirror# (O-oh)",
    "[04:30.23]My mirror ~staring back at me~, $staring back at me$",
    "[04:38.85]O-o-ohh (O-oh), o-o-ohh (O-oh, o-oh, o-oh)",
    "[04:48.49]~Oh (O-oh, o-oh, o-oh, o-oh)~"
];

const effects = [
    "[00:03.00]none",
    "[00:14.97]none",
    "[00:53.71]rave",
    "[01:44.71]none",
    "[02:19.92]rave",
    "[03:18.68]slow",
    "[03:36:92]sad"
];

const emphases = {
    '&': 'red',
    '#': 'yellow',
    '^': 'blue',
    '@': 'green',
    '%': 'big',
    '$': 'spread',
    '~': 'fancy',
    '!': 'move'
};

const body = document.getElementById("body");
const audioElement = document.getElementById("myAudio");
var button = null;
var help = null;
var helpMenu = null;
var cavnasBackground = {anim: 0};

var lyricTimeout = null;
var currentLyric = 0;
var currentEffect = 0;
var lyrEl = null;
var lyrDiv = null;
var currentAnim = 0;
var anims = 3;
var context = null;
var buttonClicked = false;

document.addEventListener("DOMContentLoaded", 
function () {
    button = document.getElementById("button");
    lyrEl = document.getElementById("lyrEl");
    lyrDiv = document.getElementById("lyrDiv");
    help = document.getElementById("help");
    helpMenu = document.createElement('div');
    helpMenu.style.backgroundColor = 'rgba(0,0,0,0)';
    helpMenu.style.position = 'absolute';
    helpMenu.style.top = "5%";
    helpMenu.style.left = "20%";
    helpMenu.style.opacity = 1;
    var helps = document.createElement('p');
    helps.innerHTML = "Press [,] comma to seek backwards<br>Press [.] period to seek forwards<br>Press space to play/pause<br>[q] to close";
    helps.classList.add('clattering');
    helps.style.fontSize = '4em';
    helps.style.color = '#efefef';
    helpMenu.appendChild(helps);
    body.appendChild(helpMenu);
    const songSlider = document.getElementById("songSlider");

    //debug
    var debug = document.createElement('p')
    debug.style.top = '300px'
    debug.style.color = 'white'
    lyrDiv.appendChild(debug);
    audioElement.ontimeupdate = function() {
        songSlider.value = audioElement.currentTime / audioElement.duration * songSlider.max;
        // debug.textContent = audioElement.currentTime;
    };

    songSlider.oninput = function() {
        audioElement.currentTime = songSlider.value * (audioElement.duration / songSlider.max);
        updateLyricsBasedOnTime(audioElement.currentTime);
    }; 
});

document.addEventListener('keypress', function(event) {
    if (event.code == "Period") {
        audioElement.currentTime = getInfo([lyrics[findLyricIndex(audioElement.currentTime) + 2]])[0].time;
        updateLyricsBasedOnTime(audioElement.currentTime);
    }
    else if (event.code == "Comma") {
        audioElement.currentTime = getInfo([lyrics[findLyricIndex(audioElement.currentTime)]])[0].time;
        updateLyricsBasedOnTime(audioElement.currentTime);
    }
    else if (event.code == "Space") {
        if (currentLyric == 0) firstPlay();
        else {
            audioElement.currentTime = getInfo([lyrics[findLyricIndex(audioElement.currentTime)]])[0].time;
            updateLyricsBasedOnTime(audioElement.currentTime);
            button.click();
        }
    }
    else if (event.code == "KeyQ") {
        showHelp();
    }
});

function showHelp() {
    if (helpMenu.style.opacity == 1) {
        helpMenu.style.opacity = 0;
    }
    else {
        helpMenu.style.opacity = 1;
    }
}

function addEmphasis(t, c) {
    let i1 = -1, i2 = -1;
    for (let i = 0; i < t.length; i ++) {
        if (t.charAt(i) == c) {
            if (i1 == -1) i1 = i;
            else {
                i2 = i;
                break;
            }
        }
    }
    let outsideText1 = t.substring(0, i1);
    let insideText = t.substring(i1 + 1, i2);
    let outsideText2 = t.substring(i2 + 1); 
    return outsideText1 + "<span class='" + emphases[c] + "'>" + insideText + "</span>" + outsideText2;
}

function getInfo(l) {
    return l.map(w => {
        let [timestamp, text] = w.split(']');
        const cleanTimestamp = timestamp.substring(1);
        for (let i = 0; i < Object.keys(emphases).length; i ++) {
            if (text.includes(Object.keys(emphases)[i])) {
                text = addEmphasis(text, Object.keys(emphases)[i]);
                if (text.includes(Object.keys(emphases)[i])) i --;
            }
        }
        const [minutes, seconds] = cleanTimestamp.split(':');
        const totalSeconds = parseFloat(minutes) * 60 + parseFloat(seconds);
        return {
            time: totalSeconds,
            text: text
        };
    });
}

function play() {
    audioElement.play();
    button.onclick = pause;
    button.textContent = "pause";
    buttonClicked = true;
    if (currentLyric > 0 && currentLyric < lyrics.length) {
        const currentLyricTime = getInfo([lyrics[currentLyric]])[0].time;
        const previousLyricTime = getInfo([lyrics[currentLyric - 1]])[0].time;
        lyricTimeout = setTimeout(showLyrics(true), currentLyricTime - previousLyricTime);
    }
}

function firstPlay() {
    audioElement.play();
    button.onclick = pause;
    button.textContent = "pause"
    const firstLyricTime = getInfo([lyrics[0]])[0].time;
    lyricTimeout = setTimeout(showLyrics, firstLyricTime); 
    makeVisualizer();
}

function pause() {
    audioElement.pause();
    button.onclick = play;
    button.textContent= "play";
    clearTimeout(lyricTimeout);
    currentLyric --;
}

function showLyrics(skipTimeout = false) {
    if (currentLyric < lyrics.length) {
        lyrEl.innerHTML = getInfo([lyrics[currentLyric]])[0].text;
        if (!skipTimeout) currentLyric++;
        if (currentLyric < lyrics.length) {
            const nextLyricTime = getInfo([lyrics[currentLyric]])[0].time;
            const currentLyricTime = getInfo([lyrics[currentLyric - 1]])[0].time;
            const timeInSec = (nextLyricTime - currentLyricTime) * 1000;
            currentAnim = (currentAnim + 1) % anims;
            
            findEffect(currentLyric);
            lyrEl.style.animation = `anim${currentAnim} ${timeInSec / 1000}s`;
            if (!skipTimeout || buttonClicked) {
                clearTimeout(lyricTimeout);
                lyricTimeout = setTimeout(showLyrics, timeInSec);
                buttonClicked = false;
            }
        }
    }
}

function makeVisualizer() {
    // Visualizer mostly copied from https://codepen.io/nfj525/pen/rVBaab
    var context = new AudioContext();
    var src = context.createMediaElementSource(audioElement);
    var analyser = context.createAnalyser();
    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 4096;
    var bufferLength = analyser.frequencyBinCount * (3/2);
    var dataArray = new Uint8Array(bufferLength);
    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;
    var barWidth = (WIDTH / bufferLength) * 4;
    var barHeight;
    var x = 0;
    var _r = 0;
    var _g = 0;
    var _b = 0;
    inc = true;
    function renderFrame() {
        requestAnimationFrame(renderFrame);
        x = 0;
        analyser.getByteFrequencyData(dataArray);


        // animation of the background
        switch (cavnasBackground.anim) {
            case "rave":
                if (inc && _r > 120) inc = !inc;
                else if (!inc && _r < 30) inc = !inc;
                if (inc) {
                    _r += 5;
                    _g += 3;
                    _b += 1;
                }
                else {
                    _r -= 5;
                    _g -= 3;
                    _b -= 1;
                }
                ctx.fillStyle = "rgb(" + _r + "," + _g + "," + _b + ")";
                break;
            case "slow":
                if (inc && _r > 120) inc = !inc;
                else if (!inc && _r < 30) inc = !inc;
                if (inc) {
                    _g += 3;
                    _b += 2;
                }
                else {
                    _g -= 3;
                    _b -= 2;
                }
                ctx.fillStyle = "rgb(" + _r + "," + _g + "," + _b + ")";
                break;
            default:
                ctx.fillStyle = "black";
        }

        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        
        for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] * 4;
            add = 0;
            if (cavnasBackground.anim == "rave" && inc) add = _r;
            r = Math.max(50 * (i/bufferLength), 30 + add);
            g = Math.max(170 * (i/bufferLength), 0);
            b = Math.max(235 * (i/bufferLength), 60);
            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            if (cavnasBackground.anim == "sad") ctx.fillRect(x, barHeight, barWidth, barHeight);
            else ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
            x += barWidth - 1;
        }
    }
    renderFrame();
}

function findLyricIndex(currentTime) {
    return lyrics.findIndex((lyric, index) => {
        if (index + 1 == lyrics.length) return true; 
        const nextLyricTime = getInfo([lyrics[index + 1]])[0].time;
        if (index != 0) currentLyricTime = getInfo([lyrics[index - 1]])[0].time;
        else currentLyricTime = getInfo([lyrics[index]])[0].time; 
        audioElement.currentTime = currentLyricTime;
        return currentTime < nextLyricTime;
    });
}

// Function to take in time and show the correct lyric for the range input
function updateLyricsBasedOnTime(currentTime) {
    let foundIndex = findLyricIndex(currentTime);

    if (foundIndex !== -1) {
        findEffect(foundIndex);
        currentLyric = foundIndex;
        showLyrics();
    }
}


function setEffect() {
    let currentEffectText = getInfo([effects[currentEffect]])[0].text;
    if (currentEffectText != 'none') {
        cavnasBackground.anim = currentEffectText;
        if (currentEffectText == "rave") {
            lyrEl.classList.add('clattering');
        } 
        else if (currentEffectText == "slow") {
            lyrEl.classList.add('sad')
        }
        else if (currentEffectText == "sad") {
            lyrEl.classList.add('flowers')
        }
    }
    else {
        cavnasBackground.anim = '';
        lyrEl.className = '';
    }
}

function findEffect(index) {
    const time = getInfo([lyrics[index]])[0].time;
    const efInfo = getInfo(effects);
    for (let i = efInfo.length; i > 0; i --) {
        if (efInfo[i] && efInfo[i].time <= time) {
            currentEffect = i;
            setEffect();
            break;
        }
    }
}