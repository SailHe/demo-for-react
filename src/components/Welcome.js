import React from 'react';

// 入门教程 React HelloWorld
// @see https://react.docschina.org/docs/components-and-props.html
// 函数式无状态组件
function Welcome(props) {
    // return <h1>Hello, {props.name}</h1>;
    // destructuring-assignment
    // 此处是结构props对象为name
    // @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const {name} = props;
    return <h1>Hello, {name}</h1>;
}

export default Welcome;
