
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDelete = false;
  }

  type(){
    // Current Index
    const current = this.wordIndex % this.words.length;
    // Get full txt of current words
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting){
      // Remove char
      this.txt = fullTxt.substring(0,this.txt.length - 1)
    }else {
      this.txt = fullTxt.substring(0,this.txt.length + 1)
    }

    // Insert txt into txtElement
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    // Initial type Speed
    let typeSpeed = 100;


    setTimeout(() => this.type(), typeSpeed)
  }
}



let click = document.querySelector("#click").addEventListener("click", write);

function write(){
  let click = document.querySelector("#click");
  let display = document.querySelector('.display');
  click.className += ' animated flipOutX';
  display.className = 'animated flipInX delay-1s';

  let message = 'I LOVE YOU! Hahaha sana di ka nag expect masyado, eto lang po yun gustong kong ipakita sayo. I hope you appreciate it :) Naisip ko lang na gumawa ng ganito para maiba naman sa traditional na loveletter at dahil na rin panget yung handwriting ko :D <br><br> Gusto ko lang sabihin sayo na mahal na mahal na mahaaaaaaaaaal kita Fatima Dhayang ko! at nandito lang ako para sayo kahit anong mangyari po. I\'ll be by your side to care and support you always my love :) <br><br> Thank you for all the things that you\'ve done for me and willing to do, I appreciate it so much. Thank you for the love, care and for the support you\'ve given me. You were always there for me at the times of my success and failure, and In shaa Allah on every time of my life :) <br> <br> I LOVE YOU SO MUCH FATIMA DHAYANG KANADJAAN! I really can\'t wait to get married to you. <br><br> -Ryukku Nomi eien ni <i class="fas fa-heart"> <i class="fas fa-heart"> <i class="fas fa-heart"></i>';

  const txtElement = document.querySelector('.txt-type');
  const words = [message];
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  setTimeout(() => new TypeWriter(txtElement, words, wait), 2500);
}
