import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Loginpg from './pages/Login_Pg/Login_pg';


// Bootstrap css import 
import 'bootstrap/dist/css/bootstrap.min.css';

// Global css start 
import "./assets/css/style.css"

import Registration_pg from './pages/Registration_pg/Registration_pg';
import Profile_Pg from './pages/Profile_Pg/Profile_Pg';
import Index from './Index';
import Home from './pages/FinApp_Pages/Home/Home';
import Transport_Allowance_Page from './pages/Transport_Allowance_Page/Transport_Allowance_Page';



setupIonicReact();

const App: React.FC = () => (






  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>




        {/* Routing Start  */}

        <Route exact path="/home"> <Index /></Route>
        <Route exact path="/"><Redirect to="/home" /></Route>



        {/* Urban It Solution Route Start  */}
        <Route exact path="/Login"> <Loginpg /></Route>

        <Route exact path="/Registration"> <Registration_pg /></Route>

        <Route exact path="/Profile"> <Profile_Pg /></Route>
        {/* Urban It Solution Route end  */}




        {/* FinApp Route Start  */}

        <Route exact path="/FinAppHome"> <Home /></Route>
        <Route exact path="/TransportAllowance"> <Transport_Allowance_Page /></Route>




        {/* FinApp Route End  */}





        {/* Routing end  */}




      </IonRouterOutlet>
    </IonReactRouter>

  </IonApp>
);

export default App;
