import React, { Component } from 'react';

const styles = {
 image: {
    width: 200,
    height: 150,
    alignSelf: 'flex-start',
  }
};

export default class FlipCouponGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {flipped: false, clicked: false};
  }

  flip() {
    this.setState({
      flipped: !this.state.flipped,
      clicked: true
    });
  }

  render() {
    const style = require('./FlipCouponGrid.scss');
    let flippedCSS = this.state.flipped ? 'CardBackFlip' : 'CardFrontFlip';
    if (!this.state.clicked) {
      flippedCSS = '';
    }
    return (
      <div className={style.Card} onClick={this.flip.bind(this)}>
        <div className={style.CardFront + ' ' + style[flippedCSS]}>
          <h3>{this.props.title}</h3><br></br>
          <img src ={this.props.img} style={ styles.image }/>
        </div>
        <div className={style.CardBack + ' ' + style[flippedCSS]}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

FlipCouponGrid.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.element
};
