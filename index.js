'use strict';

class AccessControl {
  constructor ({
    allow = [], deny = [], order = 'deny, allow', validate,
  } = {}) {
    this.allow = Array.isArray(allow) ? allow : [ allow ];
    this.deny = Array.isArray(deny) ? deny : [ deny ];
    this.order = order;

    this.validate = typeof validate === 'function' ? validate : this.test;
  }
}

module.exports = AccessControl;
