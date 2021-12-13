import React from "react";
/* Components */
import Menu from "./home/Menu.js";
import Cards from "./home/Cards";
import Pagination from "./home/Pagination";

const Home = () => {
    return (
        <div>
            <div>
                <Menu />
                <Cards />
            </div>
            <div>
                <Pagination />
            </div> 
        </div>
    )
}

export default Home;