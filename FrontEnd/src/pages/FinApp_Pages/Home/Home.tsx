import React from 'react'

import logo from "../../../FinApp_Assets/assets/img/logo.png"
import avatar1 from "../../../FinApp_Assets/assets/img/sample/avatar/avatar1.jpg"

import { AiOutlineMenu, AiOutlineCloseCircle, AiFillCreditCard } from 'react-icons/ai';
import { IoMdNotifications } from 'react-icons/io';
import { BiCommentAdd, BiMoneyWithdraw } from 'react-icons/bi';
import { BsArrowUpRightCircle, BsFillPieChartFill } from 'react-icons/bs';

// Home css 
import "./Home.css"
import FinAppHeader from '../FinApp_Header/FinAppHeader';

import { Link } from 'react-router-dom';



const Home = () => {
    return (<>

        {/* Loader */}
        {/* <div id="loader">
            <img src="assets/img/loading-icon.png" alt="icon" className="loading-icon" />
        </div> */}
        {/* End Loader */}

        {/* App Header */}
        {/* <div className="appHeader bg-primary text-light">
            <div className="left">
                <a className="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                    <AiOutlineMenu />
                </a>
            </div>
            <div className="pageTitle">
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="right">
                <a className="headerButton">
                    <IoMdNotifications />
                    <span className="badge badge-danger">4</span>
                </a>
                <a className="headerButton">
                    <img src={avatar1} alt="image" className="imaged w32" />
                    <span className="badge badge-danger">6</span>
                </a>
            </div>
        </div> */}


        {/* App Header start */}
        <FinAppHeader />
        {/* App Header end */}






        {/* App Sidebar start */}
        {/* <div className="modal panelbox panelbox-left" id="sidebarPanel" tabIndex={-1} role="dialog"> */}
        <div className="AppBody" id="" tabIndex={-1} role="">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body p-0">
                        <div className="profileBox pt-2 pb-2">
                            <div className="image-wrapper">
                                <img src="assets/img/sample/avatar/avatar1.jpg" alt="image" className="imaged w36" />
                            </div>
                            <div className="in">
                                <strong>Sebastian Doe</strong>
                                <div className="text-muted">4029209</div>
                            </div>
                            <a className="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                                {/* <ion-icon name="close-outline"></ion-icon> */}
                                <AiOutlineCloseCircle />
                            </a>
                        </div>

                        <div className="sidebar-balance">
                            <div className="listview-title">Balance</div>
                            <div className="in">
                                <h1 className="amount">$ 2,562.50</h1>
                            </div>
                        </div>

                        <div className="action-group">
                            <a className="action-button">
                                <div className="in">
                                    <div className="iconbox">
                                        {/* <ion-icon name="add-outline"></ion-icon> */}
                                        <BiCommentAdd />
                                    </div>
                                    Deposit
                                </div>
                            </a>
                            <a className="action-button">
                                <div className="in">
                                    <div className="iconbox">
                                        {/* <ion-icon name="arrow-down-outline"></ion-icon> */}
                                        <BiMoneyWithdraw />
                                    </div>
                                    Withdraw
                                </div>
                            </a>
                            <a className="action-button">
                                <div className="in">
                                    <div className="iconbox">
                                        {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                                        <BsArrowUpRightCircle />
                                    </div>
                                    Send
                                </div>
                            </a>
                            <a className="action-button">
                                <div className="in">
                                    <div className="iconbox">
                                        {/* <ion-icon name="card-outline"></ion-icon> */}
                                        <AiFillCreditCard />
                                    </div>
                                    My Cards
                                </div>
                            </a>
                        </div>

                        <div className="listview-title mt-1">Menu</div>
                        <ul className="listview flush transparent no-line image-listview">
                            <li>
                                <a className="item">
                                    <div className="icon-box bg-primary">
                                        {/* <ion-icon name="pie-chart-outline"></ion-icon> */}
                                        <BsFillPieChartFill />
                                    </div>
                                    <div className="in">
                                        Overview
                                        <span className="badge badge-primary">10</span>
                                    </div>
                                </a>
                            </li>
                            {/* Repeat similar code for other list items */}
                        </ul>

                        <div className="listview-title mt-1">Others</div>
                        <ul className="listview flush transparent no-line image-listview">
                            {/* Repeat similar code for other list items */}
                        </ul>

                        <div className="listview-title mt-1">Send Money</div>
                        <ul className="listview image-listview flush transparent no-line">
                            {/* Repeat similar code for other list items */}
                        </ul>

                        {/* other button start */}
                        <Link to="/TransportAllowance">
                            <button className='btn btn-info'>Transport Allowance Form Button</button>
                        </Link>
                        {/* other button end */}

                    </div>
                </div>
            </div>
        </div>
        {/* App Sidebar end*/}












    </>)
}

export default Home