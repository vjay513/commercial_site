  
import React from 'react';
import { connect } from 'react-redux';

import { helpHandler } from '../../redux/help/help.actions';

import './help-icon.styles.scss';

const HelpIcon = ({ helpHandler }) => (
  <div className='cart-icon' onClick={helpHandler}>
    <span className='item-count'>HELP</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  helpHandler: () => dispatch(helpHandler())
});

export default connect(
  null,
  mapDispatchToProps
)(HelpIcon);