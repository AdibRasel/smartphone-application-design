import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Loginpg from './pages/Login_Pg/Login_pg';

// import { TransitionGroup, CSSTransition } from 'react-transition-group';


// Global css start 
import "./assets/css/style.css"
import Registration_pg from './pages/Registration_pg/Registration_pg';



setupIonicReact();

const App: React.FC = () => (






  <IonApp>


    {/* <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
      ></CSSTransition> */}



      <IonReactRouter>
        <IonRouterOutlet>




          {/* Routing Start  */}

          {/* home rout start  */}
          <Route exact path="/Login"> <Loginpg /></Route>
          <Route exact path="/"><Redirect to="/Login" /></Route>
          {/* Home Route end  */}


          {/* All Page Start  */}
          <Route exact path="/Registration"> <Registration_pg /></Route>
          {/* All Page Start  */}







          {/* Routing end  */}




        </IonRouterOutlet>
      </IonReactRouter>


    {/* </TransitionGroup> */}



  </IonApp>
);

export default App;
