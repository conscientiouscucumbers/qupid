import React, { Component } from 'react';

const styles = {
  title: {
    fontSize: '24px',
    fontWeight: '400',
    top: '10%',
    padding: '10px 5px 0 5px',
  },
  imageDiv: {
    fontSize: '24px',
    fontWeight: '400',
    top: '10%',
    padding: '10px 5px 0 5px',
  },
 image: {
   width: 220,
   height: 'auto',
   overflow: 'hidden'
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
          <div style={styles.title}>{this.props.title}</div>
          <div style={styles.imageDiv}><img src={this.props.img} style={styles.image}></img></div>
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
