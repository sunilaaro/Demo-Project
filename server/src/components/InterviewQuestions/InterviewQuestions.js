import React, {Component} from 'react';
import './InterviewQuestions.css';
class InterviewQuestions extends Component{
    constructor(props){
        super(props);
        this.state={
            showAns:false,
        }
    }
    showAnsHandel = () =>{
        const doesShow = this.state.showAns;
        this.setState({
          showAns: !doesShow
        })
        console.log(doesShow);
      }
    render(){

           if(this.state.showAns){
                return(
                    <div className="conatinerBox">
                    <div className="qustBox">
                        <div className="question" onClick={this.showAnsHandel}><h3>{this.props.question}</h3>
                        {this.state.showAns ? <span onClick={this.showAnsHandel}>+</span>:<span onClick={this.showAnsHandel}>-</span>}
                        </div>
                       
                        <div className="answere">
                        
                            <p>
                                {this.props.answare}
                            </p>
                            
                        </div>
                    </div>
                </div>
                );
            }
            return(
                <div className="conatinerBox">
                    <div className="qustBox">
                        <div className="question" onClick={this.showAnsHandel}><h3>{this.props.question}</h3>
                        <span onClick={this.showAnsHandel}>-</span></div>
                       
                    </div>
                </div>
            );
        
    }
}
export default InterviewQuestions;