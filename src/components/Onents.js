import React from 'react';
import EventProxy from 'eventproxy'

// @see http://taobaofed.org/blog/2016/11/17/react-components-communication/
// @see https://github.com/JacksonTian/eventproxy
// 等价于eventProxy = new EventProxy();
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

    // 构造函数
    constructor() {
        super();
        console.log('组件初始化完毕');
    }

    /**
     * Descriptions: 组件加载 componentWillMount()<p>
     *
     * @see https://fraserxu.me/2014/08/31/react-component-lifecycle/
     * @author SailHe
     * @date 2018/11/30 19:15
     */
    componentWillMount() {
        // 也可以在构造器中绑定事件
        // 订阅者，监听并接收消息
        eventProxy.on('msg', (msg) => {console.log('msg: ' + msg)});
        // 会在组件render之前执行，并且永远都只执行一次。
        console.log('组件加载成功!');
    }

    // 组件加载: componentDidMount()
    componentDidMount() {
        console.log('组件加载完毕 此时可以使用this.getDOMNode()获取Dom')
    }

    // 组件更新 componentWillReceiveProps(object nextProps)
    componentWillReceiveProps(nextProps){
        // 此函数内调用this.setState()方法不会增加一次新的render.
        console.log('组件接收到一个新的prop(初始化render时不会被调用)')
    }

    // boolean shouldComponentUpdate(object nextProps, object nextState)
    shouldComponentUpdate(){
        // 初始化时或者使用forceUpdate时不被执行。
        console.log('组件接收到新的props或者state');
        // 如果shouldComponentUpdate返回false, render()则会在下一个state change之前被完全跳过。
        // (另外componentWillUpdate和 componentDidUpdate也不会被执行)
        // 默认情况下shouldComponentUpdate会返回true.
        return '组件更新' == null ? true : false;
    }

    // 组件更新 componentWillUpdate(object nextProps, object nextState)
    componentWillUpdate(){
        // 在初始化时不会被执行。
        // 一般用在组件发生更新之前。
        console.log('接收到新的props或者state但还没有render时');
    }

    // 组件更新 componentDidUpdate(object prevProps, object prevState)
    componentDidUpdate(){
        // 初始化时不会被执行。一般会在组件完成更新后被使用。例如清除notification文字等操作。
        console.log('组件完成更新后立即执行');
    }

    // 卸载(Unmounting)
    componentWillUnmount(){
        // 在组件从DOM unmount后立即执行.
        console.log('组件已被卸载');
    }

    render() {
        return (
            <button>child2</button>
        );
    }
}
