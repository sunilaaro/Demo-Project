import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import InterviewQuestions from '../../components/InterviewQuestions/InterviewQuestions';

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
            ],
           
        }
    }
       
    render() {
        return (
             <Aux>
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
export default ContainBuilder;