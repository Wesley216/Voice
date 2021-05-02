const utterance = new SpeechSynthesisUtterance();

utterance.lang = "en";

/**/
function speak(){

    speechSynthesis.speak(utterance);

}
function stop(){

    speechSynthesis.cancel();

}
function setText(event){

    utterance.text = event.target.innerText;

}

