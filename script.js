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
  "أدام الله أعيادكم بالخير والبركة!",
  "عيد سعيد يملؤه الفرح والمحبة!"
];

// قائمة تصاميم الكروت
const cardStyles = [
  { background: 'linear-gradient(135deg, #fefcea, #f1da36)', border: '#d4af37' },
  { background: 'linear-gradient(135deg, #e0f7fa, #26a69a)', border: '#00796b' },
  { background: 'linear-gradient(135deg, #fce4ec, #ec407a)', border: '#c2185b' }
];

// استرجاع أو تهيئة قائمة العبارات والتصاميم المستخدمة
let usedGreetings = JSON.parse(localStorage.getItem('usedGreetings')) || [];
let usedStyles = JSON.parse(localStorage.getItem('usedStyles')) || [];

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

function getRandomStyle() {
  let availableStyles = cardStyles.filter((_, i) => !usedStyles.includes(i));
  if (availableStyles.length === 0) {
    usedStyles = [];
    availableStyles = cardStyles;
  }
  const randomIndex = Math.floor(Math.random() * availableStyles.length);
  const selectedStyle = availableStyles[randomIndex];
  usedStyles.push(cardStyles.indexOf(selectedStyle));
  localStorage.setItem('usedStyles', JSON.stringify(usedStyles));
  return selectedStyle;
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
    const style = getRandomStyle();
    greetingCard.style.background = style.background;
    greetingCard.style.borderColor = style.border;
    greetingCard.classList.remove('hidden');
    showToast('تم إنشاء الكارت بنجاح!');
  } else {
    showToast('من فضلك، اكتب اسمك أولاً!', true);
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
    showToast('تم تحميل الكارت بنجاح!');
  });
}

// مشاركة الكارت عبر واتساب
function shareCard() {
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('greetingMessage').innerText;
  const shareText = `عيد أضحى مبارك! ${name}، ${message}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`);
  showToast('تمت المشاركة عبر واتساب!');
}

// إشعار التأكيد
function showToast(message, isError = false) {
  const toast = document.getElementById('toast');
  toast.innerText = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  toast.style.backgroundColor = isError ? '#dc2626' : '#15803d';
  setTimeout(() => {
    toast.classList.remove('show');
    toast.classList.add('hidden');
  }, 3000);
}

// تشغيل/إيقاف التكبيرات
let isPlaying = false;
function toggleTakbir() {
  const audio = document.getElementById('takbirat');
  const button = document.getElementById('takbirButton');
  if (isPlaying) {
    audio.pause();
    button.innerText = 'تشغيل التكبيرات';
    showToast('تم إيقاف التكبيرات');
  } else {
    audio.play().catch(() => showToast('خطأ في تشغيل التكبيرات، تحقق من الرابط!', true));
    button.innerText = 'إيقاف التكبيرات';
    showToast('تم تشغيل التكبيرات');
  }
  isPlaying = !isPlaying;
}

// وضع ليل/نهار
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

function setMode(mode) {
  if (mode === 'night') {
    body.classList.remove('day-mode');
    body.classList.add('night-mode');
    modeToggle.innerText = 'وضع النهار';
    localStorage.setItem('mode', 'night');
  } else {
    body.classList.remove('night-mode');
    body.classList.add('day-mode');
    modeToggle.innerText = 'وضع الليل';
    localStorage.setItem('mode', 'day');
  }
}

// تحميل الوضع المحفوظ
const savedMode = localStorage.getItem('mode') || 'day';
setMode(savedMode);

modeToggle.addEventListener('click', () => {
  const currentMode = body.classList.contains('night-mode') ? 'day' : 'night';
  setMode(currentMode);
});
