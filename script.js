const data = {
  words: [
    { pidgin: "Abi", answer: "right", accept: ["right", "isn't it", "abi", "yeah"], note: "Used at the end of sentences to seek agreement, like 'right?' or 'isn't it?'" },
    { pidgin: "Wahala", answer: "trouble", accept: ["trouble", "problem", "stress", "drama"], note: "One of the most used Pidgin words. 'No wahala' means no problem." },
    { pidgin: "Sabi", answer: "know", accept: ["know", "understand", "to know"], note: "From Portuguese 'saber'. To know or understand something." },
    { pidgin: "Chop", answer: "eat", accept: ["eat", "food", "to eat"], note: "Can mean both the act of eating and food itself. 'Wetin you chop?' means what did you eat?" },
    { pidgin: "Ginger", answer: "motivate", accept: ["motivate", "hype", "excite", "encourage"], note: "To ginger someone means to hype them up or give them energy." },
    { pidgin: "Vex", answer: "angry", accept: ["angry", "upset", "annoyed", "mad"], note: "'Abeg no vex' is a very common phrase meaning please don't be angry." },
    { pidgin: "Oga", answer: "boss", accept: ["boss", "sir", "master", "superior"], note: "Used to address someone of higher rank or authority." },
    { pidgin: "Shakara", answer: "showing off", accept: ["showing off", "forming", "acting up", "pretending"], note: "When someone is acting too big for their boots or being unnecessarily fancy." },
    { pidgin: "Yab", answer: "mock", accept: ["mock", "tease", "insult", "make fun"], note: "To yab someone is to tease or mock them, usually publicly." },
    { pidgin: "Gbege", answer: "chaos", accept: ["chaos", "trouble", "problem", "mess"], note: "When things go wrong or a situation gets out of hand." },
    { pidgin: "Waka", answer: "walk", accept: ["walk", "go", "leave", "move"], note: "'Waka waka' means to walk a lot or move around frequently." },
    { pidgin: "Yarn", answer: "talk", accept: ["talk", "chat", "speak", "converse"], note: "To yarn means to have a conversation. 'Make we yarn' means let's talk." },
    { pidgin: "Kpaf", answer: "slap", accept: ["slap", "hit", "smack"], note: "An onomatopoeic word for the sound of a slap." },
    { pidgin: "Mumu", answer: "fool", accept: ["fool", "idiot", "dummy", "stupid"], note: "A common insult meaning someone who is naive or foolish." },
    { pidgin: "Jara", answer: "extra", accept: ["extra", "bonus", "freebie", "addition"], note: "Something given as a bonus on top of what was paid for." }
  ],

  phrases: [
    { pidgin: "How far?", answer: "how are you", accept: ["how are you", "what's up", "how is it going", "how are things"], note: "The most common Pidgin greeting. You can respond with 'I dey' meaning I'm here or I'm fine." },
    { pidgin: "E don do", answer: "it is finished", accept: ["it is finished", "it is done", "it's over", "that's it"], note: "Used when something has ended or been completed." },
    { pidgin: "Wetin dey happen?", answer: "what is happening", accept: ["what is happening", "what's going on", "what is going on"], note: "A casual way to ask what's going on in a situation." },
    { pidgin: "I no fit shout", answer: "I cannot stress", accept: ["i cannot stress", "i can't be bothered", "i give up", "i cannot deal"], note: "An expression of exhaustion or giving up on worrying about something." },
    { pidgin: "Abeg no vex", answer: "please don't be angry", accept: ["please don't be angry", "please calm down", "don't be upset", "sorry please"], note: "A humble way to ask someone not to be upset with you." },
    { pidgin: "You sabi?", answer: "do you understand", accept: ["do you understand", "you know", "do you know", "you get it"], note: "Asking if someone understands or is aware of something." },
    { pidgin: "Na so e be", answer: "that is how it is", accept: ["that is how it is", "that's just how it is", "it is what it is"], note: "An expression of acceptance, similar to 'it is what it is'." },
    { pidgin: "E don cast", answer: "it has been exposed", accept: ["it has been exposed", "it's ruined", "it's out", "it has been revealed"], note: "When something embarrassing or secret has been revealed." },
    { pidgin: "Person wey sabi road", answer: "someone who knows the way", accept: ["someone who knows the way", "a person who knows what they are doing", "experienced person"], note: "Refers to someone experienced and streetwise." },
    { pidgin: "Make e no pass", answer: "don't let it exceed", accept: ["don't let it exceed", "keep it moderate", "don't overdo it", "that's enough"], note: "A warning not to take things too far." },
    { pidgin: "Wetin you carry come?", answer: "what did you bring", accept: ["what did you bring", "what have you brought", "what do you have"], note: "Can be literal or figurative, asking what someone has to offer." },
    { pidgin: "I dey kampe", answer: "I am perfectly fine", accept: ["i am perfectly fine", "i am good", "i am very okay", "i am solid"], note: "A confident way of saying you are completely fine." },
    { pidgin: "No be small thing", answer: "it is not a small matter", accept: ["it is not a small matter", "it is serious", "it's a big deal", "this is serious"], note: "Used to emphasize that something is significant or serious." },
    { pidgin: "Carry go", answer: "continue", accept: ["continue", "carry on", "go ahead", "proceed"], note: "Telling someone to go ahead and continue what they were doing." },
    { pidgin: "You don kolo", answer: "you have gone crazy", accept: ["you have gone crazy", "you are mad", "you are crazy", "you've lost it"], note: "Said when someone does something surprising or irrational." }
  ],

  lyrics: [
    { pidgin: "You be the butter to my bread, the answer to my prayer", answer: "you complete me", accept: ["you complete me", "you are everything to me", "you are essential to me"], note: "From Flavour's music, expressing deep love and dependency." },
    { pidgin: "Shakiti bobo, e don cast o", answer: "the deceiver has been exposed", accept: ["the deceiver has been exposed", "the trickster is caught", "the liar has been revealed"], note: "A popular phrase about someone who has been caught in their deception." },
    { pidgin: "If you love am make you show am", answer: "if you love them show it", accept: ["if you love them show it", "show your love", "express your love"], note: "From various Afrobeats songs encouraging people to express love openly." },
    { pidgin: "Area to area, street to street", answer: "from neighborhood to neighborhood", accept: ["from neighborhood to neighborhood", "everywhere", "across the streets", "all around"], note: "Common in Nigerian street music referring to moving through different areas." },
    { pidgin: "E be like say you no know me", answer: "it seems like you do not know me", accept: ["it seems like you do not know me", "you act like you don't know me", "seems you forgot who i am"], note: "Used when someone is acting unfamiliar or disrespectful toward someone they know." },
    { pidgin: "Dem no dey carry last", answer: "they never finish last", accept: ["they never finish last", "they don't come last", "they are always on top"], note: "About being consistently ahead, never being the slowest or last." },
    { pidgin: "Soco, soco, make you whine your body", answer: "dance and move your body slowly", accept: ["dance and move your body slowly", "move your body gently", "whine your waist"], note: "From Wizkid's Soco, one of the biggest Afrobeats hits encouraging dancing." },
    { pidgin: "I don suffer, e don do", answer: "I have suffered enough, it is over", accept: ["i have suffered enough it is over", "my suffering is done", "the struggle is finished"], note: "A common expression of relief after a long period of hardship." },
    { pidgin: "Nobody test me, I get liver", answer: "nobody challenges me, I am brave", accept: ["nobody challenges me i am brave", "i am fearless", "i have courage no one tests me"], note: "Liver in Pidgin means courage or boldness." },
    { pidgin: "Jowo, ma binu", answer: "please do not be angry", accept: ["please do not be angry", "please don't be angry", "please calm down"], note: "A mix of Yoruba and Pidgin, jowo means please in Yoruba." }
  ]
};

