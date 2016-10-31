angular.module('cervejas').controller('CervejasController', function($scope){
		$scope.titulo = "Cervejas que já bebi";
		
		$scope.cervejas = [
			{	
				id: '2112i14ni14b41909hwwuq',
				nome: 'Budweiser', 
				fabricante: 'Anheuser-Busch',
				tipo: 'American Lager',
				embalagem: 'Long Neck',
				cartaz: 'http://adegabomretiro.loja2.com.br/img/f59437fe7ed3093b300cf66ea387ece3.jpg',
				descricao: 'A Cerveja Budweiser é uma Standard American Lager de sabor leve, cor clara e aroma discreto. As lascas de Beechwood, madeira especial utilizada no processo de fermentação e maturação da Budweiser, conferem um sabor equilibrado — marcante no início e suave no final. Um acompanhamento perfeito para este tipo de cerveja são bolinhos de bacalhau ou finas lâminas de salame!'
			},
			{ 	
				id: 'adsd218758735jgjgjg6456h5hu6uh6',
				nome: 'Delirium Nocturnum', 
				fabricante: 'Huyghe',
				tipo: 'Belgian Strong Dark Ale',
				embalagem: 'Long Neck',
				cartaz: 'http://recursos.clubedomalte.com.br/Imagem/Produto/460/230615/delirium-nocturnum-330ml-63762.jpg?v=20161030',
				descricao: 'A Cerveja Delirium Nocturnum 330 ml é uma tradicional cerveja do tipo Belgian Dark Strong Ale: possui cor escura, espuma densa e é bem encorpada. Feita com 5 tipos de malte e 3 tipos de leveduras, seu aroma é complexo emarcante, com notas de uva passa e chocolate. Cordeiro assado ou carne de javali são perfeitamente harmonizados com este clássico rótulo belga.'
			} 
		];
		
		$scope.novaCerveja = {};

		$scope.adicionarCerveja = function(){
			 $scope.cervejas.push({
				id: SparkMD5.hash(Date.now() + ""),
				nome: $scope.novaCerveja.nome,
				fabricante: $scope.novaCerveja.fabricante,
				tipo: $scope.novaCerveja.tipo,
				embalagem: $scope.novaCerveja.embalagem,
				cartaz: $scope.novaCerveja.cartaz,
				ano: $scope.novaCerveja.ano,
				descricao: $scope.novaCerveja.descricao
			});
			$scope.novaCerveja = {};
		};
		
		$scope.removerCerveja = function(id){
			angular.forEach($scope.cervejas, function(cerveja, i){
				if(cerveja.id == id){
					$scope.cervejas.splice(i, 1);
				};
			});
		}
});