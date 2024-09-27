import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "search_placeholder": "Never stop searching",
      "ARS": "$",
      "no_results": "No results",
      "error_occurred": "An error occurred while processing your request.",
      "product_description": "Product description",
      "buy_button": "Buy",
      "new": "New",
      "sold": "Sold",
      "free_shipping": "Free shipping",
      "searcher": "Searcher"
    }
  },
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
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
