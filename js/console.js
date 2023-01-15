// function([string1, string2],target id,[color1,color2])    

main();

async function main() {
  const typeSpeed = 40;
  const deleteSpeed = 20; /* The speed/duration of the effect in milliseconds */

  await sleep(1000); // wait second before typing
  const intro = ['Hello, there!', 'I\'m Grzegorz Bronka, welcome to my website.'];
  for (let x = 0; x < intro.length; x++) {
    await typeSentence(intro[x], typeSpeed);
    await sleep(1000);
    if (x + 1 < intro.length) { // only delete if this is not last string
      await deleteSentence(deleteSpeed);
    }
  }
}

async function typeSentence(sentence, sleepBetweenLetters) {
  for (let x = 0; x < sentence.length; x++) {
    document.getElementById("friend-text").innerHTML += sentence.charAt(x);
    await sleep(sleepBetweenLetters);
  }
}

async function deleteSentence(sleepBetweenBackspaces) {
  const length = document.getElementById("friend-text").innerHTML.length;
  for (let x = length; x >= 0; x--) {
    let text = document.getElementById("friend-text").innerHTML
    document.getElementById("friend-text").innerHTML = text.substring(0, x);
    await sleep(sleepBetweenBackspaces);
  }
}

// blinking underscore
var con = document.getElementById('console');
var visible = true;
window.setInterval(function () {
  if (visible === true) {
    con.className = 'console-underscore hidden'
    visible = false;
  } else {
    con.className = 'console-underscore'
    visible = true;
  }
}, 500)


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
