/* Functions */
const {
    getAllRecipes,
    getDiets
} = require('./functions.js')
/* Get db Models */
const { Recipe, Diet } = require('../db');

/* /recipes functions */

/* GET /recipes?name="...":
Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
Si no existe ninguna receta mostrar un mensaje adecuado */

const getRecipeName = async (req, res)=> {
    try { 
        const recipes = await getAllRecipes();
        const {name} = req.query;
        if(name){ 
            let match = recipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
            if(match){
                return res.status(200).json(match);
            } 
        } else {
           return res.status(404).json({msg:`Can't found a recipe that include that word`})
        }

    }
    catch(e){
        res.send(e)
    }
    
}

module.exports = {
    getRecipeName
}