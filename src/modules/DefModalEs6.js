import React from 'react'
import {Modal, Button} from 'shineout'

/**
 * Descriptions: ES6语法创建组件<p>
 *
 * @see https://reactjs.org/blog/2017/04/07/react-v15.5.0.html
 * 在ES6语法中: class Comments extends React.Component 在这里您必须定义自己的构造函数。
 * @author SailHe
 * @date 2018/11/28 21:21
 */
class DefModalEs6 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            content: 1,
        }
        this.show = this.show.bind(this)
    }

    show() {
        this.setState({
            visible: true,
        })
    }

    handleOk = () => {
        this.setState({
            visible: false,
            content: this.state.content + 1,
        })
        console.log('clicked ok!')
    }

    handleCancel = () => {
        this.setState({
            visible: false,
            content: this.state.content + 1,
        })
        console.log('clicked cancel')
    }

    render() {
        return (
            <div>
                <Button onClick={this.show}>click me</Button>
                <Modal
                    visible={this.state.visible}
                    width={500}
                    title="Modal Title"
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
    }
}

export default DefModalEs6;
