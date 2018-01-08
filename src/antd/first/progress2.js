import React, { Component } from 'react';
import {Progress , Button} from 'antd';

const ButtonGroup = Button.Group;

export default class Progress2 extends Component{
    state = {
        value:0
    }

    componentDidMount(){
        setInterval(() =>  {
            if(this.state.value < 100){
                this.setState({
                    value: this.state.value + 1
                })
            }else {
                this.setState({
                    value: 0
                })
            }
        },100)
    }

    decline = () => {
        if(this.state.value > 0){
            this.setState({
                value: this.state.value - 10
            })
        }else {
            this.setState({
                value: 0
            })
        }
    }

    increase = () => {
        if(this.state.value < 100){
            this.setState({
                value: this.state.value + 10
            })
        }else {
            this.setState({
                value: 100
            })
        }

    }
    render(){
        return(
            <div style={{width:'90%'}}>
                进度条组件
                <Progress
                    percent={this.state.value}
                    size="small"
                />
                <Progress type="dashboard" percent={this.state.value} />
                <Progress
                    type="circle"
                    gapDegree={90}
                    gapPosition="bottom"
                    percent={this.state.value}

                />
                <Progress type="circle" percent={this.state.value} format={percent => `${percent} Days`} />
                <br/>
                <ButtonGroup>
                    <Button onClick={this.decline} icon="minus" />
                    <Button onClick={this.increase} icon="plus" />
                </ButtonGroup>
            </div>
        )
    }
}