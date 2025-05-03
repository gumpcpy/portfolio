const translations = {
    zh: {
      title: "個人展示網站",
      headerTitle: "你好，我是Gump",
      aboutMe: "關於我",
      aboutText: "我是來自台灣、在北京工作的技術人，擁有十年以上系統工程與影像後製經驗。目前專注於電影拍攝和後期製作的流程化設計與沈浸式娛樂互動系統設計。",
      projects: "專案展示",
      proj1: "影視系統AI 視覺分析系統",
      proj2: "DIT/特效剪輯工具",
      video: "影片展示"
    },
    en: {
      title: "Portfolio Website",
      headerTitle: "Hi, I'm Gump",
      aboutMe: "About Me",
      aboutText: "I'm a technical person from Taiwan, working in Beijing. I have over ten years of experience in system engineering and post-production. Currently, I focus on the design of film production and post-production management systems, as well as the design of immersive entertainment interactive systems.",
      projects: "Projects",
      proj1: "Film Production and Post-Production Management System",
      proj2: "Stand-alone DIT/VFX Editor Tools",
      video: "Showreel"
    }
  };
  
  function setLang(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
      const key = el.getAttribute("data-lang");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }