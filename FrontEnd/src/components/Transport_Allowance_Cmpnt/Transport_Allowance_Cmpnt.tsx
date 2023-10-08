import React from 'react'
import "./Transport_Allowance_Cmpnt.css"

import { IonInput, IonItem, IonList } from '@ionic/react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import Form from 'react-bootstrap/Form';


import { AiFillCar } from 'react-icons/ai';
import { FaArrowUpFromGroundWater } from 'react-icons/fa6';
import { MdWhereToVote } from 'react-icons/md';
import { TbRulerMeasure } from 'react-icons/tb';
import { HiCurrencyBangladeshi } from 'react-icons/hi';
import { ImOffice } from 'react-icons/im';
import { FaAddressBook } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { FcPhoneAndroid } from 'react-icons/fc';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

// trabel place 
import { MdBroadcastOnHome } from 'react-icons/md';

// import {IonContent} from '@ionic/react';


const Transport_Allowance_Cmpnt = () => {
    return (
        <div className='Transport_Allowance_Cmpnt'>
            {/* <IonContent> */}


            <IonHeader>
                <IonToolbar>
                    <IonTitle>Transport Allowance</IonTitle>
                </IonToolbar>
            </IonHeader>




            <div className="FromBox">
                <p>Travel Visit</p>
                <div className="TravelPlaces">

                    <Form>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Office Name  <ImOffice /> </span>
                            <Form.Control type="text" placeholder="Office Name" />
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Office Address <FaAddressBook /></span>
                            <Form.Control type="text" placeholder="Office Address" />
                        </Form.Group>


                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Person Name <BsPersonCircle /></span>
                            <Form.Control type="text" placeholder="Person Name" />
                        </Form.Group>

                        <div className="row">

                            <div className="col-6">
                                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                    <span className='inputTitle'>Mobile <FcPhoneAndroid /></span>
                                    <Form.Control type="number" placeholder="Mobile" />
                                </Form.Group>
                            </div>


                            <div className="col-6">
                                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                    <span className='inputTitle'>Email Address<MdOutlineMarkEmailUnread /></span>
                                    <Form.Control type="text" placeholder="Email Address" />
                                </Form.Group>
                            </div>
                        </div>
                    </Form>

                </div>
            </div>







            <div className="FromBox">
                <p>Travel Places </p>
                <div className="TravelPlaces">

                    <Form>
                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Travel From  <FaArrowUpFromGroundWater /> </span>
                            <Form.Control type="text" placeholder="Travel From" />
                        </Form.Group>

                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Travel To <MdWhereToVote /></span>
                            <Form.Control type="text" placeholder="Travel To" />
                        </Form.Group>


                        <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                            <span className='inputTitle'>Vehicle Name <AiFillCar /></span>
                            <Form.Control type="text" placeholder="Vehicle Name" />
                        </Form.Group>

                        <div className="row">

                            <div className="col-6">
                                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                    <span className='inputTitle'>Mobile Number<FcPhoneAndroid /></span>
                                    <Form.Control type="number" placeholder="Mobile Number" />
                                </Form.Group>
                            </div>


                            <div className="col-6">
                                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                    <span className='inputTitle'>Email Address<HiCurrencyBangladeshi /></span>
                                    <Form.Control type="text" placeholder="Email Address $" />
                                </Form.Group>
                            </div>
                        </div>
                    </Form>

                </div>
            </div>



            {/* Form End  */}











            {/* </IonContent> */}
        </div>
    )
}

export default Transport_Allowance_Cmpnt