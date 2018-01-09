import React, { Component } from 'react';
import { Table, Button } from 'antd';


export const listUtils = (rowSelection,dataVal)=>{
    return <Table rowSelection={rowSelection} columns={dataVal.columns} dataSource={dataVal.dataSource} />
}