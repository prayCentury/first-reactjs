import React, { Component } from 'react';
//引入antd 的加载
import {Spin , Switch , Alert } from 'antd';

export default class Loading extends Component{
    state = {
        loading : true
    }

    changeLoadingState = (e) =>{
        this.setState({
            loading: e
        })
    }

    render(){
        let cont ;
        if(1==1){
            cont =
                <Spin spinning={this.state.loading} size="large">
                    <Alert
                        message="上传中..."
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
        }else {
            cont =
                <div>
                    加载控件展示
                </div>
        }
        return(
            <div style={{width:'350px'}}>
                加载组件
                {cont}
                <Switch checked = {this.state.loading} onChange={this.changeLoadingState}/>
            </div>
        )
    }
}