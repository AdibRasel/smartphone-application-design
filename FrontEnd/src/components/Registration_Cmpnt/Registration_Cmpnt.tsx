import React from 'react'
import { IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';

import "./Registration_Cmpnt.css"

import ProfileImage from "../../assets/image/Profile_Image.png"

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
                <IonInput label="Solid input" labelPlacement="floating" fill="solid" placeholder="Enter text" className='RgForm_Input'></IonInput>
                <IonInput label="Solid input" labelPlacement="floating" fill="solid" placeholder="Enter text" className='RgForm_Input'></IonInput>
                <IonInput label="Solid input" labelPlacement="floating" fill="solid" placeholder="Enter text" className='RgForm_Input'></IonInput>
                <IonInput label="Solid input" labelPlacement="floating" fill="solid" placeholder="Enter text" className='RgForm_Input'></IonInput>
                <IonInput label="Solid input" labelPlacement="floating" fill="solid" placeholder="Enter text" className='RgForm_Input'></IonInput>


                <button className='Reg_Submit'>Submit</button>


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