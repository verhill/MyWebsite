function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}



document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target);
            }
        });
    });

    items.forEach(item => observer.observe(item));
});

document.addEventListener("DOMContentLoaded", () => {
    const langSv = document.getElementById("lang-sv");
    const langEn = document.getElementById("lang-en");

    // Språkdata för hela sidan inklusive tidslinjen
    const translations = {
        sv: {
            name: "David Hillver",
            about: "Om mig",
            timeline: "Tidslinje",
            projects: "Projekt",
            contact: "Kontakt",
            timeline_title: "Min Utveckling",
            timeline_2021_1: "Började på civilingenjörsprogrammet och lärde mig grunderna i programmering.",
            timeline_2021_2: "Läste Python, C och SQL samt grundläggande nätverkslära.",
            timeline_2021_3: "Mitt första projekt. Ett grupparbete där uppgiften var att skapa ett dataspel med Python och Pygame.",
            timeline_2023_1: "Bytte till systemvetenskapsprogrammet och fokuserade mer på programmering.",
            timeline_2023_2: "Lärde mig SQL och objektorienterad programmering i Java.",
            timeline_2023_3: "Första objektorienterade projektet jag gjort, där vi som grupp skulle skapa ett administrativt system för organisationen MIB.",
            timeline_2024_1: "Fördjupade mig inom front-end utveckling (HTML, CSS, JavaScript, Vue.js) och back-end med C# och SQL.",
            timeline_2024_2: "Började även arbeta med .NET.",
            timeline_2024_3: "Byggde en komplett webbapplikation med Vue.js och .NET.",
            timeline_2025_1: "Utvecklade en hemsida som hanterar CV:n och projekt, där användare kan söka efter andra användares CV:n och se deras projekt.",
            timeline_2025_2: "En hemsida som hanterar CV:n och projekt där man kan se olika användares CV:n och projekt de deltagit i.",
            copyright: "© 2025 David Hillver. Alla rättigheter reserverade.",
            aboutTitle: "Om mig",
            aboutDescription: "Jag är en systemvetenskapsstudent vid Örebro universitet med ett stort intresse för IT. Min passion ligger inom backendutveckling och databashantering. Jag strävar efter att bidra till innovativa lösningar och utveckla mina färdigheter inom teknikens värld.",
            projects_title: "Mina egna Projekt",
            project_1_name: "Projekt Namn",
            project_1_description: "Ett projekt där uppgiften var att skapa en egen påhittad konsultsida. Projekten som finns med i portföljen på denna sida har jag även skapat själv.",
            project_1_github: "Visa på GitHub",
            contact_title: "Kontakta mig!",
            contact_desc: "Ständigt på jakt efter nästa lärorika projekt – hör av dig!",
            contact_name: "Namn",
            contact_email: "E-post",
            contact_message: "Meddelande",
            contact_submit: "Skicka",
            github: "Visa på GitHub",
        },
        en: {
            name: "David Hillver",
            about: "About Me",
            timeline: "Timeline",
            projects: "Projects",
            contact: "Contact",
            timeline_title: "My Development",
            timeline_2021_1: "Started in the engineering program and learned the basics of programming.",
            timeline_2021_2: "Studied Python, C, and SQL as well as basic networking.",
            timeline_2021_3: "My first project. A group project where the task was to create a data game using Python and Pygame.",
            timeline_2023_1: "Switched to the Systems Science program and focused more on programming.",
            timeline_2023_2: "Learned SQL and object-oriented programming in Java.",
            timeline_2023_3: "First object-oriented project, where our group created an administrative system for the MIB organization.",
            timeline_2024_1: "Deepened my knowledge in front-end development (HTML, CSS, JavaScript, Vue.js) and back-end with C# and SQL.",
            timeline_2024_2: "Also started working with .NET.",
            timeline_2024_3: "Built a complete web application using Vue.js and .NET.",
            timeline_2025_1: "Developed a website that manages CVs and projects, allowing users to search for other users' CVs and see their projects.",
            timeline_2025_2: "A website that manages CVs and projects, where you can see different users' CVs and the projects they have participated in.",
            copyright: "© 2025 David Hillver. All rights reserved.",
            aboutTitle: "About Me",            
            aboutDescription: "I am a computer science student at Örebro University with a strong interest in IT. My passion lies in backend development and database management. I aim to contribute to innovative solutions and continue developing my skills in the world of technology.",
            projects_title: "My Own Projects",
            project_1_name: "Project Name",
            project_1_description: "A project where the task was to create a fictional consulting website. The projects included in the portfolio on this site were also created by me.",
            project_1_github: "View on GitHub",
            contact_title: "Contact me!",
            contact_desc: "Always on the lookout for the next learning opportunity – get in touch!",
            contact_name: "Name",
            contact_email: "Email",
            contact_message: "Message",
            contact_submit: "Send",
            github: "View on GitHub"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Spara språkvalet i localStorage
        localStorage.setItem("language", lang);
    }

    // Kontrollera tidigare sparat språk
    const savedLang = localStorage.getItem("language") || "sv";
    changeLanguage(savedLang);

    // Event Listeners för språkknappar
    langSv.addEventListener("click", () => changeLanguage("sv"));
    langEn.addEventListener("click", () => changeLanguage("en"));
});


