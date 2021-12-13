import React from 'react'

/* Components */
import OnSearch from '../main/onSearch.js'
import Filter from '../main/filter.js'
import Order from '../main/order.js'


const Menu = () => {
    return (
        <div>
            <OnSearch />
            <Filter />
            <Order />
        </div>
    )
}

export default Menu