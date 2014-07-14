var mainCtrl = function($scope) {
    $scope.users = [
        {"name":"taguchi","score": 100.22},
        {"name":"tanaka","score": 200.2},
        {"name":"sasaki","score": 50.213},
        {"name":"hoge","score": 100.22},
        {"name":"fuga","score": 200.2},
        {"name":"sasaki","score": 50.213},
        {"name":"taguchi","score": 100.22},
        {"name":"tanaka","score": 200.2},
        {"name":"sasaki","score": 50.213},
        {"name":"taguchi","score": 100.22},
        {"name":"tanaka","score": 200.2},
        {"name":"sasaki","score": 50.213},

    ];
};

// コントローラーがネストすると変数を継承できる
var userItemCtrl = function($scope) {
    $scope.increment = function() {
        $scope.user.score++;
    }
};
