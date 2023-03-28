import React from "react";
import '../CSS/header.css'
function HeaderPage() {
    return (
        <div className="header">
            <div>
                <img src="" alt="DECBASE-logo" />
            </div>
            <div className="others">
                <select className="search">
                    <option>SEARCH</option>
                </select>
                <p className="options">HOW IT WORKS</p>
                <p className="options">LOG IN</p>
                <p className="options">SIGN UP</p>
                <p className="options">FREELANCER?</p>
            </div>

        </div>
    )
}
export default HeaderPage