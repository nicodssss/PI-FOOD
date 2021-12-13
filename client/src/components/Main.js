import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
    return (
        /* The container has the img */
        <div>
            {/* This button link home */}
            <Link to='/home'>
                <button>
                    HOME
                </button>
            </Link>
            {/* Blank to my github acc */}
            <span>Created by
                <a
                    href='https://github.com/nicodssss'
                    target='_blank'
                    without rel="noreferrer"> Nicodssss</a>
            </span>
        </div>
    )
}

export default Main;