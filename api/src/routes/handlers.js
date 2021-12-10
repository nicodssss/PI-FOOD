/* Functions */
const {
    getAllRecipes,
    getDiets
} = require('./functions.js')
/* Get db Models */
const { Recipe, Diets, Op } = require('../db');
const e = require('express');

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
           return res.send(recipes)
        }

    }
    catch(e){
        res.send(e)
    }
    
}
const getRecipeId = async (req, res)=>{
    try {
        const { id } = req.params;
        const recipes = await getAllRecipes();
        if(id){
            const recipeMatch = recipes.filter(r => r.id == id);
            if(recipeMatch){
                res.send(recipeMatch);
            } else {
                res.status(404).send('Recipe not found !');    
            }
        }
    }
    catch(e){
        res.sendStatus(404)
    }
}


const getDiet = async (req, res)=>{
    try {
        const tipos = ["gluten free","dairy free","paleolithic","ketogenic","lacto bla","fsdfsdf","sssss"]
        // let tipos = await getDiets();
        console.log(tipos)
        tipos.forEach(diet => {
            Diets.findOrCreate({
                where: { name: diet}
            })
        
        })
        const all = await Diets.findAll();
        res.status(200).send(all)
    } catch (e) {
        res.send(e)
    }
}


const createRecipe = async (req, res)=>{
    try{
        const { name, summary, rating, healthScore, steps } = req.body;
        let splitSteps = steps.split(',');
        const newRecipe = await Recipe.create({
            name,
            summary,
            rating,
            healthScore,
            steps: splitSteps
        })
        for(let i=0; i < splitSteps.length; i++){
            newRecipe.addDiets(await Diets.findOne({ where:{ name: splitSteps[i]}}))
        }
        res.send(newRecipe)
    }
    catch(e) {
        res.send(e)
    }
}


module.exports = {
    getRecipeName,
    getDiet,
    getRecipeId,
    createRecipe
}