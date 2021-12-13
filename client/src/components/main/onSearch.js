import React from 'react'
/* Hooks */
import { useState } from 'react'
/* Styles */

/* React-redux */
import { connect } from 'react-redux'
import { searchName } from '../../redux/actions'

const OnSearch = ({ searchName }) => {

    const [state, setState] = useState({
        search: ''
    })
     
    const handleChange = ({ target: { name, value } }) => {
        setState({ [name]: value })
    }
    const handleSearch = () => {
        searchName(state.search)
    }
    return (
        <div>
            <span>Search breed</span>
            <label>
                <input
                    id='search'
                    name='search'
                    placeholder='Search...'
                    value={state.search}
                    onChange={handleChange} />
                <button onClick={handleSearch}>Find</button>
            </label>
        </div >
    )
}

export default connect(null, { searchName })(OnSearch)