'use strict';

import { connect } from 'react-redux';

import { COMPARE_TWO, PICK_FIVE, showDescriptorizer } from 'actions/descriptorizer';
import Chooserater from 'components/descriptorizers/chooserater';

const mapDispatchToProps = (dispatch) => ({
  actions: {
    compareTwo: () => dispatch(showDescriptorizer(COMPARE_TWO)),
    pickFive: () => dispatch(showDescriptorizer(PICK_FIVE)),
  }
});

export default connect(undefined, mapDispatchToProps)(Chooserater);
