import React from 'react';
import book from '../assets/book.svg';
import chart from '../assets/chart.svg';
import gear from '../assets/gear.svg';
import play from '../assets/play.svg';
// import plus from '../assets/plus.svg';
import stack from '../assets/stack.svg';

export default class Menu extends React.Component {
    
    render() {
        return (
            <div className="header-menu">
                <img src={book} className="book-icon" alt="book" />
                <img src={chart} className="chart-icon" alt="chart" />
                <img src={gear} className="gear-icon" alt="gear" />
                <img src={play} className="play-icon" alt="play" />
                <img src={stack} className="stack-icon" alt="stack" />
            </div>
        )
    }
}