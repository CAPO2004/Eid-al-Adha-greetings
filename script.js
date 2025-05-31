// تهاني عيد الأضحى المتنوعة
const eidGreetings = [
            // 🕌 دينية
    `كل عام وأنت بخير يا ${name}، تقبل الله منا ومنكم صالح الأعمال`,
    `عيدك طاعة وقرب من الرحمن يا ${name} 🌙`,
    `اللهم اجعل هذا العيد فرحة لقلب ${name}، وسعادة لروحه، وتقبل منه صالح الأعمال`,
    `عيد أضحى مبارك يا ${name}، أعاده الله عليك بالخير واليمن والبركات`,
    `تقبل الله طاعتك يا ${name}، ورفع قدرك، وأكرمك بجناته`,
    `اللهم أهله على ${name} بالأمن والإيمان والسلامة والإسلام، عيد مبارك`,
    `أسأل الله أن يجعلك من السعداء في الدنيا والآخرة يا ${name}، عيد سعيد`,
    `يا ${name}، جعلك الله من الفائزين برحمته وغفرانه في هذا العيد 🕋`,
    `اللهم اجعل عيد ${name} نور ورضا وبركة في حياته كلها`,
    `عيد مبارك يا ${name}، واسأل الله أن يجعلك من المقبولين والمغفور لهم`,
        
        // 😂 مضحكة وخفيفة دم
    `يا ${name}، كل سنة وانت طيب... ووزنك ثابت بعد اللحم 😜`,
    `${name}، خروف العيد بيسلّم عليك وبيقولك شوف غيري المرة الجاية 🐏😂`,
    `عيدك لحمة يا ${name}، بس بالله اوعى تاكل الخروف كله لوحدك 🥩`,
    `${name}، العيد من غير تهنئة منك زيه زي خروف مالوش ديل 🐑😅`,
    `يا ${name}، لو شوفت خروف بيجري... اعرف إني أنا 😭`,
    `${name}، خروف العيد متخبي من عندك... بلغ عنه لو شفته 😂`,
    `عيد سعيد يا حبيب قلبي ${name}، ويا رب تاكل لحمة كتير بس متكلمنيش من الكولسترول 🐮`,
    `يا ${name}، افتكرني وانت بتاكل اللحمة... عالأقل بعتلي ريحة الشوي 🥲`,
    `يا ${name}، العيد من غير لمة مالوش طعم... ولا لحمة 😂`,
    `${name}، كل سنة وانت طيب، وكرشك مرتاح من اللحمة 🤰`,

        // 💌 عامة ولطيفة
    `عيدك سعيد يا ${name}، مليان فرحة ورضا وراحة بال 🎈`,
    `يا ${name}، عيدك بهجة وسعادة ما تنتهيش ✨`,
    `كل سنة وانت بخير يا ${name}، والعيد جايبلك معاه الفرح والهدايا 🎁`,
    `${name}، عيدك كله حب وأمل وسلام داخلي 🕊️`,
    `أجمل تهنئة بالعيد ليك يا ${name}، وربنا يحققلك كل اللي نفسك فيه`,
    `عيدك عسل يا ${name}، وقلبي بيدعيلك دايمًا بالسعادة 🍯`,
    `العيد مش عيد من غيرك يا ${name}، كل سنة وانت طيب`,
    `أجمل تهنئة لأغلى الناس ${name}، ربنا يسعدك`,
    `${name}، يا رب دايمًا تكون بخير وسعادة وفرح`,
    `كل عيد وانت أجمل وأطيب وأحن ${name} في الدنيا 💛`,
    `يا ${name}، ربنا يباركلك في صحتك وعمرك، ويخليلك اللي بتحبهم دايمًا جنبك`,
    `أحلى عيد على أحلى ${name}، كل سنة وانت في أفضل حال`,
    `بمناسبة العيد، يا ${name} ربنا يرزقك الخير كله ويكفيك شر كله`,
    `يا ${name}، ربنا يكتبلك أعياد جاية أجمل وأجمل 🌟`,
    `إلى الغالي ${name}، عيدك فرحة ما تنتهيش إن شاء الله`,
    `يا ${name}، لو العيد فرحة، فإنت العيد كله بوجودك في حياتنا 😊`
    "كل عام وأنتم بخير، أعاده الله عليكم باليمن والبركات",
    "تقبل الله منا ومنكم صالح الأعمال وكل عام وأنتم بخير",
    "أسأل الله أن يتقبل طاعتكم ويجعلكم من عتقائه من النار",
    "عيد أضحى مبارك، أعاده الله علينا وعليكم بالخير واليمن والبركات",
    "أهنئكم بعيد الأضحى المبارك، جعله الله عيداً سعيداً عليكم",
    "عساكم من عواده، وكل عام وأنتم بألف خير",
    "أسأل الله أن يجعل أيامكم كلها أعياد وسعادة",
    "عيد سعيد وأيام مباركة مليئة بالفرح والسرور",
    "أسأل الله أن يجعل عيدكم مبارك وأيامكم سعيدة",
    "مع إشراقة عيد الأضحى نتمنى لكم أياماً مليئة بالفرح والسعادة",
    "عيد أضحى مبارك، أعاده الله عليكم بالصحة والعافية",
    "كل عام وأنتم إلى الله أقرب، وبالخير أسعد",
    "أسأل الله أن يجعل أيام العيد أيام فرح وسرور عليكم",
    "عيد مبارك، وعساكم من عواده",
    "أسأل الله أن يتقبل منا ومنكم صالح الأعمال، وكل عام وأنتم بخير",
    "مع قدوم العيد، نسأل الله أن يديم عليكم الصحة والعافية",
    "عيد أضحى مبارك، أعاده الله علينا وعليكم بالخير والبركة",
    "أسأل الله أن يجعل أيامكم كلها سعادة وهناء",
    "كل عام وأنتم بألف خير، وعيد أضحى مبارك",
    "عيد سعيد وأيام مباركة مليئة بالخير والبركة",
    "أسأل الله أن يجعل عيدكم سعيداً وأيامكم مباركة",
    "مع إشراقة عيد الأضحى المبارك، نتمنى لكم أياماً مليئة بالفرح والسرور",
    "عيد أضحى مبارك، أعاده الله عليكم بالصحة والعافية والسعادة",
    "كل عام وأنتم إلى الله أقرب، وبالخير أسعد، وللجنة أقرب",
    "أسأل الله أن يجعل أيام العيد أيام فرح وسرور وسعادة عليكم",
    "عيد مبارك، وعساكم من عواده، وكل عام وأنتم بألف خير",
    "أسأل الله أن يتقبل منا ومنكم صالح الأعمال، وكل عام وأنتم بخير وسعادة",
    "مع قدوم العيد، نسأل الله أن يديم عليكم الصحة والعافية والسعادة",
    "عيد أضحى مبارك، أعاده الله علينا وعليكم بالخير والبركة والسعادة",
    "أسأل الله أن يجعل أيامكم كلها سعادة وهناء وفرح"
];

