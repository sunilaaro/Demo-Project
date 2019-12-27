import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import InterviewQuestions from '../../components/InterviewQuestions/InterviewQuestions';
import HeaderImg from '../../assets/images/react.png';

class ContainBuilder extends Component {
    constructor(props){
        super(props);

        this.state ={
            QuestAnswr:[
                 {id:'1',question:'What is React?', type:'React',
                 answare:'ReactJS is an open-source JavaScript library which is used for building user interfaces specifically for single page applications. Its used for handling view layer for web and mobile apps. React also allows us to create reusable UI components.'},
                 {id:'2',question:'What are the major features of React?', type:'React',
                 answare:
                 'The major features of React are:It uses VirtualDOM instead RealDOM considering that RealDOM manipulations are expensive.Suports server-side rendering Follows Unidirectional data flow or data binding.Uses reusable composable UI components to develop the view.'},
                 {id:'3',question:'What is JSX?', type:'React',
                 answare:
                 'JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML). Basically it just provides syntactic sugar for the React.createElement() function, giving us expressiveness of JavaScript along with HTML like template syntax.'},
                 {id:'4',question:'What is the difference between Element and Component?', type:'React',
                 answare:
                 'An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.'},
                 {id:'5', question:'How to create component in React?', type:'React',
                 answare:'There are two possible ways to create a component. Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements:function Greeting({ message }) { return <h1>{`Hello, ${message}`}</h1>} Cass Components: You can also use ES6 class to define a component. The above function component can be written as:class Greeting extends React.Component {render() {return <h1>{`Hello, ${this.props.message}`}</h1>}}'},
                 {id:'7', question:'What are the differences between a class component and functional component?', type:'React',
                 answare:'Class components allows you to use additional features such as local state and lifecycle hooks. Also, to enable your component to have direct access to your store and thus holds state.When your component just receives props and renders them to the page, this is a stateless component, for which a pure function can be used. These are also called dumb components or presentational components.'},
                 {id:'8', question:'What are refs used for in React?', type:'React',
                 answare:'Refs are an escape hatch which allow you to get direct access to a DOM element or an instance of a component. In order to use them you add a ref attribute to your component whose value is a callback function which will receive the underlying DOM element or the mounted instance of the component as its first argument.'},
                 {id:'9', question:'Describe how events are handled in React?', type:'React',
                 answare:'In order to solve cross browser compatibility issues, your event handlers in React will be passed instances of SyntheticEvent, which is React’s cross-browser wrapper around the browser’s native event. These synthetic events have the same interface as native events you’re used to, except they work identically across all browsers. What’s mildly interesting is that React doesn’t actually attach events to the child nodes themselves. React will listen to all events at the top level using a single event listener. This is good for performance and it also means that React doesn’t need to worry about keeping track of event listeners when updating the DOM.'},
                 
            ],
           
        }
    }
       
    render() {
        return (
             <Aux>
                <div style={tHStyle}>
                    <img src={HeaderImg} alt="" style={techImg}/>
                    <h1 style={{marginRight:'70px',}}>React JS Interview Q & A</h1>
                </div>
                <hr style={{width:"50%", margin:"auto", marginTop:'35px',}} />
             {this.state.QuestAnswr.map((qusAns)=>{
                 return <InterviewQuestions
                            key={qusAns.id} 
                            question={qusAns.question}
                            answare={qusAns.answare}
                            
                        />
              })}
             </Aux>
        )
    }
}
const tHStyle={
    width:'50%',
    margin:'25px auto',
    color:'chocolate',
    textAlign:'center',
      
}
const techImg ={
    width:'80px',
    float:'left',
    marginLeft:'50px',
    borderRadius:'40%',
    border:'3px solid chocolate',
}
export default ContainBuilder;