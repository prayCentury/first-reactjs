import React, { Component } from 'react';
import Loading from './loading';
import Progress2 from './progress2';
import SelectComp from './selectComp';
import ListComp from './listComp';

const ys  = {
    float:'left',
    flex:1
}

export default class FirstMenu extends Component{
    render(){
        return(
            <div>
                <div style={{display:'flex',flex:1}}>
                    <div style={{...ys}}>
                        <Loading/>
                    </div>
                    <div style={{...ys}}>
                        <Progress2/>
                    </div>
                    <div style={{...ys}}>
                        <SelectComp/>
                    </div>
                </div>
                <hr/>
                <div>
                    <ListComp/>
                </div>
            </div>
        )
    }
}