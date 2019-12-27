import React from 'react'
import './Navigation.css'

const  Navigation = (props)=> {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="">About</a></li>
                    <li className="dropDown">
                        <a href="">Tech Interview</a>
                        <ul className="dropDownList">
                            <a href="">JavaScript</a>
                            <a href="">React JS</a>
                            <a href="">Angular</a>
                            <a href="">Vue JS</a>
                            <a href="">Node JS</a>
                            <a href="">Express JS</a>
                            <a href="">PHP</a>
                            <a href="">Java</a>
                            <a href="">.Net & C#</a>
                            <a href="">Python</a>
                        </ul>
                    </li>
                    <li><a href="">Article</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Singup</a></li>
                </ul>
                
            </nav>
        </div>
    )
}
export default Navigation;