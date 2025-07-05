// Light/Dark mode toggle
const modeToggle = document.querySelector(".mode-toggle");
const body = document.body;

function setMode(mode) {
  if (mode === "dark") {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    modeToggle.textContent = "🌙";
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    modeToggle.textContent = "☀️";
  }
}

modeToggle.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-mode");
  setMode(isDark ? "dark" : "light");
});

// On load, set theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) setMode(savedTheme);

// Language switch (EN/BM)
const langSwitch = document.querySelector(".lang-switch");
let currentLang = localStorage.getItem("lang") || "EN";

function setLang(lang) {
  currentLang = lang;
  langSwitch.textContent = lang === "EN" ? "EN/BM" : "BM/EN";
  localStorage.setItem("lang", lang);
}

langSwitch.addEventListener("click", () => {
  setLang(currentLang === "EN" ? "BM" : "EN");
  // You can call updateLanguage here if you have it
});

// --- Language Switcher with UI Translation ---
const translations = {
  en: {
    home: {
      hero: "Start Your AI Journey to Health",
      slogan: "Hidup Sihat Hidup Ceria",
      cta: "Bina Plan Makan Anda Sekarang",
      features: "Features",
      chatbot: "Gemini AI Chatbot",
      mealAnalysis: "AI Meal Analysis",
      mealPlanner: "AI Meal Planner",
      grocery: "Smart Grocery List",
      calculator: "BMI & Kcal Calculator",
      dashboard: "Health Dashboard",
      halal: "Halal/Ramadan Mode",
      about: "About",
      contact: "Contact",
      privacy: "Privacy",
    },
    chatbot: {
      title: "GoSihatAI Chatbot",
      input: "Type your question...",
    },
    mealPlanner: {
      title: "Meal Planner",
      weight: "Your Weight Goal (kg)",
      goal: "Goal",
      foodPref: "Food Preferences",
      generate: "Generate Meal Plan",
      plan: "Your Sample Meal Plan",
      grocery: "Generate Grocery List",
      modalTitle: "Grocery List",
      print: "Print",
    },
    dashboard: {
      title: "Health Dashboard",
      progress: "Your Progress",
      habits: "Habits Tracker",
      report: "Monthly Report",
    },
    calculator: {
      title: "BMI & Kcal Calculator",
      bmi: "BMI Calculator",
      height: "Height (cm)",
      weight: "Weight (kg)",
      calcBMI: "Calculate BMI",
      tdee: "TDEE Calculator",
      age: "Age",
      gender: "Gender",
      male: "Male",
      female: "Female",
      activity: "Activity Level",
      calcTDEE: "Calculate TDEE",
      kcal: "Food Kcal Analyzer",
      food: "Food Name / Description",
      analyze: "Analyze",
    },
  },
  bm: {
    home: {
      hero: "Mulakan Perjalanan AI Anda ke Arah Sihat",
      slogan: "Hidup Sihat Hidup Ceria",
      cta: "Bina Plan Makan Anda Sekarang",
      features: "Ciri-ciri",
      chatbot: "Chatbot AI Gemini",
      mealAnalysis: "Analisis Makanan AI",
      mealPlanner: "Perancang Makanan AI",
      grocery: "Senarai Beli-belah Pintar",
      calculator: "Kalkulator BMI & Kcal",
      dashboard: "Papan Pemuka Kesihatan",
      halal: "Mod Halal/Ramadan",
      about: "Tentang",
      contact: "Hubungi",
      privacy: "Privasi",
    },
    chatbot: {
      title: "Chatbot GoSihatAI",
      input: "Taip soalan anda...",
    },
    mealPlanner: {
      title: "Perancang Makanan",
      weight: "Sasaran Berat Anda (kg)",
      goal: "Matlamat",
      foodPref: "Pilihan Makanan",
      generate: "Jana Pelan Makanan",
      plan: "Pelan Makanan Contoh Anda",
      grocery: "Jana Senarai Beli-belah",
      modalTitle: "Senarai Beli-belah",
      print: "Cetak",
    },
    dashboard: {
      title: "Papan Pemuka Kesihatan",
      progress: "Kemajuan Anda",
      habits: "Penjejak Tabiat",
      report: "Laporan Bulanan",
    },
    calculator: {
      title: "Kalkulator BMI & Kcal",
      bmi: "Kalkulator BMI",
      height: "Tinggi (cm)",
      weight: "Berat (kg)",
      calcBMI: "Kira BMI",
      tdee: "Kalkulator TDEE",
      age: "Umur",
      gender: "Jantina",
      male: "Lelaki",
      female: "Perempuan",
      activity: "Tahap Aktiviti",
      calcTDEE: "Kira TDEE",
      kcal: "Penganalisis Kcal Makanan",
      food: "Nama / Keterangan Makanan",
      analyze: "Analisis",
    },
  },
};

