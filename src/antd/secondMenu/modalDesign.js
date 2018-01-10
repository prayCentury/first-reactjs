import React , {Component} from 'react';
import {Modal , Button , Input} from 'antd';

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
        let inputVal ;
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
                    <Input.Search/>
                    <Button>
                        ninininishuonisuo
                    </Button>
                </Modal>
                <Button type="primary" onClick={this.showModal}>
                    显示对话框
                </Button>{inputVal}
            </div>
        )
    }
}