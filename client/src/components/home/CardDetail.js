import React from 'react'

import { connect } from 'react-redux'

const CardDetail = ({ recipe }) => {
    return (
        <div>
            <h2 >{recipe.name}</h2>
            <div >
                <div >
                    <h3>summar:</h3><br />
                    <p >{recipe.summary}</p>
                    <h3>rank:</h3><br />
                    <p>{recipe.ranking}</p>
                    <h3>health:</h3><br />
                    <p > {recipe.healthScore}</p>
                    <h3>steps:</h3><br /> 
                    <p> {recipe.steps}</p>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ recipe }) => ({ recipe })
export default connect(mapStateToProps)(CardDetail)