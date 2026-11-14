
// =====================================
// OUR LUCK ❤️
// 50 Decisions Together
// =====================================


// 50 QUESTIONS WITH 3 OPTIONS EACH

const questions = [

    // WHERE TO GO (1-5)
    {
        q: "Where should we go? 🌍",
        options: [
            ["🏖️", "Cox's Bazar"],
            ["🏔️", "Sajek Valley"],
            ["🌄", "Bandarban"]
        ]
    },
    {
        q: "Which place for our next date? 💕",
        options: [
            ["🌳", "A Beautiful Park"],
            ["🛍️", "Shopping Mall"],
            ["🌅", "Rooftop Restaurant"]
        ]
    },
    {
        q: "Where should we spend our evening? 🌆",
        options: [
            ["🌊", "Beside the Lake"],
            ["🏖️", "Sea Beach"],
            ["☕", "Cozy Coffee Shop"]
        ]
    },
    {
        q: "Our weekend destination? 🚗",
        options: [
            ["🌲", "Mountain Resort"],
            ["🏨", "Luxury Hotel"],
            ["🌿", "Green Village"]
        ]
    },
    {
        q: "What kind of date do we want? 💗",
        options: [
            ["🎬", "Movie Date"],
            ["🎡", "Fun Park Date"],
            ["🍽️", "Dinner Date"]
        ]
    },

    // RESTAURANT (6-10)
    {
        q: "Which restaurant should we visit? 🍴",
        options: [
            ["🍕", "Pizza Restaurant"],
            ["🍗", "Kacchi Restaurant"],
            ["🍔", "Burger Restaurant"]
        ]
    },
    {
        q: "Where should we have dinner? 🌙",
        options: [
            ["🌃", "Rooftop Restaurant"],
            ["🌸", "Garden Cafe"],
            ["🏡", "Cozy Family Restaurant"]
        ]
    },
    {
        q: "What type of restaurant? 😋",
        options: [
            ["🇮🇹", "Italian Restaurant"],
            ["🇨🇳", "Chinese Restaurant"],
            ["🇯🇵", "Japanese Restaurant"]
        ]
    },
    {
        q: "Our next food adventure? 🍽️",
        options: [
            ["🌶️", "Spicy Food Restaurant"],
            ["🍗", "BBQ Restaurant"],
            ["🍝", "Pasta Restaurant"]
        ]
    },
    {
        q: "Which place sounds romantic? ❤️",
        options: [
            ["🕯️", "Candle Light Dinner"],
            ["🌇", "Rooftop Dinner"],
            ["🌷", "Garden Cafe"]
        ]
    },

    // FOOD (11-15)
    {
        q: "What should we eat? 🍕",
        options: [
            ["🍕", "Pizza"],
            ["🍔", "Burger"],
            ["🍝", "Pasta"]
        ]
    },
    {
        q: "Choose our lunch! 🍛",
        options: [
            ["🍚", "Kacchi Biriyani"],
            ["🍗", "Fried Chicken"],
            ["🍜", "Noodles"]
        ]
    },
    {
        q: "What should we order together? 🥰",
        options: [
            ["🍟", "French Fries"],
            ["🌮", "Tacos"],
            ["🍗", "Chicken Wings"]
        ]
    },
    {
        q: "Sweet treat time! 🍰",
        options: [
            ["🍦", "Ice Cream"],
            ["🍫", "Chocolate Cake"],
            ["🍩", "Donuts"]
        ]
    },
    {
        q: "What should we drink? 🥤",
        options: [
            ["☕", "Cold Coffee"],
            ["🥤", "Milkshake"],
            ["🍹", "Fresh Juice"]
        ]
    },

    // ACTIVITIES (16-20)
    {
        q: "What should we do together? 🎮",
        options: [
            ["🎮", "Play Games"],
            ["🎬", "Watch a Movie"],
            ["📸", "Take Pictures"]
        ]
    },
    {
        q: "Choose our fun activity! 😂",
        options: [
            ["🎳", "Bowling"],
            ["🎯", "Arcade Games"],
            ["🎤", "Karaoke"]
        ]
    },
    {
        q: "How should we spend our afternoon? 🌸",
        options: [
            ["🚶", "Long Walk"],
            ["🛍️", "Shopping"],
            ["☕", "Coffee Date"]
        ]
    },
    {
        q: "Which adventure sounds better? 🎢",
        options: [
            ["🎡", "Amusement Park"],
            ["🚤", "Boat Ride"],
            ["🚗", "Long Drive"]
        ]
    },
    {
        q: "Our evening plan? 🌙",
        options: [
            ["🌆", "Watch Sunset"],
            ["🎥", "Movie Night"],
            ["🌃", "Night Walk"]
        ]
    },

    // ROMANTIC MOMENTS (21-25)
    {
        q: "Choose our romantic moment! ❤️",
        options: [
            ["🤗", "A Long Hug"],
            ["💋", "A Sweet Kiss"],
            ["🤝", "Holding Hands"]
        ]
    },
    {
        q: "What should I give you? 🎁",
        options: [
            ["💐", "Beautiful Flowers"],
            ["💌", "Love Letter"],
            ["🧸", "Cute Teddy Bear"]
        ]
    },
    {
        q: "Which romantic surprise? 💗",
        options: [
            ["🌹", "Rose Surprise"],
            ["🍫", "Chocolate Surprise"],
            ["🎂", "Birthday Style Cake"]
        ]
    },
    {
        q: "How should we remember today? 📸",
        options: [
            ["📷", "Cute Photos"],
            ["🎥", "A Couple Video"],
            ["📝", "A Memory Note"]
        ]
    },
    {
        q: "Our private couple time? 💕",
        options: [
            ["💞", "Cuddle Together"],
            ["💋", "Kiss and Romance"],
            ["🕯️", "Private Romantic Time (Only If Both Comfortable)"]
        ]
    },

    // FUNNY COUPLE CHALLENGES (26-30)
    {
        q: "Who is more crazy? 😂",
        options: [
            ["🤪", "Mahin"],
            ["😜", "Eva"],
            ["🤣", "Both of Us"]
        ]
    },
    {
        q: "Who should say sorry first? 😆",
        options: [
            ["🙋", "Mahin"],
            ["🙋‍♀️", "Eva"],
            ["💑", "Whoever Is Wrong"]
        ]
    },
    {
        q: "Who takes more selfies? 🤳",
        options: [
            ["📱", "Mahin"],
            ["💅", "Eva"],
            ["😂", "Both"]
        ]
    },
    {
        q: "Who is the bigger foodie? 🍔",
        options: [
            ["🍕", "Mahin"],
            ["🍰", "Eva"],
            ["🍟", "Both"]
        ]
    },
    {
        q: "Who will win in Ludo? 🎲",
        options: [
            ["👦", "Mahin"],
            ["👧", "Eva"],
            ["🤝", "No One Knows!"]
        ]
    },

    // FUTURE DREAMS (31-35)
    {
        q: "Our dream international trip? ✈️",
        options: [
            ["🇲🇻", "Maldives"],
            ["🇹🇷", "Turkey"],
            ["🇨🇭", "Switzerland"]
        ]
    },
    {
        q: "Where should we go in Bangladesh? 🇧🇩",
        options: [
            ["🌊", "Cox's Bazar"],
            ["⛰️", "Sajek"],
            ["🌿", "Sylhet"]
        ]
    },
    {
        q: "Our dream holiday? 🌍",
        options: [
            ["❄️", "Snowy Mountains"],
            ["🏝️", "Tropical Island"],
            ["🌆", "Beautiful City"]
        ]
    },
    {
        q: "Our dream home? 🏡",
        options: [
            ["🏠", "Cozy Little House"],
            ["🏡", "House With Garden"],
            ["🏙️", "Modern Apartment"]
        ]
    },
    {
        q: "What should we plan next? 💫",
        options: [
            ["✈️", "A Big Trip"],
            ["💍", "Our Future Together"],
            ["🏡", "Dream Home"]
        ]
    },

    // MIDNIGHT FUN (36-40)
    {
        q: "What should we do at midnight? 🌙",
        options: [
            ["🎬", "Watch a Movie"],
            ["💬", "Long Conversation"],
            ["🎮", "Play a Game"]
        ]
    },
    {
        q: "Our late-night snack? 🍟",
        options: [
            ["🍜", "Noodles"],
            ["🍕", "Pizza"],
            ["🍫", "Chocolate"]
        ]
    },
    {
        q: "What should we do on a rainy night? 🌧️",
        options: [
            ["☕", "Drink Coffee"],
            ["🎬", "Watch a Movie"],
            ["💞", "Cuddle and Talk"]
        ]
    },
    {
        q: "Choose our midnight fun! 😂",
        options: [
            ["🎲", "Truth or Dare"],
            ["📞", "Funny Phone Call"],
            ["🎤", "Sing Together"]
        ]
    },
    {
        q: "How should we end our night? 🌙",
        options: [
            ["💌", "Sweet Love Message"],
            ["📞", "Sleep on Call"],
            ["💋", "Goodnight Kiss"]
        ]
    },

    // WHO WILL DO IT (41-45)
    {
        q: "Who will plan our next date? 💗",
        options: [
            ["👦", "Mahin"],
            ["👧", "Eva"],
            ["💑", "Plan Together"]
        ]
    },
    {
        q: "Who will choose our outfits? 👗",
        options: [
            ["👔", "Mahin"],
            ["👗", "Eva"],
            ["💕", "Choose Together"]
        ]
    },
    {
        q: "Who will take care of the food order? 🍔",
        options: [
            ["🍕", "Mahin"],
            ["🍟", "Eva"],
            ["🤝", "Order Together"]
        ]
    },
    {
        q: "Who will give the next surprise? 🎁",
        options: [
            ["🎀", "Mahin"],
            ["💝", "Eva"],
            ["💞", "Both"]
        ]
    },
    {
        q: "Who will miss the other more? 🥺",
        options: [
            ["❤️", "Mahin"],
            ["💗", "Eva"],
            ["💑", "Both Equally"]
        ]
    },

    // SPECIAL DECISIONS (46-50)
    {
        q: "Choose our next special date! 💕",
        options: [
            ["🌹", "Romantic Dinner"],
            ["🏖️", "Beach Date"],
            ["🌃", "Night City Tour"]
        ]
    },
    {
        q: "What should our next gift be? 🎁",
        options: [
            ["⌚", "Matching Watches"],
            ["💍", "Matching Rings"],
            ["🧸", "Cute Couple Gifts"]
        ]
    },
    {
        q: "What should we do on our next holiday? 🌸",
        options: [
            ["🚗", "Road Trip"],
            ["🏨", "Hotel Staycation"],
            ["🌳", "Nature Adventure"]
        ]
    },
    {
        q: "What should we remember forever? 💖",
        options: [
            ["📸", "Our First Photo"],
            ["💌", "Our First Love Letter"],
            ["🌹", "Our Special Moment"]
        ]
    },
    {
        q: "One last question... What matters most? ❤️",
        options: [
            ["🌍", "Every Adventure Together"],
            ["💕", "Every Little Moment"],
            ["💗", "Having Each Other"]
        ]
    }

];


