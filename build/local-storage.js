
/*
Copyright 2016 Resin.io

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */
var LocalStorage, prefixed;

prefixed = function(key) {
  return 'resin-' + key;
};

if (typeof localStorage !== "undefined" && localStorage !== null) {
  module.exports = function() {
    return {
      getItem: function(key) {
        return localStorage.getItem(prefixed(key));
      },
      setItem: function(key, value) {
        return localStorage.setItem(prefixed(key), value);
      },
      removeItem: function(key) {
        return localStorage.removeItem(prefixed(key));
      },
      clear: function() {
        return localStorage.clear();
      }
    };
  };
} else {
  LocalStorage = require('node-localstorage').LocalStorage;
  module.exports = function(dataDirectory) {
    return new LocalStorage(dataDirectory, 2e308);
  };
}
