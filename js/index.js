var app = angular.module('wiki', ['ngSanitize']);
var url = 'https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&list=search&inprop=url&srsearch=';

app.controller('wikiSearch', ['$scope', '$http', function($scope, $http) {
    $scope.wikiUrl = 'http://en.wikipedia.org/wiki/';

    var showWikiResult = function(response) {
        $scope.loading = false;
        if (response) {
            $scope.searchResult = response.data.query.search;
        }
    };

    $scope.getSearchResult = function($event) {
        $http.get(url + $scope.searchPhrase)
            .then(showWikiResult);
        $scope.loading = true;
    }
}]);