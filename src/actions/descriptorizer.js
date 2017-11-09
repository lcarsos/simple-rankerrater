'use strict';

export const SHOW_DESCRIPTORIZER = 'SHOW_DESCRIPTORIZER';

export const COMPARE_TWO = 'COMPARE_TWO';
export const PICK_FIVE = 'PICK_FIVE';

export const showDescriptorizer = (descriptorizer) => ({
    type: SHOW_DESCRIPTORIZER,
    descriptorizer,
});
