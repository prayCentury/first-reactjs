import React, { Component } from 'react';
import moment from 'moment';
import { Icon , DatePicker ,LocaleProvider ,Input  }  from 'antd';
import 'moment/locale/zh-cn';
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
                    展示props:{this.props.secondProps.c}
                </div>
                <div className="cardBox" style={{flex:1,backgroundColor:'#bae7ff'}}>3</div>
                <div className="cardBox" style={{flex:1,backgroundColor:'rgba(0, 0, 0, 0.25)'}}>4</div>
            </div>
        )
    }
}