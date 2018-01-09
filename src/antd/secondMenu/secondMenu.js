import React, { Component } from 'react';



export default class SecondMenu extends Component {
    render() {
        return (
            <div className="flexBox">
                <div style={{display:'flex',flex:1,flexDirection:'column'}}>
                    <div style={{flex:1}}>1</div>
                    <div style={{flex:1}}>2</div>
                    <div style={{flex:1}}>3</div>
                </div>
                <div className="cardBox" style={{flex:1,backgroundColor:'blue'}}>2</div>
                <div className="cardBox" style={{flex:1,backgroundColor:'yellow'}}>3</div>
                <div className="cardBox" style={{flex:1,backgroundColor:'black'}}>4</div>
            </div>
        )
    }
}