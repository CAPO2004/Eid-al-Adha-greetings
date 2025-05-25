// Eid Takbeer Player
const playTakbeerBtn = document.getElementById('playTakbeer');
const takbeerAudio = document.getElementById('takbeerAudio');
let isPlaying = false;

playTakbeerBtn.addEventListener('click', () => {
  if (!isPlaying) {
    takbeerAudio.play().catch(error => alert('فشل في تشغيل التكبيرات، تحقق من الاتصال!'));
    playTakbeerBtn.textContent = 'إيقاف التكبيرات 🎧';
    isPlaying = true;
  } else {
    takbeerAudio.pause();
    playTakbeerBtn.textContent = 'تشغيل التكبيرات 🎧';
    isPlaying = false;
  }
});

// Personalized Eid Greeting Generator
const nameInput = document.getElementById('nameInput');
const greetingOutput = document.getElementById('greetingOutput');

const greetings = [
  "كل عام وأنت بخير يا {name}، عيد أضحى مبارك! 🎉",
  "تقبل الله طاعتك يا {name}، وعيدك مبارك! 🐑",
  "أعاده الله عليك بالخير يا {name}، عيد سعيد! 🌙",
  "عيد أضحى مبارك يا {name}، مليء بالفرح! 🎁"
];

function generateGreeting() {
  const name = nameInput.value.trim();
  if (name) {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)].replace('{name}', name);
    greetingOutput.textContent = randomGreeting;
  } else {
    greetingOutput.textContent = 'من فضلك، أدخل اسمك أولاً! 😊';
  }
}

// Download Greeting as Image
function downloadGreeting() {
  const greetingElement = document.getElementById('greetingOutput');
  if (greetingElement.textContent) {
    html2canvas(greetingElement).then(canvas => {
      const link = document.createElement('a');
      link.download = 'eid_greeting.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  } else {
    alert('لا يوجد تهنئة للتحميل، أنشئ واحدة أولاً! 🎁');
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
