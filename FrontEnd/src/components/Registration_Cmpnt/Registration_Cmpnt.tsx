import React from 'react'
import { IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';

import "./Registration_Cmpnt.css"

import ProfileImage from "../../assets/image/Profile_Image.png"
import GoButton from "../../assets/image/GoButton.png"

const Registration_Cmpnt = () => {
    return (<div className="FullApp" >

        <div className='Full_App_Registration_page'>



            {/* Registration Image serction start  */}
            <div className="RgImage">
                <img src={ProfileImage} alt="" />

                <div className="RgTitle">
                    <h2>CREATE </h2>
                    <h1> ACCOUNT</h1>
                </div>
            </div>
            {/* Registration Image serction start */}





            {/* Registration Form start  */}
            <div className="RgForm">

                <div className="RgForm_inputBox">

                    <IonInput label="First Name" labelPlacement="floating" fill="solid" placeholder="Enter Your First Name" className='RgForm_Input'></IonInput>
                    <IonInput label="Last Name" labelPlacement="floating" fill="solid" placeholder="Enter Your Last Name" className='RgForm_Input'></IonInput>
                    <IonInput label="Email Address" labelPlacement="floating" fill="solid" placeholder="Enter Your Email Address" className='RgForm_Input'></IonInput>
                    <IonInput label="Password" labelPlacement="floating" fill="solid" placeholder="Enter Your Password" className='RgForm_Input'></IonInput>
                    <IonInput label="Confirm Password" labelPlacement="floating" fill="solid" placeholder="Enter Your Confirm Password" className='RgForm_Input'></IonInput>

                </div>

                {/* Submit Button start  */}
                <button className='Reg_Submit'>
                    <Link to="/Profile">
                        <img src={GoButton} alt="" />
                    </Link>
                </button>
                {/* Submit Button end  */}


            </div>
            {/* Registration Form End  */}









            {/* Login or forgate Password section start  */}
            <div className="Bottom_SectionRg">
                <div className="Bootom_Section_LeftRg">
                    <span>Forgat Password</span>
                </div>

                <div className="Bootom_Section_RightRg">
                    <Link to="/Login">
                        <span>Login</span>
                    </Link>
                </div>

            </div>
            {/* Login or forgate Password section end  */}











        </div>


    </div>)
}

export default Registration_Cmpnt