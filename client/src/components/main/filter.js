import React, { useEffect } from 'react'
/* React-redux */
import { connect } from 'react-redux'
import { bringDiets, filterbyDiet } from '../../redux/actions'

const Filter = ({ types, bringDiets, filterbyDiet }) => {
    /* Bring me all temps for the select */
    useEffect(() => {
        async function getDiets() {
            const allTemps = await bringDiets()
            return allTemps
        };
        getDiets()
    }, [bringDiets])
    const filterRecipes = (e) =>{
        filterbyDiet(e.target.value)
    }
    /* Component */
    return (
        <div>
            <span>Filter recipes</span>
            <select onChange={filterRecipes} defaultValue='filter' name='filter' placeholder='Filter'>
                { types.map(d =>(<option value={d.name} name={d.name} key={d.id} >{d.name}</option>)) }
            </select>
        </div>
    )
}

const mapStateToProps = ({ types }) => ({
    types
})

export default connect(mapStateToProps, { bringDiets, filterbyDiet })(Filter)