import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox , Select} from 'antd';
const FormItem = Form.Item;
const FormItem2 = Form.Item;
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

export default class FifthMenu2 extends Component {

    componentDidMount (){
        ret = value.map(function (val) {
            return <Option key={val.code}>{val.cn}</Option>;
        })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if(values.userName === ('aa') && values.password === ('aa')){
                    console.log(values.userName);
                    alert(33);
                }
            }
        });
    }

    handleSubmit2 = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                if(values.userName === ('aa') && values.password === ('aa')){
                    console.log(values.userName);
                    alert(33);
                }
            }
        });
    }

    handleChange = (key) =>{
        console.log(key);
    }


    render() {

        const { getFieldDecorator } = this.props.form;

        return (
            <div className="flexBox">
                <div style={{flex:1}}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password </a>

                            Or <a href="">register now!</a>
                            <br/>
                            <div style={{textAlign:'center'}}>
                                <Button type="primary" htmlType="submit" style={{width:'300px'}} className="login-form-button">
                                    Log in
                                </Button>
                            </div>
                        </FormItem>
                    </Form>
                </div>
                <div style={{flex:3,textAlign:'center'}}>
                    <Form onSubmit={this.handleSubmit2}>
                        <FormItem2>
                            {getFieldDecorator('provence', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Select
                                    showSearch
                                    // mode="tags"
                                    style={{ width: 200 }}
                                    placeholder="Select a provence"
                                    onChange={this.handleChange}
                                >
                                    {ret}
                                </Select>
                            )}
                        </FormItem2>
                        <FormItem2>
                            <Button  htmlType="submit" >
                                确定
                            </Button>
                        </FormItem2>
                    </Form>
                </div>
            </div>
        );
    }
}

export const FifthMenu = Form.create()(FifthMenu2);