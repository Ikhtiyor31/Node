//eslint-disable 
const commonUtil = {
  isNotNull: (data) => (typeof data !== 'undefined' && data !== null),
  errorResult: (code = '', msg = '', data = {}) => (Object.assign({}, { status: 500, msg, code }, { data })),
  successResult: (data = {}, msg = '') => (Object.assign({}, { status: 200, msg }, { data })),
  notValidResult: (data = {}, msg = '') => (Object.assign({}, { status: 300, msg }, { data })),
  
};


export default commonUtil;
