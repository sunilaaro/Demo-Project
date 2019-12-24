import React from 'react';
import './Layout.css';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const layout = (props)=>{
    return(
        <Aux>
             <Header />
              <main className="containerMain">{props.children}</main>
             <Footer />
        </Aux>
    );
}



export default layout;