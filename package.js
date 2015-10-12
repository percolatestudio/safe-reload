Package.describe({
  name: "percolate:safe-reload",
  version: "0.1.1",
  summary: "Provides a safety belt for recovering from a broken HCP on Cordova.",
  documentation: "README.md",
  git: "https://github.com/percolatestudio/safe-reload.git"
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.3.1");
  api.addFiles("safe-reload.js", ["client"]);
  api.export(["SafeReload"], ["client"]);
});

Cordova.depends({
  "com.percolatestudio.cordova.safereload": "https://github.com/percolatestudio/cordova-plugin-safe-reload/tarball/5f403974324314f5b779fe86f361aa5a6bc11643"
});
