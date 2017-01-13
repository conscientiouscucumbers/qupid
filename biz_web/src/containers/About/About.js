import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  state = {
    showKitten: false
  }

  handleToggleKitten = () => this.setState({showKitten: !this.state.showKitten});

  render() {
    const {showKitten} = this.state;
    const kitten = require('./kitten.jpg');
    const james = require('./JamesGu.jpg');
    const josh = require('./JoshuaPeng.jpg');
    const susan = require('./Susan.jpg');
    const blake = require('./Blake.jpg');

    return (
      <div className="container">
        <h1>Why join Cupid?</h1>
        <Helmet title="Why join Cupid?"/>

        <p>Coupons and great deals get washed out by the noise of everyday life. Instead of alerting your customers of deals in the local paper where the potential transaction is 4-5 hours away. iHearth gives the customer a notification of the coupon when it is most pertinant for them... In the store, making the decision.
        </p>

        <h3>Coupon Image</h3>

        <p>
          Psst! Would you like to see an example coupon?

          <button className={'btn btn-' + (showKitten ? 'danger' : 'success')}
                  style={{marginLeft: 50}}
                  onClick={this.handleToggleKitten}>
            {showKitten ? 'Okay, Thanks!' : 'Yes! Please!'}</button>
        </p>

        {showKitten && <div><img src={kitten}/></div>}
        <img src={james}/><br></br>
        <img src={josh}/><br></br>
        <img src={susan}/><br></br>
        <img src={blake}/>
      </div>
    );
  }
}
