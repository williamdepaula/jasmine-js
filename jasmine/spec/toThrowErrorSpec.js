describe("Teste do toThrowError", function(){
	it("deve demostrar o uso do toThrowError", function(){
		var  soma = function(n1, n2) {
			if(n1 <= 0 || n2 <= 0) {
				throw new TypeError("Deve ser maior que 0");
			}

			return n1 + n2;
		}

		// Verifica o lançamento de uma exceção
		expect(function(){
			soma(0, 0);
		}).toThrowError();
		// Verifica o lançamento de uma exceção com a mensagem especifica
		expect(function(){
			soma(0,0);
		}).toThrowError("Deve ser maior que 0");
		// Verifica o lançamento de uma exceção com uma mensagem utilizando expressão regualr
		expect(function(){
			soma(0, 0);
		}).toThrowError(/maior que 0/);
		// Verifica o lançamento da uma exceção do tipo especifico
		expect(function(){
			soma(0, 0);
		}).toThrowError(TypeError);
		// Verifica o lançamento de uma exceção do tipo especifico com uma mensagem
		expect(function(){
			soma(0, 0);
		}).toThrowError(TypeError, "Deve ser maior que 0");

		expect(function(){
			soma(1, 1);
		}).not.toThrowError();
	});
});