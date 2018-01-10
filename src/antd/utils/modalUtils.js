import React, { Component } from 'react';
import { Modal } from 'antd';


export const ModalUtils = (modalConfig,divContent)=>{
    return
    <Modal
        {...modalConfig}
    >
        {divContent}
    </Modal>
}