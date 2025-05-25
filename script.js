// Eid Takbeerat Player
const audioElements = {
  yasser: document.getElementById('yasser'),
  mishary: document.getElementById('mishary'),
  nasser: document.getElementById('nasser')
};

function toggleAudio(id) {
  const audio = audioElements[id];
  const isPlaying = audio.paused === false;

  // Pause all other audios
  Object.values(audioElements).forEach(a => {
    if (a !== audio) a.pause();
  });

  if (isPlaying) {
    audio.pause();
    document.querySelector(`button[onclick="toggleAudio('${id}')"]`).textContent = 'تشغيل ⏯️';
  } else {
    audio.play().catch(() => alert('فشل في تشغيل التكبيرات، تحقق من الاتصال!'));
    document.querySelector(`button[onclick="toggleAudio('${id}')"]`).textContent = 'إيقاف ⏯️';
  }
}

// Personalized Eid Greetings
const nameInput = document.getElementById('nameInput');
const greetingOutput = document.getElementById('greetingOutput');

const greetings = [
  "عيدك مبارك يا {{name}} 🌙🐑",
  "يا {{name}}، كل سنة وانت طيب وعيد سعيد عليك 🎉",
  "{{name}}، عساكم من عواده! 🕋💛",
  "تقبل الله طاعاتك يا {{name}}، وعيدك مبارك ❤️",
  "كل عام وأنت بخير يا {{name}}، عيد أضحى سعيد 🌟",
  "يا {{name}}، أسأل الله أن يجعل عيدك مباركًا 🎁",
  "عيد أضحى مبارك يا {{name}}، مليء بالفرح 🐑",
  "{{name}}، تقبل الله منكم وأهلكم 🌙",
  "يا {{name}}، عيدك سعيد وقلوبكم مليئة بالإيمان 💚",
  "كل سنة وأنت في خير يا {{name}}، عيد مبارك 🎉",
  "يا {{name}}، أدام الله عليك السعادة في عيدك 🌟",
  "{{name}}، عسى الله يتقبل منك صالح أعمالك 🕋",
  "عيد أضحى سعيد يا {{name}}، بالحب والسلام ❤️",
  "يا {{name}}، كل عام وأنت بألف خير 🎁",
  "{{name}}، أعاده الله عليك باليمن والبركات 🌙",
  "تقبل الله دعواتك يا {{name}}، وعيدك مبارك 💛",
  "يا {{name}}، عيدك فيه الفرحة والسرور 🐑",
  "كل سنة وأنت يا {{name}} في حفظ الله 🎉",
  "{{name}}، عيد أضحى مبارك مليء بالخير 🌟",
  "يا {{name}}، أسعدك الله في عيدك المبارك ❤️"
];

function generateGreeting() {
  const name = nameInput.value.trim();
  if (name) {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)].replace('{{name}}', name);
    greetingOutput.textContent = randomGreeting;
  } else {
    greetingOutput.textContent = 'من فضلك، أدخل اسمًا أولاً! 😊';
  }
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
  themeToggle.textContent = '☀️';
}