function updateLanguage(lang) {
  // Home page
  if (window.location.pathname.endsWith("index.html")) {
    document.querySelector(".hero h1").textContent =
      translations[lang].home.hero;
    document.querySelector(".slogan").textContent =
      translations[lang].home.slogan;
    document.querySelector(".cta-btn").textContent =
      translations[lang].home.cta;
    document.querySelector(".features h2").textContent =
      translations[lang].home.features;
    const featureTitles = document.querySelectorAll(".feature h3");
    const featureDescs = document.querySelectorAll(".feature p");
    if (featureTitles.length >= 7) {
      featureTitles[0].textContent = translations[lang].home.chatbot;
      featureTitles[1].textContent = translations[lang].home.mealAnalysis;
      featureTitles[2].textContent = translations[lang].home.mealPlanner;
      featureTitles[3].textContent = translations[lang].home.grocery;
      featureTitles[4].textContent = translations[lang].home.calculator;
      featureTitles[5].textContent = translations[lang].home.dashboard;
      featureTitles[6].textContent = translations[lang].home.halal;
    }
    // Footer
    const footerLinks = document.querySelectorAll(".footer-links a");
    if (footerLinks.length >= 3) {
      footerLinks[0].textContent = translations[lang].home.about;
      footerLinks[1].textContent = translations[lang].home.contact;
      footerLinks[2].textContent = translations[lang].home.privacy;
    }
  }
  // Chatbot
  if (window.location.pathname.endsWith("chatbot.html")) {
    document.querySelector(".header .nav a.active").textContent =
      lang === "en" ? "Chatbot" : "Chatbot";
    const chatbotTitle = document.querySelector(".chatbot-title");
    if (chatbotTitle)
      chatbotTitle.textContent = translations[lang].chatbot.title;
    document.querySelector(".chat-input").placeholder =
      translations[lang].chatbot.input;
  }
  // Meal Planner
  if (window.location.pathname.endsWith("meal-planner.html")) {
    document.querySelector(".header .nav a.active").textContent =
      lang === "en" ? "Meal Planner" : "Perancang Makanan";
    document.querySelector(
      '.meal-planner-form label[for="weight-goal"]'
    ).textContent = translations[lang].mealPlanner.weight;
    document.querySelector(
      '.meal-planner-form label[for="goal-type"]'
    ).textContent = translations[lang].mealPlanner.goal;
    document.querySelector(
      '.meal-planner-form label[for="food-pref"]'
    ).textContent = translations[lang].mealPlanner.foodPref;
    document.querySelector(
      '.meal-planner-form button[type="submit"]'
    ).textContent = translations[lang].mealPlanner.generate;
    document.querySelector(".meal-plan-section h2").textContent =
      translations[lang].mealPlanner.plan;
    document.querySelector(".meal-plan-section .cta-btn").textContent =
      translations[lang].mealPlanner.grocery;
    const groceryModal = document.getElementById("grocery-modal");
    if (groceryModal) {
      const groceryModalTitle = groceryModal.querySelector("h2");
      if (groceryModalTitle)
        groceryModalTitle.textContent =
          translations[lang].mealPlanner.modalTitle;
    }
    document.getElementById("grocery-print-btn").textContent =
      translations[lang].mealPlanner.print;
  }
  // Dashboard
  if (window.location.pathname.endsWith("dashboard.html")) {
    document.querySelector(".header .nav a.active").textContent =
      lang === "en" ? "Dashboard" : "Papan Pemuka";
    document.querySelector(".progress-section h2").textContent =
      translations[lang].dashboard.progress;
    document.querySelector(".habits-section h2").textContent =
      translations[lang].dashboard.habits;
    document.querySelector(".report-section h2").textContent =
      translations[lang].dashboard.report;
  }
  // Calculator
  if (window.location.pathname.endsWith("calculator.html")) {
    document.querySelector(".header .nav a.active").textContent =
      lang === "en" ? "Calculator" : "Kalkulator";
    document.querySelector(".bmi-section h2").textContent =
      translations[lang].calculator.bmi;
    document.querySelector('.bmi-form label[for="bmi-height"]').textContent =
      translations[lang].calculator.height;
    document.querySelector('.bmi-form label[for="bmi-weight"]').textContent =
      translations[lang].calculator.weight;
    document.querySelector('.bmi-form button[type="submit"]').textContent =
      translations[lang].calculator.calcBMI;
    document.querySelector(".tdee-section h2").textContent =
      translations[lang].calculator.tdee;
    document.querySelector('.tdee-form label[for="tdee-age"]').textContent =
      translations[lang].calculator.age;
    document.querySelector('.tdee-form label[for="tdee-gender"]').textContent =
      translations[lang].calculator.gender;
    document.querySelector('#tdee-gender option[value="male"]').textContent =
      translations[lang].calculator.male;
    document.querySelector('#tdee-gender option[value="female"]').textContent =
      translations[lang].calculator.female;
    document.querySelector('.tdee-form label[for="tdee-height"]').textContent =
      translations[lang].calculator.height;
    document.querySelector('.tdee-form label[for="tdee-weight"]').textContent =
      translations[lang].calculator.weight;
    document.querySelector(
      '.tdee-form label[for="tdee-activity"]'
    ).textContent = translations[lang].calculator.activity;
    document.querySelector('.tdee-form button[type="submit"]').textContent =
      translations[lang].calculator.calcTDEE;
    document.querySelector(".kcal-section h2").textContent =
      translations[lang].calculator.kcal;
    document.querySelector('.kcal-form label[for="kcal-food"]').textContent =
      translations[lang].calculator.food;
    document.querySelector('.kcal-form button[type="submit"]').textContent =
      translations[lang].calculator.analyze;
  }
}

