import React, { Component } from 'react';
import { Table, Button } from 'antd';
import {listUtils} from '../utils/listUtils';

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

const dataVal = {
    columns:[{
        title: 'Name',
        dataIndex: 'name',
        // render : text => <a href='#' code='1'>{text}</a>,
        render : (a,b,c)=>{
            console.log(a);
            console.log(b);
            console.log(c);
            return <a code={c}>{a}</a>
        },
    }, {
        title: 'Age',
        dataIndex: 'age',
        display:false
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



    render(){
        return(
            <div>
                {/*{listUtils(rowSelection,dataVal)}*/}
                <Table rowSelection={rowSelection} columns={dataVal.columns} dataSource={dataVal.dataSource} />
            </div>
        )
    }
}