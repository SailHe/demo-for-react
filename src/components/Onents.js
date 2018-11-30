import React from 'react';
import EventProxy from 'eventproxy'

//等价于eventProxy = new EventProxy();
const eventProxy = EventProxy.create();

/**
 * Descriptions: 用于 * 组件间的通信: onents测试
 * 组件间通信: inter-component communication icc<p>
 *
 * @author SailHe
 * @date 2018/11/30 18:17
 */
export default class Parent extends React.Component{
    state = {
        msg: 'start'
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                msg: 'end'
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <Child1 />
                <Child2 />

                <Child1B />
                <Child2B />
            </div>
        );
    }
}
// componentDidUpdate 与 render 方法与上例一致
class Child1 extends React.Component{
    componentDidMount() {
        setTimeout(() => {
            // 发布 msg 事件
            eventProxy.trigger('msg', 'end');
        }, 1000);
    }
    render() {
        return <p>{this.props.msg}</p>
    }
}

class Child21 extends React.Component{
    componentDidUpdate() {
        console.log('Child_2_1 update');
    }

    render() {
        return <div>
            <p>child_2_1 component</p>
        </div>
    }
}

// componentDidUpdate 方法与上例一致
class Child2 extends React.Component{
    state = {
        msg: 'start'
    };

    componentDidMount() {
        // 监听 msg 事件
        eventProxy.on('msg', (msg) => {
            this.setState({
                msg
            });
        });
    }

    render() {
        return <div>
            <p>child_2 component: {this.state.msg}</p>
            <Child21 />
        </div>
    }
}

class Child1B extends React.Component {

    sendMsg() {
        // 发布者，发出消息
        eventProxy.trigger('msg', 'child1被点击');
    }
    render() {
        return (
            <button onClick={this.sendMsg}>child1</button>
        );
    }
}

class Child2B extends React.Component {

    constructor() {
        super();
        // 订阅者，监听并接收消息
        eventProxy.on('msg', (msg) => {console.log('msg: ' + msg)});
    }

    render() {
        return (
            <button>child2</button>
        );
    }
}
