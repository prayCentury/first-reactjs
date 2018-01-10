import React, { Component } from 'react';
import { Table, Button ,Modal} from 'antd';
import {listUtils} from '../utils/listUtils';

const data = [];
for (let i = 0; i < 46; i++) {
    if((i%2) == 0){
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
            sex:'male',
        });
    }else {
        data.push({
            key: i,
            name: `Edward King ${i}`,
            age: 32,
            address: `London, Park Lane no. ${i}`,
            sex:'female',
        });
    }

}

const dataVal = {
    columns:[{
        title: 'Name',
        dataIndex: 'name',
        // render : text => <a href='#' code='1'>{text}</a>,
        render : (a,b,c)=>{
            return <a code={c}> {a} </a>
        },
        className:'listYs',
        filters: [
            { text: 'King', value: 'King' },
            { text: 'Edward', value: 'Edward' },
            { text: '1', value: 'Edward King 1' },
        ],
        onFilter: (value, record) => record.name.indexOf(value) === 0,
    }, {
        title: 'Sex',
        dataIndex: 'sex',
        filters: [
            { text: 'male', value: 'male' },
            { text: 'female', value: 'female' },
        ],
        onFilter: (value, record) => record.sex.indexOf(value) === 0,
    }, {
        title: 'Age',
        dataIndex: 'age',
    }, {
        title: 'Address',
        dataIndex: 'address',
    }],
    dataSource:data
}

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
    }),
};

export default class ListComp extends Component{

    state = {
        show : false
    }
    // handleOk = () => {
    //     this.setState({
    //         show:true
    //     })
    // }

    render(){
        return(
            <div>
                {/*{listUtils(rowSelection,dataVal)}*/}
                {/*<div className="flexBox">*/}
                    {/*<div style={{flex:1,backgroundColor:'blue'}}>2</div>*/}
                    {/*<div className="cardBox" style={{flex:1,backgroundColor:'yellow'}}>3</div>*/}
                    {/*<div className="cardBox" style={{flex:1,backgroundColor:'green'}}>4</div>*/}
                {/*</div>*/}
                <div style={{marginTop:'50'}}>
                    <Table rowSelection={rowSelection} columns={dataVal.columns} dataSource={dataVal.dataSource} />
                </div>
            </div>
        )
    }
}