const translations = {
    zh: {
      title: "個人展示網站",
      header-title: "你好，我是Gump",
      about-me: "關於我",
      about-text: "我是來自台灣、在北京工作的創意技術人...",
      projects: "專案展示",
      proj1: "AI 視覺分析系統",
      proj2: "影片調色自動化流程",
      video: "影片展示"
    },
    en: {
      title: "Portfolio Website",
      header-title: "Hi, I'm Gump",
      about-me: "About Me",
      about-text: "I'm a creative technologist from Taiwan, based in Beijing...",
      projects: "Projects",
      proj1: "AI Vision Tool",
      proj2: "Auto Color Grading",
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