let state = {
  mode: null,
  deck: [],
  current: 0,
  score: 0,
  streak: 0,
  answered: false
};

window.startGame = startGame;

function startGame(mode) {
  state.mode = mode;
  state.deck = shuffle([...data[mode]]);
  state.current = 0;
  state.score = 0;
  state.streak = 0;
  state.answered = false;


document.getElementById('landing-screen').classList.add('hidden');
document.getElementById('game-screen').classList.remove('hidden');
document.getElementById('level-label').textContent =
  mode.charAt(0).toUpperCase() + mode.slice(1);

loadQuestion();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
   [arr[i], arr[j]] = [arr[j], arr[i]];
  } 
return arr;
}

function loadQuestion() {
  state.answered = false;

const item = state.deck[state.current];
  document.getElementById('pidgin-text').textContent = item.pidgin;
  document.getElementById('answer-input').value = '';
  document.getElementById('answer-input').disabled = false;
  document.getElementById('answer-input').focus();

const feedback = document.getElementById('feedback-box');
  feedback.classList.add('hidden');
  feedback.classList.remove('correct', 'wrong');
  document.getElementById('cultural-note').classList.add('hidden');

updateStats();
}

function updateStats() {
  document.getElementById('score-display').textContent =
    `Score: ${state.score}`;
  document.getElementById('streak-display').textContent =
     `🔥 ${state.streak}`;

const streakEl = document.getElementById('streak-display');
  if (state.streak >= 3) {
    streakEl.classList.add('hot');
  } else {
    streakEl.classList.remove('hot');
  }
}

