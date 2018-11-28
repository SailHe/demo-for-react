import React from 'react'
import createReactClass from 'create-react-class'
import {Modal, Button} from 'shineout'

/**
 * Descriptions: ES5语法创建组件<p>
 *
 * @see https://stackoverflow.com/questions/43607279/reactclassinterface-you-are-attempting-to-define-constructor-on-your-componen
 * 在ES5语法中: const Comments = React.createClass 不需要定义构造函数。createClass为你定义
 * @author SailHe
 * @date 2018/11/28 9:34
 */
const DefModalEs5 = createReactClass({
    /* mixins: [1],
    constructor() {
        this.setState({
            value: null,
        });
    }, */

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
        this.show = this.show.bind(this);
        // debugger;
        return {
            visible: false,
            content: 1,
        };
    },

    handleOk: () => {
        // this 指外部对象 (lambda函数对象内没有this) ?
        this.setState({
            visible: false,
            content: this.state.content + 1,
        })
        console.log('clicked ok!')
    },

    handleCancel: () => {
        // debugger;
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
                <Button onClick={this.show}>click me-ES5</Button>
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

export default DefModalEs5;
