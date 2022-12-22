const synth = window.speechSynthesis;

const textToSound = (text) => {
  const utterThis = new SpeechSynthesisUtterance(text);
  synth.speak(utterThis)
}

export default textToSound;