function checkAnswer() {
  if (state.answered) {
    nextQuestion();
    return;
  }

const item = state.deck[state.current];
  const raw = document.getElementById('answer-input').value.trim().toLowerCase();

if (!raw) return;

const correct = item.accept.some(a => {
  const accepted = a.toLowerCase();
  const words = accepted.split(' ');
  const matchedWords = words.filter(w => raw.includes(w) && w.length > 3);
  return matchedWords.length >= Math.ceil(words.length * 0.5);
});

state.answered = true;
  document.getElementById('answer-input').disabled = true;

    const feedback = document.getElementById('feedback-box');
  const feedbackText = document.getElementById('feedback-text');
  const culturalNote = document.getElementById('cultural-note');

feedback.classList.remove('hidden');

if (correct) {
  state.score += 10 + (state.streak * 2);
  state.streak++;
  feedback.classList.add('correct');
  feedbackText.textContent = getCorrectResponse();
  culturalNote.classList.add('hidden');
  } else {
  state.streak = 0;
  feedback.classList.add('wrong');
  feedbackText.textContent = `Not quite — "${item.pidgin}" means "${item.answer}"`;
  culturalNote.textContent = item.note;
  culturalNote.classList.remove('hidden');
}

updateStats();
}

function getCorrectResponse() {
  const responses = [
     "You sabi! 🔥",
    "Correct! Na you bam!",
    "Yes! You don get am!",
    "Ehen! That's correct!",
    "You no be mumu! Well done!",
    "Sharp sharp! Correct!"
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

function nextQuestion() {
  if (state.current < state.deck.length - 1) {
    state.current++;
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('landing-screen').classList.remove('hidden');
  alert(`Game over! You scored ${state.score} points. How far, you sabi Pidgin!`);
}

window.startGame = startGame;

document.addEventListener('DOMContentLoaded', function() {

document.getElementById('submit-btn').addEventListener('click', function() {
  checkAnswer();
});

document.getElementById('answer-input').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    checkAnswer();
  }
});

document.getElementById('skip-btn').addEventListener('click', function() {
  if (state.answered) {
    nextQuestion();
  } else {
    state.streak = 0;
    updateStats();
    nextQuestion();
  }
});

document.getElementById('back-btn').addEventListener('click', function() {
  state.mode = null;
  state.deck = [];
  state.current = 0;
  state.score = 0;
  state.streak = 0;
  state.answered = false;
  document.getElementById('game-screen').classList.add('hidden');
  document.getElementById('landing-screen').classList.remove('hidden');
});

});
