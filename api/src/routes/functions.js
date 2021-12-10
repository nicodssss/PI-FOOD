require('dotenv').config();
/* Axios */
const axios = require('axios')
/* Api Key */
// const {
//     API_KEY
//   } = process.env
const api = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
const otherParams = '&addRecipeInformation=true&number=100'
const { Recipe, Diet } = require('../db');

const getApiRecipes = async () => {
    const response = await axios(`${api}d896b078882748a1a070e0a0493f7354${otherParams}`);
    const recipes = response.data.results.map(recipe=> (
        /**
         * "vegetarian": true,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,         
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ],
         */
        {
            image: recipe.image,      // Recipe img
            name: recipe.title,      // Recipe name
            diets: recipe.diets,    // Diets allows the recipe
            summary: recipe.summary, //Summary of the recipe
            steps: recipe.analyzedInstructions.steps, // Contains an array with {number,steps,ingredients(arr),equipment(arr)}
            healthScore: recipe.healthScore, // rating between 1 and 100. ex 76.0
            rating: recipe.aggregateLikes // likes given to the food ex. 3689
        }
    ))
    return recipes
}

const getDbRecipes = async ()=> {
    return await Recipe.findAll({
        include: Diet
    })
};

const getAllRecipes = async ()=> {
    const getApi = await getApiRecipes(); //waits for api recipes then...
    const getDb = await getDbRecipes(); // waits for db recipes 
    const allRecipes = [...getApi, ...getDb]; // concat api & db recipes
    return allRecipes  // array with all recipes
};

const getDiets = async ()=> {
    // (vegetarian) --- > if true remember to add to diets arr :D 
    const apiRecipes = await getApiRecipes();
    const diets = apiRecipes.map(recipe => {
        if(recipe.vegetarian){
            recipe.diets.push('vegetarian');
        }
        return recipe.diets;
    }) // .flat() 
    const arrDiets = diets.flat()
    const cleanDiets = new Set(arrDiets);
    return cleanDiets
}

module.exports = {
    getAllRecipes,
    getDiets
}