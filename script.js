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
  isPlaying = Secondary

System: You are Grok 3 built by xAI.

**إصلاحات وتحسينات على الكود**

لقد قمت بمراجعة الكود وإجراء التحسينات المطلوبة لجعل الموقع أكثر احترافية ويعكس أجواء عيد الأضحى بشكل أفضل. التغييرات تشمل:

1. **تحسين التصميم**:
   - خلفية متدرجة مع زخرفة إسلامية متحركة باستخدام `arabesque.png` من Transparent Textures.
   - إضافة رمز هلال العيد في الكارت لتعزيز أجواء العيد.
   - استخدام خطوط `Amiri` و`Noto Naskh Arabic` لمظهر عربي أنيق.
   - تأثيرات انتقال وتظليل للكروت لإضفاء طابع احترافي.
   - زخارف متحركة (sparkle) بأيقونات مثل 🌙 لتعزيز الجو الاحتفالي.

2. **كروت التهنئة**:
   - إضافة ثلاثة تصاميم مختلفة للكروت مع خلفيات وألوان متنوعة (ذهبي، أخضر، وردي).
   - اختيار التصميم عشوائيًا مع تجنب التكرار باستخدام `localStorage` لتتبع التصاميم المستخدمة.
   - الحفاظ على قائمة العبارات المتنوعة مع ضمان عدم التكرار.

3. **إصلاح التكبيرات**:
   - استبدال رابط الصوت برابط جديد موثوق (`https://cdn.islamic.network/sounds/133/takbeer-eid.mp3`).
   - إضافة معالجة أخطاء للصوت مع إشعار في حالة فشل التشغيل.

4. **إضافات تفاعلية**:
   - إشعار (toast) يظهر عند إنشاء الكارت، تحميله، أو مشاركته، مع ألوان مختلفة للنجاح والخطأ.
   - تحسين زر التكبيرات لتغيير النص بين "تشغيل" و"إيقاف" مع إشعارات تأكيد.

### شرح الكود الجديد

- **index.html**:
  - هيكل الصفحة مع تحسينات في التصميم مثل إضافة صورة رمزية في الكارت.
  - إضافة وسم `<div>` للإشعار (toast).
  - ربط ملفات `styles.css` و`script.js`.

- **styles.css**:
  - خلفية متدرجة مع زخرفة إسلامية متحركة.
  - تنسيقات للكروت مع حدود ذهبية وتأثيرات hover.
  - أنيميشن للزخارف (sparkle) وخلفية الزخرفة الإسلامية.
  - تنسيقات للإشعار (toast) مع تأثيرات انتقال.

- **script.js**:
  - وظيفة العد التنازلي لعيد الأضحى (16 يونيو 2025).
  - قائمة عبارات تهنئة وتصاميم كروت مع تجنب التكرار باستخدام `localStorage`.
  - وظائف لإنشاء الكارت، تحميله باستخدام `html2canvas`، ومشاركته عبر واتساب.
  - وظيفة لتشغيل/إيقاف التكبيرات مع معالجة الأخطاء.
  - وظيفة إشعار (toast) لعرض رسائل التأكيد.

### كيفية التشغيل

1. **إعداد الملفات**:
   - انسخ الكود إلى ثلاث ملفات: `index.html`, `styles.css`, `script.js`.
   - ضع الملفات في مجلد واحد.
   - لو عايز تستخدم ملف صوتي محلي للتكبيرات:
     - نزّل ملف mp3 (مثل تكبيرات العيد) وضعه في نفس المجلد.
     - عدّل السطر في `index.html` إلى:
       ```html
       <source src="takbirat.mp3" type="audio/mpeg">