// On page load, update language
if (currentLang === "BM") updateLanguage("bm");
else updateLanguage("en");

// --- Chatbot AI Integration ---
if (window.location.pathname.endsWith("chatbot.html")) {
  const chatArea = document.querySelector(".chat-area");
  const chatForm = document.querySelector(".chat-input-area");
  const chatInput = document.querySelector(".chat-input");

  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userMsg = chatInput.value.trim();
    if (!userMsg) return;

    // Add user bubble
    const userBubble = document.createElement("div");
    userBubble.className = "chat-bubble user";
    userBubble.innerHTML = `<div class="avatar user-avatar">🧑</div><div class="bubble-content">${userMsg}</div>`;
    chatArea.appendChild(userBubble);
    chatArea.scrollTop = chatArea.scrollHeight;
    chatInput.value = "";

    // Add loading AI bubble
    const aiBubble = document.createElement("div");
    aiBubble.className = "chat-bubble ai";
    aiBubble.innerHTML = `<div class="avatar ai-avatar">🤖</div><div class="bubble-content"><em>Thinking...</em></div>`;
    chatArea.appendChild(aiBubble);
    chatArea.scrollTop = chatArea.scrollHeight;

    // Call backend
    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      aiBubble.querySelector(".bubble-content").textContent =
        data.reply || "Sorry, no response.";
    } catch (err) {
      aiBubble.querySelector(".bubble-content").textContent =
        "Error contacting AI.";
    }
    chatArea.scrollTop = chatArea.scrollHeight;
  });
}

