import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// FinApp Css import 
import "./FinApp_Assets/assets/css/style.css"


const Index = () => {
    return (<div>

        <h2 className='text-center p-5 bg-success text-white'>App</h2>


        <div className="d-flex">

            <Card border="primary" className='' style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title className=''>Urban IT Solution</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        
                    </Card.Text>
                    <Link to="/Login">
                        <button className='btn btn-info'>Go to</button>
                    </Link>
                </Card.Body>
            </Card>
            <br />

            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                    <Card.Title className=''>Finapp</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Link to="/FinAppHome">
                        <button className='btn btn-info'>Go to</button>
                    </Link>
                </Card.Body>
            </Card>

        </div>






    </div>)
}

export default Index