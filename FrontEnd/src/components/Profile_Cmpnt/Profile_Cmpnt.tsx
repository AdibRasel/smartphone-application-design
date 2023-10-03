import React from 'react'

import "./Profile_Cmpnt.css"
import Menu from '../Menu/Menu'
import { AiOutlineUser, AiOutlineMail, AiFillPhone, AiFillSetting, AiFillEdit } from 'react-icons/ai';
import { TbWorldSearch } from 'react-icons/tb';



import MyProfileImg from "../../assets/image/My_Profile_img.jpg"

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





    </div>





  </div>)
}

export default Profile_Cmpnt