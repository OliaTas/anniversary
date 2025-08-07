let isTurkish = false;

const translations = {
    tr: {
        title: "Aşk Hikayemiz",
        description: "Birlikte geçirdiğimiz 10 güzel yılı kutluyoruz. 2015'ten bugüne harika yolculuğumuza göz atalım.",
        journey: "Birlikte Yolculuğumuz",
        wedding: "Düğün Yılı",
        footer1: "10. yılımız için sevgiyle hazırlandı",
        footer2: "2015 - 2025 | Sonsuza dek birlikte",
        startBtn: "Aşk hikayemizi başlat",
        videoText: "Yıldönümü Videomuz",
        years: {
            "2015": "İlk tanışmamız ve aşık olduğumuz yıl.",
            "2016": "Kalplerimizi keşfettiğimiz yıl.",
            "2017": "Birbirimize daha çok bağlandık.",
            "2018": "Hayatımızın en güzel günü - düğünümüz!",
            "2019": "Evliliğimizin ilk yılı.",
            "2020": "Karantinayı birlikte atlattık.",
            "2021": "Zorlukları birlikte aştık.",
            "2022": "Yeni bir şehirde aşk hikayemiz devam etti.",
            "2023": "Hayat bize gerçek değerleri öğretti.",
            "2024": "Yeni başlangıçlar ve umutlarla dolu bir yıl.",
            "2025": "10. yılımız - sevgimiz güçlenerek devam ediyor."
        }
    }
};

document.getElementById("lang-switch").addEventListener("click", () => {
    isTurkish = !isTurkish;
    document.getElementById("lang-switch").innerText = isTurkish ? "EN" : "TR";

    if (isTurkish) {
        document.querySelector("h1").innerText = translations.tr.title;
        document.querySelector(".header-content p").innerText = translations.tr.description;
        document.querySelector("#start-love").innerText = translations.tr.startBtn;
        document.querySelector(".timeline-text").innerText = translations.tr.journey;
        document.querySelector(".video-text").innerText = translations.tr.videoText;
        document.querySelector("footer p:nth-child(1)").innerHTML = ` <span class="heart">❤️</span> ${translations.tr.footer1}`;
        document.querySelector("footer p:nth-child(2)").innerText = translations.tr.footer2;

        const yearElements = document.querySelectorAll(".year-content");
        yearElements.forEach((el) => {
            const year = el.querySelector("h3")?.innerText;
            if (translations.tr.years[year]) {
                el.querySelector("p").innerText = translations.tr.years[year];
            }

            if (el.classList.contains("wedding-year")) {
                el.querySelector(".wedding-badge").innerText = translations.tr.wedding;
            }
        });

    } else {
        // Перезагрузить страницу, чтобы вернуть оригинальные английские тексты
        location.reload();
    }
});



const playBtn = document.getElementById('custom-play-btn');
const video = document.getElementById('anniv-video');
const bgMusic = document.getElementById('bg-music');

// Клик по кнопке Play/Pause
playBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playBtn.style.display = 'none';
    } else {
        video.pause();
        playBtn.style.display = 'block';
    }
});

// Показ кнопки при остановке
video.addEventListener('pause', () => {
    playBtn.style.display = 'block';
});

// Скрытие кнопки при проигрывании
video.addEventListener('play', () => {
    playBtn.style.display = 'none';
});

// Кнопка "Click to begin our love story" — запускаем музыку
document.getElementById("start-love").addEventListener("click", function (e) {
    e.preventDefault();
    bgMusic.volume = 0.3;
    bgMusic.play().catch(() => {
        console.log("Музыка не запущена — пользователь не дал разрешение.");
    });

    // Плавный скролл вниз
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
});

// Кнопка Start для видео
document.getElementById("start-button").addEventListener("click", function () {
    document.getElementById("start-button-container").style.display = "none";
    document.getElementById("video-wrapper").style.display = "block";
});

// Остановить фоновую музыку при запуске видео
video.addEventListener('play', () => {
    if (!bgMusic.paused) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }
});
