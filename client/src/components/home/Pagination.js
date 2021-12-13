import React from 'react'

import { connect } from 'react-redux'
import { showPageN } from '../../redux/actions'

const Pagination = ({ pages, showPageN }) => {
    return (
        <div>
            {pages.map((arr, i) => {
                const onClickChange = (e) => {
                    showPageN(e.target.value)
                }
                let j = i + 1
                return (<button onClick={onClickChange} key={i} value={i} >{j}</button>)
            })}
        </div>
    )
}
const mapStateToProps = ({ pages }) => ({
    pages
})

export default connect(mapStateToProps, { showPageN })(Pagination)