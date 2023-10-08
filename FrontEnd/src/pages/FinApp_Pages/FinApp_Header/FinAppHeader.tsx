import React from 'react'

import logo from "../../../FinApp_Assets/assets/img/logo.png"
import avatar1 from "../../../FinApp_Assets/assets/img/sample/avatar/avatar1.jpg"

import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';

const FinAppHeader = () => {
    return (
        <div>


            {/* App Header */}
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a className="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                        {/* <ion-icon name="menu-outline"></ion-icon> */}
                        <AiOutlineMenu />
                    </a>
                </div>
                <div className="pageTitle">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="right">
                    <a className="headerButton">
                        {/* <ion-icon className="icon" name="notifications-outline"></ion-icon> */}
                        <IoMdNotifications />
                        <span className="badge badge-danger">4</span>
                    </a>
                    <a className="headerButton">
                        <img src={avatar1} alt="image" className="imaged w32" />
                        <span className="badge badge-danger">6</span>
                    </a>
                </div>
            </div>
            {/* End App Header */}





        </div>
    )
}

export default FinAppHeader