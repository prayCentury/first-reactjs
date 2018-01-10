import React , {Component} from 'react';
import {Modal , Button , Input} from 'antd';
import ListComp from '../first/listComp';
import {ModalUtils }from '../utils/modalUtils';

export default class ModalDesign extends Component{
    state = {
        visible:false
    }

    showModal = () => {
        this.setState({
            visible:true
        })
    }

    handleOk = (e) =>{
        console.log(e)
        this.setState({
            visible:false
        })
    }

    handleCancel = () =>{
        this.setState({
            visible:false
        })
    }

    render(){
        return(
            <div>
                <Modal
                    closable={false}
                    visible={this.state.visible}
                    okText="确定"
                    onOk={this.handleOk.bind(this)}
                    onCancel={this.handleCancel}
                    mask={false}
                    maskClosable={false}
                    // width={800}
                >
                    <Input onChange={val=> console.log(val)}/>
                    <ListComp/>
                </Modal>
                <Button type="primary" onClick={this.showModal}>
                    显示对话框
                </Button>

                {/*<ModalUtils a="a"></ModalUtils>*/}

                <Button type="primary">
                    显示对话框
                </Button>


            </div>
        )
    }
}