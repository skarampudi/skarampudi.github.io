
(function(){
	var app = angular.module('Store', [ ]);

	app.controller('StoreController', function() {
		this.products =gems;
	});


	var gems = [ 

	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Product 1',
		canPurchase: true,
		soldOut: true
	},

	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Product 2',
		canPurchase: false,
	}
	];

})();