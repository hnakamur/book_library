// change syntax of underscore.js templates to avoid conflicts with Rails ERB.
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g,
  evaluate: /\{%(.+?)%\}/g,
  escape: /\{%-(.+?)%\}/g
};
