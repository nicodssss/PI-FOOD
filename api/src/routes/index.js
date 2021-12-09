const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getRecipeName } = require('./handlers.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', getRecipeName);
router.get('/recipes/:id', getRecipeId);
router.get('/types', getDiets);
router.post('/recipe', createRecipe);

module.exports = router;
