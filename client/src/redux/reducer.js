import { 
    GETRECIPE,
    GETDIETS,
    HIGHPUNT,
    LOWERPUNT,
    DIET,
    ASCNAME,
    DESCNAME,
    SHOWPAGE,
    PAGES,
    SNAME,
    RECIPE
    } from './actionsTypes';

const initialState = {
        types: [],
        recipes: [],
        recipesCopy: [],
        recipe: {},
        pages: [],
        showPage: []
    }

export default function rootReducer(state = initialState, {type, payload}){
        let actualRecipes = state.recipes.map(r=> r);
        let aux = state.recipesCopy;
        switch(type) {
            case GETRECIPE:
                return {
                    ...state,
                    recipes: payload,
                    recipesCopy: payload
                }
            case GETDIETS: 
                return{
                    ...state,
                    types: payload
                }
            case PAGES: 
                let pagination = []
                for(let i=0; i < state.recipes.length; i += 8){
                    let recipePaged = state.dogs.slice(i, i + 8);
                    pagination.push(recipePaged);
                }
                return {
                    ...state,
                    pages: pagination
                }
            case SHOWPAGE: 
                let pageToShow = state.pages[payload]
                    return {
                        ...state,
                        showPage: pageToShow
                    }
            case SNAME: 
                let matched = aux.filter(r => {
                    if(payload === '') return r;
                    if(payload && r.name.toLowerCase().includes(payload.toLowerCase())) return r;
                })
                    return {
                        ...state,
                        recipes: matched,
                        start: 0
                    }
            case RECIPE: 
                let match = aux.find(r => r.id === payload);
                    return {
                        ...state,
                        recipe: match
                    }
            case ASCNAME: // A-Z
                let aToZ = actualRecipes.sort((pre, pos)=> {
                    if(pre.name < pos.name) return -1;
                    else if(pre.name > pos.name) return 1;
                    else return 0;
                })
                return {
                    ...state,
                    recipes: aToZ
                }
            case DESCNAME: // Z-A
                let zToA = actualRecipes.sort((pre, pos)=> {
                    if(pre.name < pos.name) return 1;
                    else if(pre.name > pos.name) return -1;
                    else return 0;
                })
                return {
                    ...state,
                    recipes: zToA
                }
            case DIET: 
                let byDiet = aux.filter(r=> {
                    if(r.createdInDb === false && r.diets.find(d=> d.toLowerCase().includes(payload.toLowerCase()))) return r;
                    if(r.createdInDb === true && r.diets.find(d=> d.name.toLowerCase().includes(payload.toLowerCase()))) return r;
                    return null
                }).filter(Boolean)
                return {
                    ...state, 
                    recipes: byDiet
                }
            default:
                return state
        }
    }