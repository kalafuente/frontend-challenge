import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  resources: {
    es: {
      translation: {
        "search_placeholder": "Nunca dejes de buscar",
        "ARS": "$",
        "no_results": "No hay resultados",
        "error_occurred": "Ocurrió un error al procesar tu solicitud.",
        "product_description": "Descripción del producto",
        "buy_button": 'Comprar',
        "new": 'Nuevo',
        "sold": 'Vendidos',
        "free_shipping": 'Envío gratis',
        "searcher": 'Buscador'
      },
    },
  },
  debug: false,
});

export default i18n;
