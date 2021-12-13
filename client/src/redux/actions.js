/* axios */
import axios from 'axios';
/* import types CONST's*/
import {GETRECIPE,GETDIETS,HIGHPUNT,LOWERPUNT,ASCNAME,DESCNAME,SHOWPAGE,SNAME,PAGES, DIET, RECIPE} from './actionsTypes.js';
/* my server in back */
const server = 'http://localhost:3001'
const recipeDb = 'http://localhost:3001/recipes';
const dietsDb = 'http://localhost:3001/types';

export const bringRecipes = () => {
    return async (dispatch) => {
        const res = await axios(recipeDb); // call recipes from database
        const recipes = res.data.map(r => { 
            let diets = r.diets.join(', '); // join diets ['vegan','vegetarian'] --> 'vegan, vegetarian'
            return {
                id: r.id,
                name: r.name,
                summary: r.summary,
                steps: r.steps,
                diets: diets, // diets = joined
                healthScore: r.healthScore,
                rating: r.rating
            }
        })
        return dispatch({
            type:GETRECIPE,
            payload: recipes // data is an object with recipes data
        })
    }
}

export const bringDiets = () => {
    return async (dispatch) =>{
        const response = await axios(dietsDb);
        const diets = response.data;
        return dispatch({
            type: GETDIETS,
            payload: diets
        })
    }
}

export const createRecipe = async (state) => { //recive the state(req,res)
    try {
        await axios.post(`${server}/recipe`, state)
        return window.alert(`The recipe ${state.name} has been created with success`)
    } catch(e){
        return window.alert('There was an error')
    }
}

export const showPageN = (p) => {
    return {
        type: SHOWPAGE,
        payload: p
    }
}

export const getPages = () => {
    return { type: PAGES }
}

export const orderAtoZ = () => { return { type: ASCNAME}}
export const orderZtoA = () => { return { type: DESCNAME}}

export const filterbyDiet = (diet) => {
    return {
        type: DIET,
        payload: diet
    }
}

export const searchName = (name) => {
    return {
        type: SNAME,
        payload: name
    }
}

export const recipeDetails = (id) => {
    return { 
        type: RECIPE,
        payload: id
    }
}