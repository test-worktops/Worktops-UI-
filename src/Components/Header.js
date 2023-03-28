import React from "react";
import '../CSS/header.css'
function Header() {
    return (
        <div className="header">
            <div>
                <img src="" alt="DECBASE-logo" />
            </div>
            <div className="others">
                <button className="post_a_project">POST A PROJECT</button>
                <select className="search">
                    <option>SEARCH</option>
                </select>
                < i class="ri-heart-3-line"></i>
                <i class="ri-mail-line"></i>
                <i class="ri-notification-2-line"></i>
                <img src="" alt="profile" className="profile" />
            </div>

        </div>
    )
}
export default Header