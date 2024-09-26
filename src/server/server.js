const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 4000;
app.use(cors()); // Enable CORS for all routes

app.get('/api/items', async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Query parameter "q" is required' });
  }

  try {
    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
    const categories = response.data.filters
      .find(filter => filter.id === 'category')?.values[0]?.path_from_root
      .map(category => category.name) || [];
    //En el futuro esto debería ser una paginación
    const items = await Promise.all(response.data.results.slice(0, 4).map(async item => {
      // Esto no es lo que haría si fueran muchos results,
      // pero para este ejemplo va a funcionar, porque sé que necesito solo 4
      // Para otro caso hay que buscar otra estrategia.
      const sellerResponse = await axios.get(`https://api.mercadolibre.com/users/${item.seller.id}`);
      const location = sellerResponse.data.address?.city || '';

      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: Math.floor(item.price),
          decimals: (item.price % 1).toFixed(2) * 100
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        location: location
      };
    }));

    const result = {
      author: {
        name: "Karen",
        lastname: "Lafuente"
      },
      categories,
      items
    };

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'error_occurred' });
  }
});

app.get('/api/items/:id', async (req, res) => {
  const itemId = req.params.id;

  try {
    const [itemResponse, descriptionResponse] = await Promise.all([
      axios.get(`https://api.mercadolibre.com/items/${itemId}`),
      axios.get(`https://api.mercadolibre.com/items/${itemId}/description`)
    ]);

    const itemData = itemResponse.data; //TODO: que pasa que si no hay data? 404?
    const descriptionData = descriptionResponse.data;
    const categoryResponse = await axios.get(`https://api.mercadolibre.com/categories/${itemData.category_id}`);
    const categories = categoryResponse.data.path_from_root.map(category => category.name);

    const result = {
      author: {
        name: "Karen",
        lastname: "Lafuente"
      },
      item: {
        id: itemData.id,
        title: itemData.title,
        price: {
          currency: itemData.currency_id,
          amount: Math.floor(itemData.price), // No tiene descuentos, puede llegar a haber una inconsistencia entre listado y pdp
          decimals: (itemData.price % 1).toFixed(2) * 100
        },
        picture: itemData.pictures[0]?.url || itemData.thumbnail,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.initial_quantity,
        description: descriptionData.plain_text
      },
      //No lo pide en la interface pero necesito la info para el breadcrumb
      categories
    };

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'error_occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});