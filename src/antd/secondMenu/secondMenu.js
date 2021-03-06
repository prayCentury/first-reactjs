import React, { Component } from 'react';
import moment from 'moment';
import ModalDesign from './modalDesign';
import { Icon , DatePicker ,LocaleProvider ,Input  }  from 'antd';
import 'moment/locale/zh-cn';

import {modalUtils }from '../utils/modalUtils';
const Search = Input.Search;


const dateFormat = 'YYYYMMDD';

export default class SecondMenu extends Component {
    state = {
        data: '',
        customerCode:''
    }



    componentDidMount(){
        console.log(this.state);
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    changeDate = (event,data) =>{
        console.info(data > '2018-01-01');
        this.setState({
            data:data,
        })
    }

    render() {
        const {a,b}  = this.props
        return (
            <div className="flexBox">
                <div style={{display:'flex',flex:1,flexDirection:'column',backgroundColor:'#5cdbd3'}}>
                    <div style={{flex:1}}>
                        time choose:
                        {/*<LocaleProvider local="zh-cn">*/}
                            <DatePicker
                                // showTime
                                // defaultValue={moment(this.state.data, dateFormat)}
                                onChange={this.changeDate}
                                placeholder="输入日期"
                            >
                            </DatePicker>
                        {/*</LocaleProvider>*/}
                        <br/>
                        <Search
                            placeholder="输入客户号"
                            onSearch={value =>  this.setState({customerCode:value}) }
                            enterButton = "确定"
                        />
                    </div>
                    <div style={{flex:1}}><Icon type="apple"/></div>
                    <div style={{flex:1}}>{this.state.data}{this.state.customerCode}</div>
                </div>
                <div className="cardBox" style={{flex:1,backgroundColor:'#5cdbd3'}}>
                    展示props:{a+b}
                </div>
                <div className="cardBox" style={{flex:1,backgroundColor:'#bae7ff'}}>
                    对话框modal:
                    <br/>
                    <ModalDesign/>
                </div>
                <div className="cardBox" style={{flex:1,backgroundColor:'rgba(0, 0, 0, 0.25)'}}>
                    4444

                </div>
            </div>
        )
    }
}