angular.module('CustomApp.filters', [])

.filter('titlecase', function() {
    return function(val) {
        // console.log(val);
        if (val.indexOf('s') < 0) {
            return val.toUpperCase();
        } else {
            return 'Yes S :D';
        }
    }
})

.filter('checkmark', function() {
    var filterFunction = function(input) {
        return input ? '\u2713' : '\u2718';
    };

    return filterFunction;
});
