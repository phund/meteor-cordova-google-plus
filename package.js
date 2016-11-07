Package.describe({
  name: "phund:cordova-google-plus-native-sign-in",
  summary: "native SignIn with Google Plus in Meteor Cordova Android/IOS App",
  documentation: "README.md",
  version: "1.3.0",
  git: "https://github.com/phund/meteor-cordova-google-plus.git"
});

Cordova.depends({
  "cordova-plugin-googleplus": "https://github.com/EddyVerbruggen/cordova-plugin-googleplus/tarball/9f9c534372d43cd97a13c8e1b4bfb53f27ac77d7"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");

  api.use([
    "accounts-base",
    "check"
  ], ["client", "server"]);

  api.use([
    "http",
    "underscore"
  ], ["server"]);

  api.imply(["accounts-base"], ["client", "server"]);

  api.add_files([
    "server/cordova_g_plus.js"
  ], ["server"]);

  api.add_files([
    "cordova/cordova_g_plus.js"
  ], ["web.cordova"]);
});

Package.onTest(function(api) {
  api.use(["phund:cordova-google-plus-native-sign-in", "tinytest"]);

  api.addFiles("tests/client/cordova_g_plus_test.js", "client");
});