// --- BMI & TDEE Calculator Logic ---
if (window.location.pathname.endsWith("calculator.html")) {
  // BMI Calculator
  const bmiForm = document.querySelector(".bmi-form");
  const bmiHeight = document.getElementById("bmi-height");
  const bmiWeight = document.getElementById("bmi-weight");
  const bmiValue = document.getElementById("bmi-value");

  bmiForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const h = parseFloat(bmiHeight.value) / 100;
    const w = parseFloat(bmiWeight.value);
    if (h > 0 && w > 0) {
      const bmi = w / (h * h);
      bmiValue.textContent = bmi.toFixed(1);
    } else {
      bmiValue.textContent = "-";
    }
  });

  // TDEE Calculator
  const tdeeForm = document.querySelector(".tdee-form");
  const tdeeAge = document.getElementById("tdee-age");
  const tdeeGender = document.getElementById("tdee-gender");
  const tdeeHeight = document.getElementById("tdee-height");
  const tdeeWeight = document.getElementById("tdee-weight");
  const tdeeActivity = document.getElementById("tdee-activity");
  const tdeeValue = document.getElementById("tdee-value");

  tdeeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const age = parseInt(tdeeAge.value);
    const gender = tdeeGender.value;
    const height = parseFloat(tdeeHeight.value);
    const weight = parseFloat(tdeeWeight.value);
    const activity = parseFloat(tdeeActivity.value);
    if (age > 0 && height > 0 && weight > 0) {
      // Mifflin-St Jeor Equation
      let bmr;
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
      const tdee = bmr * activity;
      tdeeValue.textContent = Math.round(tdee);
    } else {
      tdeeValue.textContent = "-";
    }
  });
}

