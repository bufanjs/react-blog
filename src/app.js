import React from 'react';
import ReactDOM from 'react-dom';
import Hello from 'mycommon/hello'
import styles from './app.less';

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className={styles.main}>
                <h1>hello</h1>
                <Hello/>
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('Ya-app'));
