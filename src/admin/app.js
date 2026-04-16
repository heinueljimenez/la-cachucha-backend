const config = {
  locales: [
    'es', // Asegúrate de que 'es' esté activado para tenerlo en español
  ],
  translations: {
    es: {
      "Auth.form.welcome.title": "Bienvenido a MANNA STUDIO",
      "Auth.form.welcome.subtitle": "Inicia sesión en tu panel creativo",
      "app.components.LeftMenu.navbrand.title": "MANNA Dashboard",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
