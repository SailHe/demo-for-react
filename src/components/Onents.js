import React from 'react';
import EventProxy from 'eventproxy'

// @see http://taobaofed.org/blog/2016/11/17/react-components-communication/
// @see https://github.com/JacksonTian/eventproxy
// 等价于eventProxy = new EventProxy();
const eventProxy = EventProxy.create();

/**
 * Descriptions: 组件生命周期演示 组件<p>
 *
 * @see https://fraserxu.me/2014/08/31/react-component-lifecycle/
 * @author SailHe
 * @date 2018/11/30 19:15
 */
class LifeCircleLog extends React.Component {

    // 构造函数
    constructor(props) {
        super(props);
        this.state = {willLog: false};
        const {willLog} = this.state;
        if(willLog) console.log('组件初始化完毕');
    }

    // 组件加载 componentWillMount()
    componentWillMount() {
        // 会在组件render之前执行，并且永远都只执行一次。
        const {willLog} = this.state;
        if(willLog) console.log('组件加载成功!');
    }

    // 组件加载: componentDidMount()
    componentDidMount() {
        const {willLog} = this.state;
        if(willLog) console.log('组件加载完毕 此时可以使用this.getDOMNode()获取Dom')
    }

    // 组件更新 componentWillReceiveProps(object nextProps)
    componentWillReceiveProps(nextProps){
        // 此函数内调用this.setState()方法不会增加一次新的render.
        const {willLog} = this.state;
        if(willLog) console.log('组件接收到一个新的prop(初始化render时不会被调用)')
    }

    // boolean shouldComponentUpdate(object nextProps, object nextState)
    shouldComponentUpdate(){
        // 初始化时或者使用forceUpdate时不被执行。
        const {willLog} = this.state;
        if(willLog) console.log('组件接收到新的props或者state');
        // 如果shouldComponentUpdate返回false, render()则会在下一个state change之前被完全跳过。
        // (另外componentWillUpdate和 componentDidUpdate也不会被执行)
        // 默认情况下shouldComponentUpdate会返回true.
        return '组件更新' == null ? true : false;
    }

    // 组件更新 componentWillUpdate(object nextProps, object nextState)
    componentWillUpdate(){
        // 在初始化时不会被执行。
        // 一般用在组件发生更新之前。
        const {willLog} = this.state;
        if(willLog) console.log('接收到新的props或者state但还没有render时');
    }

    // 组件更新 componentDidUpdate(object prevProps, object prevState)
    componentDidUpdate(){
        // 初始化时不会被执行。一般会在组件完成更新后被使用。例如清除notification文字等操作。
        const {willLog} = this.state;
        if(willLog) console.log('组件完成更新后立即执行');
    }

    // 卸载(Unmounting)
    componentWillUnmount(){
        // 在组件从DOM unmount后立即执行.
        const {willLog} = this.state;
        if(willLog) console.log('组件已被卸载');
    }

    render() {
        return (
            <div>LifeCircleLog</div>
        );
    }
}

/**
 * Descriptions: 用于 * 组件间的通信: onents测试
 * 组件间通信: inter-component communication icc<p>
 *     继承关系上的子类
 *
 * @author SailHe
 * @date 2018/11/30 18:17
 */
export default class Parent extends React.Component{

    state = {
        msg: 'start-父组件的消息'
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                msg: 'end-父组件的消息'
            });
        }, 1000);
    }

    render() {
        const {msg} = this.state;
        return (
            <div>
                <Child1 msg={msg} />
                <Child2 />

                <AnnouncerBtn1 />
                <AnnouncerBtn2 />
                <LifeCircleLog />
            </div>
        );
    }
}

// Dom从属关系上的子元素(子组件)
class Child1 extends React.Component{

    componentDidMount() {
        // 组件加载完毕 后个一段时间发送
        setTimeout(() => {
            // 发布 msg 事件
            eventProxy.trigger('msg', 'end-发布自Child1');
        }, 3000);
    }

    componentDidUpdate() {
        console.log('Child1 更新');
    }

    render() {
        return <p>{'Child1 ' + this.props.msg}</p>
    }
}

class Child2 extends React.Component{
    state = {
        msg: 'start-Child2的消息'
    };

    // 组件加载完毕
    componentDidMount() {
        // 也可以在构造器中绑定事件
        // 订阅者，监听并接收消息

        // 监听 msg 事件
        eventProxy.on('msg', (msg) => {
            this.setState({
                msg
            });
        });
    }

    componentDidUpdate() {
        console.log('Child2 更新');
    }

    render() {
        const {msg} = this.state;
        return <div>
            <p>child2 {msg}</p>
            <Child21 msg={msg}/>
        </div>
    }
}

class Child21 extends React.Component{

    componentDidUpdate() {
        console.log('Child21 更新');
    }

    render() {
        const {msg} = this.props;
        return <div>
            <p>child21 {msg}</p>
        </div>
    }
}


class AnnouncerBtn1 extends React.Component {

    sendMsg() {
        // 发布者1，发出消息
        eventProxy.trigger('msg', '点击消息-child1B');
    }

    render() {
        return (
            <button onClick={this.sendMsg}>AnnouncerBtn1</button>
        );
    }
}

class AnnouncerBtn2 extends React.Component {

    sendMsg() {
        // 发布者2，发出消息
        eventProxy.trigger('msg', '点击消息-child2B');
    }

    render() {
        return (
            <button onClick={this.sendMsg}>AnnouncerBtn2</button>
        );
    }
}
