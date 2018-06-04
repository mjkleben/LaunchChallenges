import React from 'react';


const styles = {
    paperContainer: {
        height: 1356,
        backgroundImage: `url(${"zodiac.png"})`
    }
};

export default class Home extends React.Component {
    render() {
        return (
            <div style={styles.paperContainer}>
            </div>
        )
    }
}