// استيراد قائمة التهاني
import eidGreetings from './greetings.js';

// انتظار تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة المتغيرات
    const audioButton = document.getElementById('audio-button');
    const audioIcon = audioButton.querySelector('i');
    const takbirat = document.getElementById('takbirat');
    const themeButton = document.getElementById('theme-button');
    const themeIcon = themeButton.querySelector('i');
    const body = document.body;
    const nameInput = document.getElementById('name');
    const generateCardBtn = document.getElementById('generate-card');
    const greetingForm = document.getElementById('greeting-form');
    const greetingCard = document.getElementById('greeting-card');
    const greetingText = document.getElementById('greeting-text');
    const recipientName = document.getElementById('recipient-name');
    const downloadCardBtn = document.getElementById('download-card');
    const newCardBtn = document.getElementById('new-card');
    const shareFacebook = document.getElementById('share-facebook');
    const shareTwitter = document.getElementById('share-twitter');
    const shareWhatsapp = document.getElementById('share-whatsapp');
    const shareTelegram = document.getElementById('share-telegram');
    const currentYear = document.getElementById('current-year');
    const backgroundContainer = document.querySelector('.balloons-container');
    
    // تعيين السنة الحالية في التذييل
    currentYear.textContent = new Date().getFullYear();
    
    // تعيين مصدر ملف الصوت
    takbirat.src = 'assets/takbirat.ogg';
    
    // إضافة البالونات المتحركة للخلفية
    createBalloons();
    
    // التحكم في تشغيل/إيقاف الصوت
    audioButton.addEventListener('click', function() {
        if (takbirat.paused) {
            takbirat.play();
            audioIcon.classList.remove('fa-volume-mute');
            audioIcon.classList.add('fa-volume-up');
        } else {
            takbirat.pause();
            audioIcon.classList.remove('fa-volume-up');
            audioIcon.classList.add('fa-volume-mute');
        }
    });
    
    // التبديل بين الوضع الليلي والنهاري
    themeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });
    
    // إنشاء بطاقة التهنئة
    generateCardBtn.addEventListener('click', function() {
        const name = nameInput.value.trim();
        if (name === '') {
            alert('الرجاء إدخال اسمك');
            return;
        }
        
        // اختيار تهنئة عشوائية مع دمج الاسم
        const randomGreeting = getRandomGreeting(name);
        
        // عرض التهنئة (الاسم مدمج بالفعل في التهنئة)
        greetingText.textContent = randomGreeting;
        recipientName.textContent = '';
        
        // إخفاء نموذج الإدخال وإظهار البطاقة
        greetingForm.classList.add('hidden');
        greetingCard.classList.remove('hidden');
        
        // إنشاء زخارف البطاقة
        createCardDecorations();
    });
    
    // إنشاء بطاقة جديدة
    newCardBtn.addEventListener('click', function() {
        greetingCard.classList.add('hidden');
        greetingForm.classList.remove('hidden');
        nameInput.value = '';
    });
    
    // تحميل البطاقة كصورة
    downloadCardBtn.addEventListener('click', function() {
        const card = document.querySelector('.card');
        
        html2canvas(card, {
            allowTaint: true,
            useCORS: true,
            scale: 2
        }).then(function(canvas) {
            const link = document.createElement('a');
            link.download = 'eid_greeting_card.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
    
    // مشاركة على وسائل التواصل الاجتماعي
    shareFacebook.addEventListener('click', function() {
        shareCard('facebook');
    });
    
    shareTwitter.addEventListener('click', function() {
        shareCard('twitter');
    });
    
    shareWhatsapp.addEventListener('click', function() {
        shareCard('whatsapp');
    });
    
    shareTelegram.addEventListener('click', function() {
        shareCard('telegram');
    });
    
    // دالة للحصول على تهنئة عشوائية مع دمج الاسم في وسط التهنئة
    function getRandomGreeting(name) {
        const greetingTemplates = [
            `كل عام وأنت بخير يا ${name}، تقبل الله منا ومنكم صالح الأعمال`,
            `عيد أضحى مبارك يا ${name}، أعاده الله عليك باليمن والبركات`,
            `تقبل الله منك يا ${name}، وكل عام وأنت إلى الله أقرب`,
            `أسأل الله أن يتقبل طاعتك يا ${name} ويجعل أيامك كلها أعياد`,
            `عساك من عواده يا ${name}، وكل عام وأنت بألف خير`,
            `اللهم أهله على ${name} بالأمن والإيمان والسلامة والإسلام، عيد مبارك`,
            `أسأل الله العظيم رب العرش الكريم أن يجعل أيامك يا ${name} كلها سعادة وفرح`,
            `اللهم اجعل هذا العيد فرحة لقلب ${name}، وسعادة لروحه، وتقبل منه صالح الأعمال`,
            `اللهم بارك لنا ولـ ${name} في عيدنا هذا، واجعله عيد خير وبركة علينا وعلى المسلمين أجمعين`,
            `اللهم اجعل أيام ${name} كلها أعياد، وأدم عليه الصحة والعافية، عيد سعيد`
        ];
        
        const randomIndex = Math.floor(Math.random() * greetingTemplates.length);
        return greetingTemplates[randomIndex];
    }
    
    // دالة لإنشاء البالونات المتحركة
    function createBalloons() {
        for (let i = 0; i < 15; i++) { // تقليل عدد البالونات لتحسين الأداء
            const balloon = document.createElement('img');
            balloon.src = 'assets/images/new/balloon_transparent.png';
            balloon.alt = 'بالون العيد';
            balloon.classList.add('balloon');
            balloon.loading = "lazy"; // تحميل كسول للصور لتحسين الأداء
            
            // تعيين موقع عشوائي
            const randomLeft = Math.random() * 100;
            balloon.style.left = `${randomLeft}%`;
            
            // تعيين تأخير عشوائي
            const randomDelay = Math.random() * 15;
            balloon.style.animationDelay = `${randomDelay}s`;
            
            // تعيين حركة عشوائية
            balloon.style.setProperty('--random-move', Math.random() * 2 - 1);
            
            // تعيين حجم عشوائي
            const randomScale = 0.3 + Math.random() * 0.4;
            balloon.style.transform = `scale(${randomScale})`;
            
            backgroundContainer.appendChild(balloon);
        }
    }
    
    // دالة لإنشاء زخارف البطاقة
    function createCardDecorations() {
        const cardBalloons = document.querySelector('.card-balloons');
        cardBalloons.innerHTML = '';
        
        for (let i = 0; i < 5; i++) {
            const balloon = document.createElement('img');
            balloon.src = 'assets/images/new/balloon_transparent.png';
            balloon.alt = 'بالون العيد';
            balloon.classList.add('card-balloon');
            balloon.loading = "lazy"; // تحميل كسول للصور لتحسين الأداء
            
            // تعيين موقع عشوائي
            balloon.style.left = `${i * 40}px`;
            balloon.style.top = `${Math.random() * 30}px`;
            balloon.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${0.5 + Math.random() * 0.3})`;
            
            cardBalloons.appendChild(balloon);
        }
    }
    
    // دالة للمشاركة على وسائل التواصل الاجتماعي
    function shareCard(platform) {
        const text = `عيد أضحى مبارك! ${greetingText.textContent}`;
        const url = window.location.href;
        
        let shareUrl = '';
        
        switch (platform) {
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
                break;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
                break;
            case 'telegram':
                shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
                break;
        }
        
        window.open(shareUrl, '_blank');
    }
    
    // محاولة تشغيل الصوت تلقائياً (قد لا تعمل في بعض المتصفحات بسبب سياسات الأمان)
    takbirat.volume = 0.5;
    const playPromise = takbirat.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            console.log('تشغيل الصوت تلقائياً غير مسموح، يرجى النقر على زر التشغيل');
            audioIcon.classList.remove('fa-volume-up');
            audioIcon.classList.add('fa-volume-mute');
        });
    }
});
