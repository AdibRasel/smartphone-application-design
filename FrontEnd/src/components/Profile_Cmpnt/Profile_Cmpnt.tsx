import React from 'react'

import "./Profile_Cmpnt.css"
import Menu from '../Menu/Menu'
import { AiOutlineUser, AiOutlineMail, AiFillPhone, AiFillSetting, AiFillEdit, AiFillCamera } from 'react-icons/ai';
import { TbWorldSearch } from 'react-icons/tb';
import { GiMusicalScore } from 'react-icons/gi';
import { BiSolidContact, BiSolidMessageDetail, BiCalendar } from 'react-icons/bi';




import { Link } from 'react-router-dom';


import GoButton from "../../assets/image/GoButton.png"



import MyProfileImg from "../../assets/image/My_Profile_img.jpg"
import TolBar from "../../assets/image/Tollbar.png"

const Profile_Cmpnt = () => {



  return (<div className="FullApp" >

    <div className='Full_App_Pforile_page'>
      {/* Menu Start  */}
      <Menu />
      {/* Menu end */}


      {/* Profile_Info_Show start  */}
      <div className="Profile_Info_Show">

        <div className="Profile_Info_Show_img">
          <img src={MyProfileImg} alt="" />
        </div>

        <div className="Profile_Info_Show_text">


          <span className='Profile_Info_Show_Tite'><AiOutlineUser /><b> Rasel Hossain</b></span> <br />
          <span><AiOutlineMail /> rasel@urbanitsolution.com</span> <br />
          <span><AiFillPhone /> 01934544352</span> <br />
          <span><TbWorldSearch /> www.urbanitsolution.com </span>



          <div className="Profile_Info_Show_btn">
            <div className="Profile_Info_Show_btn_left"><AiFillSetting /> Preferences</div>
            <div className="Profile_Info_Show_btn_right"><AiFillEdit /> Edit</div>
          </div>


        </div>





      </div>
      {/* Profile_Info_Show end */}




      {/* Profile_Menu_Item_Box start  */}
      <div className="Profile_Menu_Item_Box">


        <div className="Profile_Menu_Item_Title">

          <div className="Profile_Menu_Item_Title_Left">
            <AiFillCamera />
            <span>Photo & Image</span>
          </div>
          <div className="Profile_Menu_Item_Title_Right">
            <Link to="/Profile">
              <img src={GoButton} alt="" />
            </Link>
          </div>

        </div>

        <div className="Profile_Menu_Item_Title">

          <div className="Profile_Menu_Item_Title_Left">
            <GiMusicalScore />
            <span>Music Tracks</span>
          </div>
          <div className="Profile_Menu_Item_Title_Right">
            <Link to="/Profile">
              <img src={GoButton} alt="" />
            </Link>
          </div>
        </div>

        <div className="Profile_Menu_Item_Title">

          <div className="Profile_Menu_Item_Title_Left">
            <BiSolidContact />
            <span>Contact List</span>
          </div>
          <div className="Profile_Menu_Item_Title_Right">
            <Link to="/Profile">
              <img src={GoButton} alt="" />
            </Link>
          </div>

        </div>




        <div className="TolBar">
          <img src={TolBar} alt="" />
        </div>






        <div className="Profile_Menu_Item_Title">

          <div className="Profile_Menu_Item_Title_Left">
            <BiSolidMessageDetail />
            <span>Messages</span>
          </div>
          <div className="Profile_Menu_Item_Title_Right">
            <Link to="/Profile">
              <img src={GoButton} alt="" />
            </Link>
          </div>
        </div>

        <div className="Profile_Menu_Item_Title">

          <div className="Profile_Menu_Item_Title_Left">
            <BiCalendar />
            <span>Calendar</span>
          </div>
          <div className="Profile_Menu_Item_Title_Right">
            <Link to="/Profile">
              <img src={GoButton} alt="" />
            </Link>
          </div>

        </div>







      </div>
      {/* Profile_Menu_Item_Box end  */}












    </div>





  </div>)
}

export default Profile_Cmpnt