// GAME VARIABLES

let currentQuestion = 0;
let selectedBox = false;


// ELEMENTS

const welcomePage = document.getElementById("welcomePage");
const gamePage = document.getElementById("gamePage");
const finalPage = document.getElementById("finalPage");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const questionText = document.getElementById("questionText");
const questionHint = document.getElementById("questionHint");

const roundText = document.getElementById("roundText");
const progressPercent = document.getElementById("progressPercent");
const progressBar = document.getElementById("progressBar");

const boxArea = document.getElementById("boxArea");
const chooseNote = document.getElementById("chooseNote");

const resultCard = document.getElementById("resultCard");
const resultEmoji = document.getElementById("resultEmoji");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");


// SHUFFLE OPTIONS RANDOMLY

function shuffleOptions(options) {

    const shuffled = [...options];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[j]] =
        [shuffled[j], shuffled[i]];

    }

    return shuffled;
}


// START GAME

startBtn.addEventListener("click", function () {

    currentQuestion = 0;

    welcomePage.classList.remove("active");
    gamePage.classList.add("active");

    loadQuestion();

});


// LOAD QUESTION

function loadQuestion() {

    selectedBox = false;

    const question = questions[currentQuestion];

    questionText.textContent = question.q;

    questionHint.textContent = "Choose one mystery box!";

    // Progress

    const round = currentQuestion + 1;

    roundText.textContent =
        `QUESTION ${String(round).padStart(2, "0")} / 50`;

    const percent = Math.round((round / questions.length) * 100);

    progressPercent.textContent = percent + "%";

    progressBar.style.width = percent + "%";


    // Reset result

    resultCard.classList.add("hidden");

    boxArea.style.display = "grid";

    chooseNote.style.display = "block";


    // Shuffle three options

    const shuffled = shuffleOptions(question.options);

    // Create three boxes

    boxArea.innerHTML = "";

    shuffled.forEach(function (option, index) {

        const button = document.createElement("button");

        button.className = "mystery-box";

        button.innerHTML = `
            <span class="box-emoji">🎁</span>
            <span class="box-name">BOX 0${index + 1}</span>
            <span class="box-subtitle">Open Me</span>
        `;

        button.addEventListener("click", function () {

            openBox(button, option);

        });

        boxArea.appendChild(button);

    });

}


