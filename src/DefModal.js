import React from 'react'
import createReactClass  from 'create-react-class'

import { Modal, Button } from 'shineout'

const DefModal =  createReactClass({

  getInitialState(){
    this.state = {
      visible: false,
      content: 1,
    }
    this.show = this.show.bind(this)
  },

  handleOk : () => {
    this.setState({
      visible: false,
      content: this.state.content += 1,
    })
    console.log('clicked ok!')
  },

  handleCancel : () => {
    this.setState({
      visible: false,
      content: this.state.content += 1,
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

export default DefModal;
