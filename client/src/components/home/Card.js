import React from 'react'

const Card = ({ name, ranking, summary }) => {
    return (
        <div>
            <h2>{name}</h2>
            <div>
                <p>Summary: {summary} Kg</p>
                <p >Ranking: {ranking}</p>
            </div>
            {/* <div>
                <img className={Styles.img} src={imagen} alt={name} />
            </div> */}
        </div>
    )
}
export default Card