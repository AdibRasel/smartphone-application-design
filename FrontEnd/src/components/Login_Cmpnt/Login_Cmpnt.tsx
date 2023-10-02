import React from 'react'
import "./Login_Cmpnt.css"
import { IonInput } from '@ionic/react';


import Logo from "../../assets/image/Logo.png"



import { BsFacebook, BsTwitter, BsGithub } from 'react-icons/bs';
import { FaGooglePlusSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login_Cmpnt = () => {
  return (<div className="FullApp" >

    <div className='Full_App_Login_page'>


      {/* Logo start    */}
      <div className="Logo_Login_Page">
        <img src={Logo} alt="" />
      </div>
      {/* Logo end    */}


      {/* title start  */}
      <div className="Login_Page_Title">
        <h2>Welcome to </h2>
        <h1>Urban IT Solution</h1>
      </div>
      {/* title end  */}



      {/* login logout section start  */}
      <div className="Login_Logout_Section">

        <IonInput label="User Name" labelPlacement="floating" fill="outline" placeholder="User Name, Email Address or Phon Number" className='Input_Login_Logout_btn'></IonInput>

        <IonInput type='password' label="Password" labelPlacement="floating" fill="outline" placeholder="Password" className='Input_Login_Logout_btn'></IonInput>

      </div>
      {/* login logout section end */}



      {/* Submit button start  */}
      <div className="Submit_SignIN">
        <Link to="/Registration">
          <button className='Submit_SignINBtn'>SIGN IN</button>
        </Link>
      </div>
      {/* Submit button end */}




      {/* login with antoher service start  */}
      <div className="Login_with_antother_service">

        <div className="Login_Sith_anotehr_service_Top">
          <h2>OR</h2>
          <span>Login with</span>
        </div>

        <div className="Login_Sith_anotehr_service_Bottom">

          <span className='Login_With_Btn'><BsFacebook /></span>
          <span className='Login_With_Btn'><BsTwitter /></span>
          <span className='Login_With_Btn'><FaGooglePlusSquare /></span>
          <span className='Login_With_Btn'><BsGithub /></span>


        </div>


      </div>
      {/* login with antoher service end  */}






      {/* Create Account or forgate Password section start  */}
      <div className="Bottom_Section">
        <div className="Bootom_Section_Left">
          <span>Forgat Password</span>
        </div>

        <div className="Bootom_Section_Right">
          <span>Create a New Account</span>
        </div>

      </div>
      {/* Create Account or forgate Password section end  */}










    </div>
  </div>)
}

export default Login_Cmpnt