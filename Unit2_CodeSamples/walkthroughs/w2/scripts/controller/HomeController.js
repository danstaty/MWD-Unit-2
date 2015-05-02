// Follow steps from the walkthrough guide to create HomeController
(function(){
    'use strict';

    var HomeController = function(productService){
        var _this = this;
        _this.products = [];

        productService.getFeatureProducts()
            .then(function (data) {_this.products = data});

    }
    HomeController.$inject = ['ProductService']; /*с помощью $inject мы просим ангуляр добавить зависимость внутрь
    нашей конструктор функции*/
    angular.module('auction').controller('HomeController', HomeController);
}());