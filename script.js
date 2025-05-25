// العد التنازلي لعيد الأضحى (16 يونيو 2025)
const eidDate = new Date('June 16, 2025 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eidDate - now;
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById('timer').innerText = `${days} أيام ${hours} ساعات ${minutes} دقائق ${seconds} ثواني`;
  
  if (distance < 0) {
    document.getElementById('timer').innerText = 'عيد أضحى مبارك! العيد بدأ!';
  }
}

setInterval(updateCountdown, 1000);

// قائمة عبارات التهنئة
const greetings = [
  "كل عام وأنت بخير، عيد أضحى مبارك!",
  "تقبل الله طاعتكم، وعيدكم مبارك!",
  "أعاده الله عليك بالخير واليمن والبركات!",
  "عيد أضحى سعيد، مليء بالفرح والسعادة!",
  "أسأل الله أن يجعل عيدكم فرحة وسرور!",
  "عيدكم مبارك، وكل عام وأنتم إلى الله أقرب!",
  "أدام الله أعيادكم بالخير والبركة!"
];

// استرجاع أو تهيئة قائمة العبارات المستخدمة
let usedGreetings = JSON.parse(localStorage.getItem('usedGreetings')) || [];

function getRandomGreeting() {
  let availableGreetings = greetings.filter(g => !usedGreetings.includes(g));
  if (availableGreetings.length === 0) {
    usedGreetings = [];
    availableGreetings = greetings;
  }
  const randomIndex = Math.floor(Math.random() * availableGreetings.length);
  const selectedGreeting = availableGreetings[randomIndex];
  usedGreetings.push(selectedGreeting);
  localStorage.setItem('usedGreetings', JSON.stringify(usedGreetings));
  return selectedGreeting;
}

// إنشاء كارت التهنئة
function generateCard() {
  const name = document.getElementById('name').value.trim();
  const greetingCard = document.getElementById('greetingCard');
  const greetingText = document.getElementById('greetingText');
  const greetingMessage = document.getElementById('greetingMessage');
  
  if (name) {
    greetingText.innerText = `عزيزي/عزيزتي ${name}`;
    greetingMessage.innerText = getRandomGreeting();
    greetingCard.classList.remove('hidden');
  } else {
    alert('من فضلك، اكتب اسمك أولاً!');
  }
}

// تحميل الكارت كصورة
function downloadCard() {
  const card = document.getElementById('greetingCard');
  html2canvas(card).then(canvas => {
    const link = document.createElement('a');
    link.download = 'eid_greeting.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}

// مشاركة الكارت عبر واتساب
function shareCard() {
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('greetingMessage').innerText;
  const shareText = `عيد أضحى مبارك! ${name}، ${message}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`);
}

// تشغيل/إيقاف التكبيرات
let isPlaying = false;
function toggleTakbir() {
  const audio = document.getElementById('takbirat');
  const button = document.getElementById('takbirButton');
  if (isPlaying) {
    audio.pause();
    button.innerText = 'تشغيل التكبيرات';
  } else {
    audio.play();
    button.innerText = 'إيقاف التكبيرات';
  }
  isPlaying = !isPlaying;
}
