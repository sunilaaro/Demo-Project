import React from 'react';
import {Fragment} from 'react';
import JavaScriptImg from '../../assets/images/javascript.png';
import ReactImg from '../../assets/images/react.png';
import AngularImg from '../../assets/images/angular.png';
import './Footer.css';



const footer = (props)=>(
   <footer>
        <div style={ftContentStyle}>
            <div style={categoryCard} className="categoryCard">
                <div style={cgryTtile}><h2>JavaScript Interview Q&A</h2></div>
                <img src={JavaScriptImg}  style={imgStyle} alt='Javascript'/>
                <div style={cgryContent}><p>
                    JavaScript is the Programming Language for the Web JavaScript can update and change both HTML and CSS
                    JavaScript can calculate, manipulate and validate data</p></div>
            </div>
            <div style={categoryCard} className="categoryCard">
            <div style={cgryTtile}><h2>React JS Interview Q&A</h2></div>
                <img src={ReactImg}  style={imgStyle} alt='React JS'/>
                <div style={cgryContent}><p>ReactJS is an open-source JavaScript library which is used for building user interfaces specifically for single page applications.</p></div>
            </div>
            <div style={categoryCard} className="categoryCard">
            <div style={cgryTtile}><h2>Angular Interview Q&A</h2></div>
                <img src={AngularImg}  style={imgStyle} alt='Angular'/>
                <div style={cgryContent}><p>Javascript is versatile universal programming language</p></div>
            </div>
            
        </div>
        <div style={ftStyle}>
            <p>Posted by: SawSolutions</p>
            <p>Contact information: <a href="mailto:someone@example.com">someone@example.com</a>.</p>
        </div>
   </footer>
);
const ftStyle ={
    width:'100%',
    textAlign:'center',
    backgroundColor:'#e3f6f5',
}
const ftContentStyle={
    width:'100%',
    height:'350px',
    margin:'50px 0px 5px 0px',
    backgroundColor:'rgb(227, 246, 245)',
}

const categoryCard= {
    backgroundColor:'#fff',
    width:'300px',
    height:'300px',
    margin:'25px 25px 10px 100px',
    float:'left',
    boxShadow:'8px 14px 8px 0px rgba(0,0,0,0.2)',
}
const cgryTtile ={
    fontSize:'13px',
    textAlign: 'center',
    marginTop:'6px' ,
    color: 'chocolate',
}
const imgStyle={
    width:'90%',
    height:'100px',
    margin:'14px',
    borderRadius:'12px',
}
const cgryContent ={
    marginLeft:'14px',
    lineHeight:'1.5',
}

export default footer;