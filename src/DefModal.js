import React from 'react'
import createReactClass from 'create-react-class'

import {Modal, Button} from 'shineout'
import * as ReactDOM from "react-dom";

// 入门教程
// @see https://react.docschina.org/docs/components-and-props.html
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const WelcomeElement = <Welcome name="React World!" />;

ReactDOM.render(
    WelcomeElement,
    document.getElementById('root')
);

/**
 * Descriptions: 创建组件<p>
 *
 * @see https://reactjs.org/blog/2017/04/07/react-v15.5.0.html
 * @author SailHe
 * @date 2018/11/28 9:34
 */
const DefModal = createReactClass({
    mixins: [1],
    constructor() {
        this.setState({
            value: null,
        });
    },

    /**
     * Descriptions: 状态初始化<p>
     *
     * 通过使用getInitialState方法定义组件的初始state属性。
     * 在组件完成加载之后，我们可以通过setState方法来改变我们设置的属性的值。
     * @see https://fraserxu.me/2014/08/26/react-state-basics/
     * @author SailHe
     * @date 2018/11/28 9:33
     */
    getInitialState() {
        // http://eslint.cn/docs/rules/object-shorthand
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        this.setState({
            visible: false,
            content: 1,
        });
        this.show = this.show.bind(this);
        // debugger;
        return {
            visible: false,
            content: 1,
        };
    },

    /* getState: () =>{
        // this 指外部对象 (lambda函数对象内没有this)
        return this.state;
    }, */

    handleOk: () => {
        this.setState({
            visible: false,
            content: this.state.content + 1,
        })
        console.log('clicked ok!')
    },

    handleCancel: () => {
        this.setState({
            visible: false,
            content: this.state.content + 1,
        })
        console.log('clicked cancel')
    },

    show() {
        this.setState({
            visible: true,
        })
    },

    render() {
        return (
            <div>
                <Button onClick={this.show}>[click me]</Button>
                <Modal
                    visible={this.state.visible}
                    width={500}
                    title="Modal Title12"
                    onClose={this.handleCancel}
                    footer={[
                        <Button key="cancel" onClick={this.handleCancel}>Cancel</Button>,
                        <Button key="ok" type="primary" onClick={this.handleOk}>Ok</Button>,
                    ]}
                >
                    {`you are visited ${this.state.content}`}
                </Modal>
            </div>
        )
    },
})

export default {DefModal};
