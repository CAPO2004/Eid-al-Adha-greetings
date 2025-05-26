import eidGreetings from './greetings.js';

document.addEventListener('DOMContentLoaded', function() {
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

    currentYear.textContent = new Date().getFullYear();
    takbirat.src = 'assets/takbirat.ogg';
    createBalloons();

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

    newCardBtn.addEventListener('click', function() {
        greetingCard.classList.add('hidden');
        greetingForm.classList.remove('hidden');
        nameInput.value = '';
    });

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

    // Countdown Timer Logic
    function startCountdown() {
        const eidDate = new Date('June 6, 2025 00:00:00').getTime();
        const timerInterval = setInterval(function() {
            const now = new Date().getTime();
            const distance = eidDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

            if (distance < 0) {
                clearInterval(timerInterval);
                document.getElementById('timer').innerHTML = '<p>عيد أضحى مبارك! لقد بدأ العيد!</p>';
            }
        }, 1000);
    }

    startCountdown();

    function getRandomGreeting(name) {
        const greetingTemplates = [
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
        ];
        const randomIndex = Math.floor(Math.random() * greetingTemplates.length);
        return greetingTemplates[randomIndex];
    }

    function createBalloons() {
        for (let i = 0; i < 15; i++) {
            const balloon = document.createElement('img');
            balloon.src = 'assets/images/new/balloon_transparent.png';
            balloon.alt = 'بالون العيد';
            balloon.classList.add('balloon');
            balloon.loading = "lazy";
            const randomLeft = Math.random() * 100;
            balloon.style.left = `${randomLeft}%`;
            const randomDelay = Math.random() * 15;
            balloon.style.animationDelay = `${randomDelay}s`;
            balloon.style.setProperty('--random-move', Math.random() * 2 - 1);
            const randomScale = 0.3 + Math.random() * 0.4;
            balloon.style.transform = `scale(${randomScale})`;
            backgroundContainer.appendChild(balloon);
        }
    }

    function createCardDecorations() {
        const cardBalloons = document.querySelector('.card-balloons');
        cardBalloons.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            const balloon = document.createElement('img');
            balloon.src = 'assets/images/new/balloon_transparent.png';
            balloon.alt = 'بالون العيد';
            balloon.classList.add('card-balloon');
            balloon.loading = "lazy";
            balloon.style.left = `${i * 40}px`;
            balloon.style.top = `${Math.random() * 30}px`;
            balloon.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(${0.5 + Math.random() * 0.3})`;
            cardBalloons.appendChild(balloon);
        }
    }

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
