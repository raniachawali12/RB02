module.exports = {
    apps: [{
      name: "ResilienceBOT",
      script: "streamlit",
      args: "run RB02.py",
      interpreter: "python",
      autorestart: true,
      watch: false,
      env: {
        "PORT":  8502 // Port par défaut de Streamlit, modifiable si besoin
      }
    }]
  };