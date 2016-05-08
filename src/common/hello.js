import React from 'react';
import styles from './hello.less';

export default class hello extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.hello}>aaa component</div>
        );
    }
}