// --- Meal Planner & Grocery List Logic ---
if (window.location.pathname.endsWith("meal-planner.html")) {
  const mealForm = document.querySelector(".meal-planner-form");
  const mealPlanList = document.querySelector(".meal-plan-list");
  const groceryBtn = document.querySelector(".meal-plan-section .cta-btn");
  const groceryModal = document.getElementById("grocery-modal");
  const groceryList = document.getElementById("grocery-list");
  const groceryModalClose = document.getElementById("grocery-modal-close");
  const groceryPrintBtn = document.getElementById("grocery-print-btn");

  // Enhanced meal plan templates by goal
  const mealTemplates = {
    malay: {
      lose: [
        {
          meal: "Breakfast",
          desc: "Nasi lemak (mini), cucumber, boiled egg",
          kcal: "250 kcal | 9g protein",
          items: ["Nasi lemak", "Cucumber", "Egg"],
        },
        {
          meal: "Lunch",
          desc: "Grilled chicken, brown rice (small), stir-fried veggies",
          kcal: "400 kcal | 30g protein",
          items: ["Chicken breast", "Brown rice", "Mixed vegetables"],
        },
        {
          meal: "Dinner",
          desc: "Fish soup, tofu, mixed greens",
          kcal: "300 kcal | 22g protein",
          items: ["Fish", "Tofu", "Mixed greens"],
        },
      ],
      maintain: [
        {
          meal: "Breakfast",
          desc: "Nasi lemak (small), cucumber, boiled egg",
          kcal: "350 kcal | 10g protein",
          items: ["Nasi lemak", "Cucumber", "Egg"],
        },
        {
          meal: "Lunch",
          desc: "Grilled chicken, brown rice, stir-fried veggies",
          kcal: "500 kcal | 35g protein",
          items: ["Chicken breast", "Brown rice", "Mixed vegetables"],
        },
        {
          meal: "Dinner",
          desc: "Fish soup, tofu, mixed greens",
          kcal: "400 kcal | 28g protein",
          items: ["Fish", "Tofu", "Mixed greens"],
        },
      ],
      gain: [
        {
          meal: "Breakfast",
          desc: "Nasi lemak (large), cucumber, 2 boiled eggs",
          kcal: "500 kcal | 18g protein",
          items: ["Nasi lemak", "Cucumber", "Egg"],
        },
        {
          meal: "Lunch",
          desc: "Grilled chicken (large), brown rice (large), stir-fried veggies",
          kcal: "700 kcal | 50g protein",
          items: ["Chicken breast", "Brown rice", "Mixed vegetables"],
        },
        {
          meal: "Dinner",
          desc: "Fish soup, tofu, mixed greens, extra rice",
          kcal: "600 kcal | 35g protein",
          items: ["Fish", "Tofu", "Mixed greens", "Rice"],
        },
      ],
    },
    chinese: {
      lose: [
        {
          meal: "Breakfast",
          desc: "Congee (small) with egg, spring onion",
          kcal: "200 kcal | 7g protein",
          items: ["Rice", "Egg", "Spring onion"],
        },
        {
          meal: "Lunch",
          desc: "Steamed fish, stir-fried bok choy, rice (small)",
          kcal: "350 kcal | 25g protein",
          items: ["Fish", "Bok choy", "Rice"],
        },
        {
          meal: "Dinner",
          desc: "Chicken and broccoli stir-fry, brown rice (small)",
          kcal: "320 kcal | 20g protein",
          items: ["Chicken", "Broccoli", "Brown rice"],
        },
      ],
      maintain: [
        {
          meal: "Breakfast",
          desc: "Congee with egg, spring onion",
          kcal: "300 kcal | 8g protein",
          items: ["Rice", "Egg", "Spring onion"],
        },
        {
          meal: "Lunch",
          desc: "Steamed fish, stir-fried bok choy, rice",
          kcal: "480 kcal | 32g protein",
          items: ["Fish", "Bok choy", "Rice"],
        },
        {
          meal: "Dinner",
          desc: "Chicken and broccoli stir-fry, brown rice",
          kcal: "420 kcal | 30g protein",
          items: ["Chicken", "Broccoli", "Brown rice"],
        },
      ],
      gain: [
        {
          meal: "Breakfast",
          desc: "Congee (large) with 2 eggs, spring onion",
          kcal: "450 kcal | 14g protein",
          items: ["Rice", "Egg", "Spring onion"],
        },
        {
          meal: "Lunch",
          desc: "Steamed fish (large), stir-fried bok choy, rice (large)",
          kcal: "700 kcal | 40g protein",
          items: ["Fish", "Bok choy", "Rice"],
        },
        {
          meal: "Dinner",
          desc: "Chicken and broccoli stir-fry, brown rice (large)",
          kcal: "600 kcal | 40g protein",
          items: ["Chicken", "Broccoli", "Brown rice"],
        },
      ],
    },
    indian: {
      lose: [
        {
          meal: "Breakfast",
          desc: "Idli (2 pcs) with sambar",
          kcal: "180 kcal | 6g protein",
          items: ["Idli", "Sambar"],
        },
        {
          meal: "Lunch",
          desc: "Tandoori chicken, chapati, salad (small)",
          kcal: "350 kcal | 25g protein",
          items: ["Chicken", "Chapati", "Salad"],
        },
        {
          meal: "Dinner",
          desc: "Dal, brown rice (small), mixed vegetables",
          kcal: "250 kcal | 10g protein",
          items: ["Dal", "Brown rice", "Mixed vegetables"],
        },
      ],
      maintain: [
        {
          meal: "Breakfast",
          desc: "Idli with sambar",
          kcal: "320 kcal | 9g protein",
          items: ["Idli", "Sambar"],
        },
        {
          meal: "Lunch",
          desc: "Tandoori chicken, chapati, salad",
          kcal: "510 kcal | 36g protein",
          items: ["Chicken", "Chapati", "Salad"],
        },
        {
          meal: "Dinner",
          desc: "Dal, brown rice, mixed vegetables",
          kcal: "410 kcal | 18g protein",
          items: ["Dal", "Brown rice", "Mixed vegetables"],
        },
      ],
      gain: [
        {
          meal: "Breakfast",
          desc: "Idli (4 pcs) with sambar",
          kcal: "400 kcal | 12g protein",
          items: ["Idli", "Sambar"],
        },
        {
          meal: "Lunch",
          desc: "Tandoori chicken (large), chapati (2), salad",
          kcal: "700 kcal | 50g protein",
          items: ["Chicken", "Chapati", "Salad"],
        },
        {
          meal: "Dinner",
          desc: "Dal, brown rice (large), mixed vegetables",
          kcal: "600 kcal | 25g protein",
          items: ["Dal", "Brown rice", "Mixed vegetables"],
        },
      ],
    },
    vegetarian: {
      lose: [
        {
          meal: "Breakfast",
          desc: "Oats with fruit and nuts (small)",
          kcal: "200 kcal | 5g protein",
          items: ["Oats", "Fruit", "Nuts"],
        },
        {
          meal: "Lunch",
          desc: "Vegetable curry, brown rice (small)",
          kcal: "300 kcal | 8g protein",
          items: ["Vegetable curry", "Brown rice"],
        },
        {
          meal: "Dinner",
          desc: "Tofu stir-fry, quinoa (small)",
          kcal: "250 kcal | 12g protein",
          items: ["Tofu", "Quinoa", "Vegetables"],
        },
      ],
      maintain: [
        {
          meal: "Breakfast",
          desc: "Oats with fruit and nuts",
          kcal: "300 kcal | 7g protein",
          items: ["Oats", "Fruit", "Nuts"],
        },
        {
          meal: "Lunch",
          desc: "Vegetable curry, brown rice",
          kcal: "450 kcal | 12g protein",
          items: ["Vegetable curry", "Brown rice"],
        },
        {
          meal: "Dinner",
          desc: "Tofu stir-fry, quinoa",
          kcal: "400 kcal | 20g protein",
          items: ["Tofu", "Quinoa", "Vegetables"],
        },
      ],
      gain: [
        {
          meal: "Breakfast",
          desc: "Oats with fruit and nuts (large)",
          kcal: "400 kcal | 10g protein",
          items: ["Oats", "Fruit", "Nuts"],
        },
        {
          meal: "Lunch",
          desc: "Vegetable curry, brown rice (large)",
          kcal: "600 kcal | 16g protein",
          items: ["Vegetable curry", "Brown rice"],
        },
        {
          meal: "Dinner",
          desc: "Tofu stir-fry, quinoa (large)",
          kcal: "500 kcal | 28g protein",
          items: ["Tofu", "Quinoa", "Vegetables"],
        },
      ],
    },
    halal: {
      lose: [
        {
          meal: "Breakfast",
          desc: "Egg sandwich (small), salad",
          kcal: "200 kcal | 10g protein",
          items: ["Egg", "Bread", "Salad"],
        },
        {
          meal: "Lunch",
          desc: "Grilled fish, rice (small), vegetables",
          kcal: "350 kcal | 20g protein",
          items: ["Fish", "Rice", "Vegetables"],
        },
        {
          meal: "Dinner",
          desc: "Chicken soup, wholemeal bread (small)",
          kcal: "250 kcal | 15g protein",
          items: ["Chicken", "Wholemeal bread", "Soup vegetables"],
        },
      ],
      maintain: [
        {
          meal: "Breakfast",
          desc: "Egg sandwich, salad",
          kcal: "320 kcal | 14g protein",
          items: ["Egg", "Bread", "Salad"],
        },
        {
          meal: "Lunch",
          desc: "Grilled fish, rice, vegetables",
          kcal: "480 kcal | 32g protein",
          items: ["Fish", "Rice", "Vegetables"],
        },
        {
          meal: "Dinner",
          desc: "Chicken soup, wholemeal bread",
          kcal: "390 kcal | 25g protein",
          items: ["Chicken", "Wholemeal bread", "Soup vegetables"],
        },
      ],
      gain: [
        {
          meal: "Breakfast",
          desc: "Egg sandwich (large), salad",
          kcal: "400 kcal | 18g protein",
          items: ["Egg", "Bread", "Salad"],
        },
        {
          meal: "Lunch",
          desc: "Grilled fish (large), rice (large), vegetables",
          kcal: "650 kcal | 40g protein",
          items: ["Fish", "Rice", "Vegetables"],
        },
        {
          meal: "Dinner",
          desc: "Chicken soup, wholemeal bread (large)",
          kcal: "500 kcal | 32g protein",
          items: ["Chicken", "Wholemeal bread", "Soup vegetables"],
        },
      ],
    },
    any: {
      lose: [
        {
          meal: "Breakfast",
          desc: "Oats with fruit and nuts (small)",
          kcal: "200 kcal | 5g protein",
          items: ["Oats", "Fruit", "Nuts"],
        },
        {
          meal: "Lunch",
          desc: "Grilled chicken, brown rice (small), salad",
          kcal: "350 kcal | 25g protein",
          items: ["Chicken", "Brown rice", "Salad"],
        },
        {
          meal: "Dinner",
          desc: "Fish soup, tofu, mixed greens (small)",
          kcal: "250 kcal | 18g protein",
          items: ["Fish", "Tofu", "Mixed greens"],
        },
      ],
      maintain: [
        {
          meal: "Breakfast",
          desc: "Oats with fruit and nuts",
          kcal: "300 kcal | 7g protein",
          items: ["Oats", "Fruit", "Nuts"],
        },
        {
          meal: "Lunch",
          desc: "Grilled chicken, brown rice, salad",
          kcal: "500 kcal | 35g protein",
          items: ["Chicken", "Brown rice", "Salad"],
        },
        {
          meal: "Dinner",
          desc: "Fish soup, tofu, mixed greens",
          kcal: "400 kcal | 28g protein",
          items: ["Fish", "Tofu", "Mixed greens"],
        },
      ],
      gain: [
        {
          meal: "Breakfast",
          desc: "Oats with fruit and nuts (large)",
          kcal: "400 kcal | 10g protein",
          items: ["Oats", "Fruit", "Nuts"],
        },
        {
          meal: "Lunch",
          desc: "Grilled chicken, brown rice (large), salad",
          kcal: "700 kcal | 45g protein",
          items: ["Chicken", "Brown rice", "Salad"],
        },
        {
          meal: "Dinner",
          desc: "Fish soup, tofu, mixed greens (large)",
          kcal: "600 kcal | 35g protein",
          items: ["Fish", "Tofu", "Mixed greens"],
        },
      ],
    },
  };

  let currentPlan = mealTemplates["any"]["maintain"];

  mealForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const pref = document.getElementById("food-pref").value;
    const goal = document.getElementById("goal-type").value;
    currentPlan =
      mealTemplates[pref] && mealTemplates[pref][goal]
        ? mealTemplates[pref][goal]
        : mealTemplates["any"]["maintain"];
    mealPlanList.innerHTML = currentPlan
      .map(
        (m) => `
      <div class="meal-item">
        <h3>${m.meal}</h3>
        <p>${m.desc}<br><span class="meal-kcal">${m.kcal}</span></p>
      </div>
    `
      )
      .join("");
  });

  groceryBtn.addEventListener("click", function (e) {
    e.preventDefault();
    // Generate grocery list from currentPlan
    const allItems = currentPlan.flatMap((m) => m.items);
    const uniqueItems = [...new Set(allItems)];
    groceryList.innerHTML = uniqueItems
      .map((item) => `<li>${item}</li>`)
      .join("");
    groceryModal.style.display = "flex";
  });

  groceryModalClose.addEventListener("click", function () {
    groceryModal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === groceryModal) {
      groceryModal.style.display = "none";
    }
  });

  groceryPrintBtn.addEventListener("click", function () {
    const printContents = `<h2>Grocery List</h2><ul>${groceryList.innerHTML}</ul>`;
    const printWindow = window.open("", "", "height=600,width=400");
    printWindow.document.write("<html><head><title>Grocery List</title>");
    printWindow.document.write(
      "<style>body{font-family:Poppins,Arial,sans-serif;padding:2rem;}h2{text-align:center;}ul{font-size:1.1rem;}li{margin-bottom:0.5rem;}</style>"
    );
    printWindow.document.write("</head><body >");
    printWindow.document.write(printContents);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  });
}

// --- Dashboard Chart.js Weight Trend ---
if (window.location.pathname.endsWith("dashboard.html")) {
  const ctx = document.getElementById("weightChart").getContext("2d");
  // Fake data for demonstration: up, down, up trend
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const data = [70, 71, 72, 71.5, 71, 72, 73];

  new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Weight (kg)",
          data: data,
          borderColor: "#4ADE80",
          backgroundColor: "rgba(76, 201, 128, 0.1)",
          tension: 0.4,
          pointBackgroundColor: "#A259F7",
          pointRadius: 5,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: { color: "#4ADE80" },
        },
        x: {
          ticks: { color: "#A259F7" },
        },
      },
    },
  });
}