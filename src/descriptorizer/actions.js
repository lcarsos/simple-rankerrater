'use strict';

import { SHOW_DESCRIPTORIZER } from './constants';

export const showDescriptorizer = (descriptorizer) => ({
    type: SHOW_DESCRIPTORIZER,
    descriptorizer,
});
