Package.describe({
  name: "percolate:safe-reload",
  version: "0.1.2",
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
  "com.percolatestudio.cordova.safereload": "https://github.com/percolatestudio/cordova-plugin-safe-reload/tarball/e4f856a06b54e3cc8dde1a01a59a2ed28f1388d3"
});
