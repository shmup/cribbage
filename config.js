System.config({
  "baseURL": "/",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "jquery": "github:components/jquery@2.1.3",
    "lodash": "npm:lodash@3.3.1",
    "ramda": "npm:ramda@0.10.0",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "npm:lodash@3.3.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ramda@0.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

