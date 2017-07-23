Package.describe({
  name: 'ruchy:nocolorlogger',
  version: '1.0.0',
  summary: 'Logging: Print Client\'s logs to Server\'s console, client messages colorized for better readability',
  git: 'https://github.com/work-capital/Meteor-logger-console',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.use(['ecmascript', 'check', 'underscore', 'ostrio:logger@2.0.2'], ['client', 'server']);
  api.mainModule('nocolorlogger.js', ['client', 'server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use(['ecmascript', 'underscore', 'ostrio:logger@2.0.2', 'ruchy:nocolorlogger@1.0.0']);
  api.addFiles('nocolorlogger-tests.js');
});
