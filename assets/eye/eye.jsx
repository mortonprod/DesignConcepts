import React, { Component } from 'react';
import * as ReactDOM from "react-dom";
import redEye from './red_eye.svg';
import closedEye from './closed_eye.svg';
import openFullRedEye from './eye_open_full_red.svg';
import openLessRedEye from './eye_less_red.svg';
import openEye from './eye_open.svg';
import close1Eye from './eye_close1.svg';
import close2Eye from './eye_close2.svg';
import close3Eye from './eye_close3.svg';
import close4Eye from './eye_close4.svg';
import close5Eye from './eye_close5.svg';
import close6Eye from './eye_close6.svg';
import close7Eye from './eye_close7.svg';
import close8Eye from './eye_close8.svg';
import arrow from './arrow.svg';
import Vivus from 'vivus';
import box from './box.svg';
import head from './head.svg';
import "./eye.css";
function Eye(){
    return (
        <BoxTL isOver={true} className={"eye"} classContainer={"eye__box"} name="box" duration={200} src={box} type="delayed">
            <img src={closedEye} className="eye__image eye__image--delay0" alt="logo" />
            <img src={openFullRedEye} className="eye__image eye__image--delay1" alt="logo" />
            <img src={openLessRedEye} className="eye__image eye__image--delay2" alt="logo" />
            <img src={openEye} className="eye__image eye__image--delay3" alt="logo" />
            <img src={close1Eye} className="eye__image eye__image--delay4" alt="logo" />
            <img src={close2Eye} className="eye__image eye__image--delay5" alt="logo" />
            <img src={close3Eye} className="eye__image eye__image--delay6" alt="logo" />
            <img src={close4Eye} className="eye__image eye__image--delay7" alt="logo" />
            <img src={close5Eye} className="eye__image eye__image--delay8" alt="logo" />
            <img src={close6Eye} className="eye__image eye__image--delay9" alt="logo" />
            <img src={close7Eye} className="eye__image eye__image--delay10" alt="logo" />
            <img src={head} className={"eye__image eye__image--delay11 "} alt="logo" />
        </BoxTL>
    )
}
let isMounted = false;
class BoxTL extends Component {
  componentDidMount(){
    isMounted = false;
  }
  render() {
        let box = null;
        if(!isMounted){
            box = (
                <object src={this.props.src} 
                    ref={() => {
                        new Vivus(this.props.name,{duration:this.props.duration,start:"autostart",file:this.props.src}); 
                    }} 
                    className="box__image" id={this.props.name}>
                </object>
            )
        }else{
            box = (
                <img src={this.props.name} className={"box__image"} alt="box"/>
            )
        }
    let comp = null;
    if(!this.props.isOver){
        comp =  (
            <div>
                {box}
                {
                    React.Children.map(this.props.children, (child, i) => {
                        return child
                    })
                }
            </div>
            )
        
    }else{
            comp = (
              <div>
                {
                    React.Children.map(this.props.children, (child, i) => {
                        return child
                    })
                }
                {box}
              </div>
              
            )
        

    }
    return (
      <div className={this.props.classContainer}>
        {comp}
      </div>
    );
  }
}

ReactDOM.render(<Eye/>,document.getElementById('root'));
