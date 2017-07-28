'use strict';

import baseConfig from './base';

let config = {
  apiUrl: '//localhost:3000/patent-document'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
