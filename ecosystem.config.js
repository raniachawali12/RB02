module.exports = {
    apps: [{
      name: "ChatbotStreamlit",
      script: "streamlit",
      args: "run RB01.py",
      interpreter: "python",
      autorestart: true,
      watch: false,
      env: {
        "PORT":   // Port par défaut de Streamlit, modifiable si besoin
      }
    }]
  };