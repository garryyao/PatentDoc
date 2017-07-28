'use strict';

import baseConfig from './base';

let config = {
  apiUrl: 'https://raw.githubusercontent.com/garryyao/PatentDoc/master/assets/patent.json'
};

export default Object.freeze(Object.assign({}, baseConfig, config));
