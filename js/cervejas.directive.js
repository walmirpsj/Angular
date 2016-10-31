angular.module('cervejas').directive('awCerveja', function(){
	return {
		restrict: "A",
        scope: {
            cerveja: '=awCerveja',
            fnFechar: '&'
        },
        templateUrl: "template/cerveja.template.html",
        link: function (scope, element, attr) {
            element.addClass('cerveja com-cartaz');

            if (!attr.fnFechar) {
                element.find('button').remove();
            }
        }
	}
})