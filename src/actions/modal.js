export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (content) => ({
  type: SHOW_MODAL,
  content,
});

export const showLoadModal = () => {
  console.log('in showLoadModal');
  return {
    type: SHOW_MODAL,
    content: 'load'
  };
};

export const hideModal = () => ({
  type: HIDE_MODAL,
});