// دالة لدمج الاسم في التهنئة
function getRandomGreeting(name) {
    const randomIndex = Math.floor(Math.random() * eidGreetings.length);
    let greeting = eidGreetings[randomIndex];
    
    // إضافة الاسم في وسط التهنئة
    if (name) {
        // تقسيم التهنئة إلى جزئين تقريباً
        const middleIndex = Math.floor(greeting.length / 2);
        let firstPart = greeting.substring(0, middleIndex);
        let secondPart = greeting.substring(middleIndex);
        
        // البحث عن نقطة مناسبة للإضافة (فاصلة أو نقطة)
        const commaIndex = firstPart.lastIndexOf('،');
        const periodIndex = firstPart.lastIndexOf('.');
        
        let insertIndex = -1;
        if (commaIndex > periodIndex && commaIndex !== -1) {
            insertIndex = commaIndex + 1;
        } else if (periodIndex !== -1) {
            insertIndex = periodIndex + 1;
        }
        
        if (insertIndex !== -1) {
            // إضافة الاسم بعد الفاصلة أو النقطة
            greeting = firstPart.substring(0, insertIndex) + ` يا ${name}` + firstPart.substring(insertIndex) + secondPart;
        } else {
            // إذا لم نجد فاصلة أو نقطة، نضيف في النهاية
            greeting = `${greeting} يا ${name}`;
        }
    }
    
    return greeting;
}

