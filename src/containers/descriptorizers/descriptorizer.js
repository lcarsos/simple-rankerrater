'use strict';

import { connect } from 'react-redux';

import { Descriptorizer } from 'components/descriptorizers';

const mapStateToProps = (state) => ({
  descriptorizer: state.descriptorizer.shown,
});

export default connect(mapStateToProps)(Descriptorizer);