// OPEN SELECTED BOX

function openBox(button, option) {

    // Prevent multiple selections

    if (selectedBox) {
        return;
    }

    selectedBox = true;

    // Disable all boxes

    const allBoxes = document.querySelectorAll(".mystery-box");

    allBoxes.forEach(function (box) {

        box.disabled = true;

    });


    // Show selected box

    button.classList.add("opened");

    button.querySelector(".box-emoji").textContent = "🎉";

    button.querySelector(".box-subtitle").textContent = "Selected!";


    // Hide other boxes

    allBoxes.forEach(function (box) {

        if (box !== button) {

            box.style.opacity = "0.25";

        }

    });


    // Show result

    boxArea.style.display = "none";

    chooseNote.style.display = "none";

    resultCard.classList.remove("hidden");


    resultEmoji.textContent = option[0];

    resultTitle.textContent = option[1];

    resultDescription.textContent =
        "Destiny has made its choice! Let's enjoy this little surprise together. ❤️";


    // Last question button

    if (currentQuestion === questions.length - 1) {

        nextBtn.textContent = "Finish Our Journey ❤️";

    } else {

        nextBtn.textContent = "OK, Next Question 💗";

    }

}


// NEXT QUESTION

nextBtn.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        gamePage.classList.remove("active");

        finalPage.classList.add("active");

    }

});


// RESTART GAME

restartBtn.addEventListener("click", function () {

    currentQuestion = 0;

    finalPage.classList.remove("active");

    welcomePage.classList.add("active");

});


// FLOATING HEART ANIMATION

const heartsContainer = document.getElementById("hearts");

const heartEmojis = ["💗", "💕", "💖", "🌸", "💞"];

function createHeart() {

    const heart = document.createElement("span");

    heart.className = "heart";

    heart.textContent =
        heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

    heart.style.left = Math.random() * 100 + "%";

    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    heart.style.fontSize =
        (12 + Math.random() * 15) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(function () {

        heart.remove();

    }, 11000);

}

setInterval(createHeart, 700);
