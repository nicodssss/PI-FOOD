import React from 'react'
/*  Styles */
/* React-redux */
import { connect } from 'react-redux'
import { orderAtoZ, orderZtoA, lowerToHigher, higherToLower } from '../../redux/actions'

const Order = ({ orderAtoZ, orderZtoA, lowerToHigher, higherToLower }) => {
    return (
        <div >
            <span>Order By</span>
            <p>Alphabetic</p>
            <div>
                <button onClick={orderAtoZ} >A-Z</button>
                <button onClick={orderZtoA} >Z-A</button>
            </div>
            <p>RANKING</p>
            <div>
                <button onClick={lowerToHigher} >- TO +</button>
                <button onClick={higherToLower} >+ TO -</button>
            </div>
        </div>
    )
}

export default connect(null, { orderAtoZ, orderZtoA, lowerToHigher, higherToLower })(Order)