import React from 'react';

const footer = (props)=>(
    <footer style={ftStyle}>
        <p>Posted by: SawSolutions</p>
        <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
    </footer>
);
const ftStyle ={
    width:'100%',
    textAlign:'center',
    backgroundColor:'#e3f6f5',
}
export default footer;