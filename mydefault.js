/**
 * Created by kriz on 1/18/2017.
 */

// create the module and name it defaultApp
// also include ngRoute for all our routing needs
var defaultApp = angular.module('defaultApp', ['ngRoute']);

// configure our routes
defaultApp.config(function($routeProvider) {
    $routeProvider

        // route for the login page
        .when('/', {
            title : "Aurora - Sports Wears And Other Garments",
            description : "",
            templateUrl : 'pages/theme.html',
            controller  : 'mainController'
        })


});

defaultApp.run(['$rootScope', '$route', function($rootScope, $route) {

    // $rootScope.$on('$viewContentLoaded', function () {
    //     $templateCache.removeAll();
    // });

    $rootScope.$on('$routeChangeSuccess', function () {
        document.title = $route.current.title;
    });

    $rootScope.dataSelected = {};

    $rootScope.dataSelected.mainData = {

        general: {
            author: "krish",
            url: "http://www.aurora.com",
            logo: "./images/mylogo.png",
            lastupdated: "16 August 2018"
        },
        theme: {
            portrait: {
                pic1: "./images/theme/aurora.jpg",
                pic1alt: "themebg",
                pic2: "./images/theme/auroralight.jpg",
                pic2alt: "lightthemebg",
                pic3: "./images/theme/auroradark.jpg",
                pic3alt: "darkthemebg"
            }
        },

        pagetop: {
            updated: "Last Updated : "
        },
        footer: {
            copyright: "Team BehindBrains © 2018. All Rights Reserved."
        }
    };


}
]);



// create the controller and inject Angular's $scope
defaultApp.controller('mainController', function($rootScope, $scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';

    document.body.scrollTop = 0;


    // inject rootScope variables

    $rootScope.closed = function() {
        var z= document.getElementById("mymenuglyph");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="none";
        var y= document.getElementById("closenav");
        y.style.display="none";
    };

    $rootScope.opened = function() {
        var z= document.getElementById("closenav");
        z.style.display="inline-block";
        var x= document.getElementById("mykdr_menu");
        x.style.display="block";
        var y= document.getElementById("mymenuglyph");
        y.style.display="none";
    };

});
