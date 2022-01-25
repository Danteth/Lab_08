import React, { Component } from "react";
import "./Contents.css";
import jsonData from '../res/text.json';



class Contents extends Component{

    constructor(){
        super()
        this.state = {msg: 'Hey, guess who are hiding from another side?'};
        this.txtData = () => JSON.parse(JSON.stringify(jsonData));
        const imgContext = require.context('../res/', false, /\.png$/);
        let img = {};
        this.imgs = imgContext.keys().reduce( (icons, file) =>{
            const cname = imgContext(file);
            const label = file.slice(2, -4);
            img[label] = cname;
            return img;
        },{});
    }
    changeMsg1(){
        this.setState({msg: 'Leeeeeeeeeeeeeeeeeroy Jenkins'});
        console.log('Przycisk został naciśnięty');
    }
    changeMsg2(){
        this.setState({msg: 'Hey, guess who are hiding from another side?'});
        console.log('Przycisk został naciśnięty');
    }
    render(){
        const items = [];
        for(let i=0; i<this.txtData().count; i++){
            let value = this.txtData().text[i];
            items.push(
                <div className="contentsFlex" key ={Math.random()} >
                    <img className="contentsFlexImg" src={this.imgs['img'+(i+1)]} alt="zdj"/>
                    <p className="contentsFlexTxt">{value}</p>
                </div>
            );
        }
        return(
            <div className="contentsDivClass">
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changeMsg1()}onDoubleClick={()=>this.changeMsg2()}>Click to see a message</button>
                {items}
            </div>
        )
    }
}

export default Contents