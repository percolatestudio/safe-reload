Percolate Studio's Safe Reload Package for Meteor / Cordova
----------------------------------------------------------
When Meteor does a Hot Code Push, there is the possiblity of caching an unparseable JS file on the device.  This will render the application completely broken and the only course of recovery is to uninstall the application.

SafeReload attempts to recover from this situation.  After a window reload event happens in the web view, it will check to make sure that Meteor starts up.  If not, the plugin will revert back to the originally installed binary version by deleting any HCP versions currently installed.

## Usage

Install like `meteor add percolate:safe-reload`.

No application-level code changes required.  Currently only iOS and Android supported.

## Testing notes

An easy test case is to introduce a run time parse error into some package client code, such as adding some code like `app=broken;` where `app` and `broken` are going to be undefined.  To make sure the package loads before Meteor's autoupdate, put your broken package at the top of the list in .meteor/packages.  When deployed it will trigger a HCP which pushes a broken build down to the client.  Without the safe-reload package, this would be an unrecoverable error.  With safe-reload installed, it should at least be able to revert the app back to the originally bundled code, which will detect a new version is available and then upgrade again.  Once the broken code is removed, the app should reach a steady state automatically after one more reload cycle.

## License 

MIT. (c) Percolate Studio, maintained by Tim Hingston (@timbotnik).

Safe Reload was developed as part of the [Verso](versoapp.com) project.
