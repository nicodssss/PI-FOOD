import React, { useEffect } from "react";
import { Link } from "react-router-dom";
/* React-redux */
import { connect } from 'react-redux'
import { bringRecipes, recipeDetails, getPages, showPageN } from "../../redux/actions";
/* Component */
import Card from "./Card";

const Cards = ({ recipes, showPage, bringRecipes, recipeDetails, getPages, showPageN }) => {
    /* Bring all dogs */
    useEffect(() => {
        async function getRecipes() {
            const allDogs = await bringRecipes()
            return allDogs
        }
        getRecipes()
    }, [bringRecipes])
    /* Pagination */
    useEffect(() => {
        getPages()
        showPageN(0)
    }, [recipes])

    while (!showPage) {
        return (<div>Cargando...</div>)
    }
    return (
        <div>
            {showPage.map(recipe => {
                const bringRecipe = () => {
                    recipeDetails(recipe.id)
                }
                return (<Link onClick={bringRecipe} key={recipe.id}to={`/home/${recipe.id}`}>
                    <Card
                        name={recipe.name}
                        ranking={recipe.ranking}
                        summary={recipe.summary}
                    />
                </Link>)
            })}
        </div>
    )
}
const mapStateToProps = ({ recipes, showPage, pages }) => ({
    recipes,
    showPage
})

export default connect(mapStateToProps, { bringRecipes, recipeDetails, getPages, showPageN })(Cards)