document.addEventListener('DOMContentLoaded', function() {
    // تعريف العناصر
    const body = document.body;
    const themeButton = document.getElementById('theme-button');
    const themeIcon = themeButton.querySelector('i');
    const audioButton = document.getElementById('audio-button');
    const audioIcon = audioButton.querySelector('i');
    const takbirat = document.getElementById('takbirat');
    const nameInput = document.getElementById('name');
    const generateCardBtn = document.getElementById('generate-card');
    const greetingForm = document.getElementById('greeting-form');
    const greetingCard = document.getElementById('greeting-card');
    const greetingText = document.getElementById('greeting-text');
    const recipientName = document.getElementById('recipient-name');
    const newCardBtn = document.getElementById('new-card');
    const downloadCardBtn = document.getElementById('download-card');
    const shareFacebook = document.getElementById('share-facebook');
    const shareTwitter = document.getElementById('share-twitter');
    const shareWhatsapp = document.getElementById('share-whatsapp');
    const shareTelegram = document.getElementById('share-telegram');
    const copyLinkBtn = document.getElementById('copy-link');
    const shareLink = document.getElementById('share-link');
    const currentYearSpan = document.getElementById('current-year');
    
    // عناصر العداد التنازلي
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    
    // تحديث السنة الحالية
    currentYearSpan.textContent = new Date().getFullYear();
    
    // التحقق من وجود اسم المرسل في الرابط
    const urlParams = new URLSearchParams(window.location.search);
    const senderName = urlParams.get('sender');
    
    // إذا كان هناك اسم مرسل، عرض رسالة ترحيبية
    if (senderName) {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.className = 'welcome-message';
        welcomeMessage.innerHTML = `<p>لقد تلقيت تهنئة بعيد الأضحى من <strong>${senderName}</strong></p>`;
        document.querySelector('.content').prepend(welcomeMessage);
        
        // إخفاء نموذج الإدخال وإظهار بطاقة التهنئة تلقائياً
        setTimeout(() => {
            const name = senderName;
            const randomGreeting = getRandomGreeting(name);
            greetingText.textContent = randomGreeting;
            recipientName.textContent = '';
            greetingForm.classList.add('hidden');
            greetingCard.classList.remove('hidden');
            createCardDecorations();
        }, 1500);
    }
    
    // تنفيذ العداد التنازلي
    const eidDate = new Date('June 6, 2025 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eidDate - now;
        
        // حساب الأيام والساعات والدقائق والثواني
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // تحديث العناصر
        daysElement.textContent = days < 10 ? `0${days}` : days;
        hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
        minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
        secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }
    
    // تحديث العداد كل ثانية
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // دالة لإنشاء البالونات المتحركة
    function createBalloons() {
        const balloonsContainer = document.querySelector('.balloons-container');
        const numBalloons = 10;
        
        for (let i = 0; i < numBalloons; i++) {
            const balloon = document.createElement('img');
            balloon.src = 'assets/balloon.png';
            balloon.alt = 'بالون';
            balloon.className = 'balloon';
            balloon.style.setProperty('--random-move', Math.random() * 2 - 1);
            balloon.style.left = `${Math.random() * 100}%`;
            balloon.style.animationDelay = `${Math.random() * 5}s`;
            balloonsContainer.appendChild(balloon);
        }
    }
    
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
        
        const randomGreeting = getRandomGreeting(name);
        greetingText.textContent = randomGreeting;
        recipientName.textContent = '';
        
        greetingForm.classList.add('hidden');
        greetingCard.classList.remove('hidden');
        
        createCardDecorations();
    });
    
    // دالة لإنشاء زخارف البطاقة
    function createCardDecorations() {
        const cardBalloons = document.querySelector('.card-balloons');
        cardBalloons.innerHTML = '';
        
        // إضافة المزيد من البالونات بأحجام وألوان مختلفة
        for (let i = 0; i < 15; i++) {
            const balloon = document.createElement('img');
            balloon.src = 'assets/balloon.png';
            balloon.alt = 'بالون';
            balloon.className = 'card-balloon';
            
            // توزيع البالونات في مناطق مختلفة من البطاقة
            let topPosition, leftPosition;
            
            // تقسيم البطاقة إلى مناطق لضمان توزيع أفضل
            if (i < 5) {
                // المنطقة العلوية
                topPosition = Math.random() * 30;
                leftPosition = Math.random() * 100;
            } else if (i < 10) {
                // المنطقة الوسطى
                topPosition = 30 + Math.random() * 40;
                leftPosition = Math.random() * 100;
            } else {
                // المنطقة السفلية
                topPosition = 70 + Math.random() * 30;
                leftPosition = Math.random() * 100;
            }
            
            balloon.style.top = `${topPosition}%`;
            balloon.style.left = `${leftPosition}%`;
            balloon.style.transform = `scale(${0.4 + Math.random() * 0.6}) rotate(${Math.random() * 20 - 10}deg)`;
            balloon.style.opacity = 0.7 + Math.random() * 0.3;
            balloon.style.animationDelay = `${Math.random() * 2}s`;
            balloon.style.animationDuration = `${3 + Math.random() * 4}s`;
            cardBalloons.appendChild(balloon);
        }
        
        // إضافة نجوم وزخارف إضافية
        for (let i = 0; i < 8; i++) {
            const star = document.createElement('div');
            star.className = 'card-star';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 3}s`;
            cardBalloons.appendChild(star);
        }
    }
    
    // العودة إلى نموذج الإدخال
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
    
    // دالة للمشاركة على وسائل التواصل الاجتماعي
    function shareCard(platform) {
        const name = nameInput.value.trim() || 'صديق';
        const currentUrl = window.location.href.split('?')[0];
        const shareUrl = `${currentUrl}?sender=${encodeURIComponent(name)}`;
        
        // الحصول على نص التهنئة من البطاقة
        const greetingMessage = greetingText.textContent;
        const shareMessage = `${greetingMessage} - تهنئة عيد الأضحى المبارك ${shareUrl}`;
        
        let shareWindow;
        
        switch (platform) {
            case 'facebook':
                shareWindow = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(greetingMessage)}`;
                break;
            case 'twitter':
                shareWindow = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(greetingMessage)}`;
                break;
            case 'whatsapp':
                shareWindow = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
                break;
            case 'telegram':
                shareWindow = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(greetingMessage)}`;
                break;
        }
        
        window.open(shareWindow, '_blank', 'width=600,height=400');
        
        // عرض رابط المشاركة
        if (shareLink) {
            shareLink.value = shareMessage;
            shareLink.parentElement.parentElement.classList.remove('hidden');
        }
    }
    
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
    
    // نسخ رابط المشاركة
    if (copyLinkBtn) {
        copyLinkBtn.addEventListener('click', function() {
            if (shareLink) {
                shareLink.select();
                document.execCommand('copy');
                alert('تم نسخ الرابط بنجاح!');
            }
        });
    }
    
    // زر المشاركة الجديد
    const shareButton = document.getElementById('share-button');
    if (shareButton) {
        shareButton.addEventListener('click', function() {
            const linkContainer = document.querySelector('.share-link-container');
            if (linkContainer) {
                linkContainer.classList.toggle('hidden');
                
                // إنشاء رابط المشاركة إذا لم يكن موجوداً
                if (!shareLink.value) {
                    const name = nameInput.value.trim() || 'صديق';
                    const currentUrl = window.location.href.split('?')[0];
                    const shareUrl = `${currentUrl}?sender=${encodeURIComponent(name)}`;
                    const greetingMessage = greetingText.textContent;
                    const shareMessage = `${greetingMessage} - تهنئة عيد الأضحى المبارك ${shareUrl}`;
                    shareLink.value = shareMessage;
                }
            }
        });
    }
    
    // تشغيل التكبيرات بصوت منخفض
    takbirat.volume = 0.5;
    
    // محاولة تشغيل الصوت تلقائياً (قد لا تعمل في بعض المتصفحات)
    const playPromise = takbirat.play();
    
    if (playPromise !== undefined) {
        playPromise.catch(function(error) {
            console.log('تشغيل الصوت تلقائياً غير مسموح، يرجى النقر على زر التشغيل');
            audioIcon.classList.remove('fa-volume-up');
            audioIcon.classList.add('fa-volume-mute');
        });
    }
});
