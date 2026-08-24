import React from 'react';

export function HelloWorld(){
  return <h1>Hello World!</h1>;
}

export const Hello = () => {
    return <h2>Hello Arrow Function</h2>
}

export class HelloWorld2 extends React.Component {
    render() {
        return <h3>Hello World Class</h3>
    }
}