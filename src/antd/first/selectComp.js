import React, { Component } from 'react';
import { Select } from 'antd';
import { Cascader  } from 'antd';

const Option = Select.Option;
const value = [
    {"code":"beijing","cn":"北京"},
    {"code":"shanghai","cn":"上海"},
    {"code":"tianjin","cn":"天津"},
    {"code":"chongqing","cn":"重庆"},
    {"code":"hebei","cn":"河北"},
    {"code":"shanxi","cn":"山西"},
    {"code":"henan","cn":"河南"},
    {"code":"liaoning","cn":"辽宁"},
    {"code":"jilin","cn":"吉林"},
    {"code":"heilongjiang","cn":"黑龙江"},
    {"code":"neimenggu","cn":"内蒙古"},
    {"code":"jiangsu","cn":"江苏"},
    {"code":"shandong","cn":"山东"}
];


let ret ;

//级联选择
const options = [{
    value: 'Zhejiang',
    label: '浙江',
    children: [{
        value: 'hangzhou',
        label: '杭州',
        children: [{
            value: 'xihu',
            label: '西湖',
        }],
    }],
}, {
    value: 'jiangsu',
    label: '江苏',
    children: [{
        value: 'nanjing',
        label: '南京',
        children: [{
            value: 'zhonghuamen',
            label: '中华门',
        }],
    },{
        value: 'nanjing2',
        label: '南京2',
        children: [{
            value: 'zhonghuamen2',
            label: '中华门2',
        }],
    }],
}];

export default class SelectComp extends Component{

    componentDidMount (){
        ret = value.map(function (val) {
            return <Option key={val.code}>{val.cn}</Option>;
        })
    }

    handleChange = (key) =>{
        console.log(key);
    }

    render(){
        return(
            <div>
                Select选择器
                <br/>
                1.带搜索框
                <br/>
                <Select
                    showSearch
                    mode="tags"
                    style={{ width: 200 }}
                    placeholder="Select a provence"
                    onChange={this.handleChange}
                >
                    {ret}
                </Select>
                <br/>
                2.级联选择
                <br/>
                <Cascader
                    showSearch
                    options={options}
                    expandTrigger="hover"
                    style={{width:'200px'}}
                    onChange={this.handleChange}
                >

                </Cascader>
            </div>
        )
    }
}