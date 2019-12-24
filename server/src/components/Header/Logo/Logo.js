import React from 'react';

const logo = (props) =>{
    return(
        <a href="/">
           <img src={props.img} alt={props.alt} style={logoStyle}/>
        </a>
        
    );
}
const logoStyle = {
    width:'163px',
    height:'76px',
   
}
export default logo;