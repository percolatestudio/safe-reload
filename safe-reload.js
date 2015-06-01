/* global SafeReload:true, cordova */

var meteorOk = false;
var defaultHealthCheck = function() {
  // console.log('SafeReload defaultHealthCheck ' + meteorOk);
  return meteorOk;
};
var healthChecks = [defaultHealthCheck];

SafeReload = {
  // add a user-defined function to the health check
  healthCheck: function(healthCheckMethod) {
    if (!_.contains(healthChecks, healthCheckMethod)) {
      healthChecks.push(healthCheckMethod);
    }
  },

  // returns true if all health checks pass
  healthy: function() {
    /* eslint-disable no-undefined */
    var healthy = _.find(healthChecks, function(healthCheckMethod) {
      var failed = !healthCheckMethod();
      return failed;
    }) === undefined;
    /* eslint-enable no-undefined */
    if (healthy) {
      cordova.plugins.percolatestudio.SafeReload.healthCheckPassed();
    }
    return healthy;
  }
};

Meteor.startup(function() {
  meteorOk = true;
});
