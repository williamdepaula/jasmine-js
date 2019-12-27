describe("Testes do objeto Spy", function(){
	var Calculadora = {
		somar: function(n1, n2) {
			return n1 + n2;
		},

		subtrair: function(n1, n2) {
			return n1 - n2;
		},
		multiplicar: function(n1, n2) {
			return n1 * n2;
		},
		dividir: function(n1, n2) {
			return n1/n2;
		},
		exponencial: function(numero) {
			return (numero * numero);
		}
	};

	beforeAll(function() {
		spyOn(Calculadora, "somar").and.callThrough();
		spyOn(Calculadora, "subtrair").and.returnValue(10);
		spyOn(Calculadora, "multiplicar").and.returnValues(1, 5);
		spyOn(Calculadora, "dividir").and.callFake(function(n1, n2) {
			return n1 - n2;
		});
		spyOn(Calculadora, "exponencial").and.throwError("mensagem de erro");
	});

	xit("deve possuir o método somar como não definido", function() {
		expect(Calculadora.somar(1, 1)).toBeUndefined();
	});

	it("deve chamar o método somar ao menos uma vez", function() {
		expect(Calculadora.somar).not.toHaveBeenCalled();
		Calculadora.somar(1, 1);
		expect(Calculadora.somar).toHaveBeenCalled();
	});

	it("deve chamar o método somar 2 vezes", function() {
		Calculadora.somar(1, 1);
		Calculadora.somar(1, 2);
		expect(Calculadora.somar).toHaveBeenCalledTimes(3);
	});

	it("deve chamar o mátodo somar com os parâmetros válidos", function(){
		Calculadora.somar(1, 1);
		Calculadora.somar(1, 2);
		expect(Calculadora.somar).toHaveBeenCalledWith(1, 1);
		expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
	});

	it("deve executar o método somar original", function(){
		expect(Calculadora.somar(1, 1)).toEqual(2);
		// expect(Calculadora.subtrair(2, 1)).toBeUndefined();
	});

	it("deve retornanr 10 para o metodo subtrair", function(){
		expect(Calculadora.subtrair(1, 2)).toEqual(10);
	});

	it("deve retornar valores distintos para o método multiplicar", function() {
		expect(Calculadora.multiplicar(3, 4)).toEqual(1);
		expect(Calculadora.multiplicar(1, 2)).toEqual(5);
		expect(Calculadora.multiplicar(4, 5)).toBeUndefined();
	});

	it("deve transformar o método dividir em subração", function() {
		expect(Calculadora.dividir(5, 2)).toEqual(3);
	});

	it("deve lançar um erro no exponencial", function(){
		expect(function(){ Calculadora.exponencial(2); }).toThrowError("mensagem de erro");
	});

	it("deve demostrar o uso do calls.any",function(){
		Calculadora.somar(1, 2);
		expect(Calculadora.somar.calls.any()).toBeTruthy();
	});

	it("deve demostrar o uso do calls.count",function(){
		// Resetando o calls
		Calculadora.somar.calls.reset()
		Calculadora.somar(1, 2);
		Calculadora.somar(2, 3);
		// console.log(Calculadora.somar.calls.count());
		// Como o somar foi usado outras vezes, o numero é maior que 2.
		expect(Calculadora.somar.calls.count()).toEqual(2);
	});

	it("deve demostrar o uso do calls.argsFor", function(){
		// Resetando o calls
		Calculadora.somar.calls.reset()
		Calculadora.somar(1, 2);
		Calculadora.somar(2, 3);
		expect(Calculadora.somar.calls.argsFor(0)).toEqual([1, 2]);
		expect(Calculadora.somar.calls.argsFor(1)).toEqual([2, 3]);
	});

	it("deve demostrar o uso do calls.allArgs", function(){
		Calculadora.somar.calls.reset();
		Calculadora.somar(1, 1);
		Calculadora.somar(2, 2);
		expect(Calculadora.somar.calls.allArgs())
		.toEqual([[1, 1], [2, 2]]);
	});

	it("deve demostrar o uso do calls.all", function(){
		var retorno = Calculadora.somar.calls.all();
		expect(retorno[1].object).toEqual(Calculadora);
		expect(retorno[1].args).toEqual([2, 2]);
		expect(retorno[1].returnValue).toEqual(4);
	});

	it("deve demostrar o uso do calls.mostRecent", function(){
		Calculadora.somar.calls.reset();
		Calculadora.somar(1, 1);
		Calculadora.somar(2, 2);

		var retorno = Calculadora.somar.calls.mostRecent();
		expect(retorno.object).toEqual(Calculadora);
		expect(retorno.args).toEqual([2, 2]);
		expect(retorno.returnValue).toEqual(4);
	});

	it("deve demostrar o uso do calls.first", function() {
		Calculadora.somar.calls.reset();
		Calculadora.somar(1, 1);
		Calculadora.somar(2, 2);
		Calculadora.somar(3, 1);

		var retorno = Calculadora.somar.calls.first();

		expect(retorno.object).toEqual(Calculadora);
		expect(retorno.args).toEqual([1, 1]);
		expect(retorno.returnValue).toEqual(2);
	});

	it("deve demostrar o uso do calls.reset", function(){
		Calculadora.somar.calls.reset();
		Calculadora.somar(1, 1);
		Calculadora.somar(2, 2);
		Calculadora.somar(3, 1);
		expect(Calculadora.somar.calls.any()).toBeTruthy();

		Calculadora.somar.calls.reset();

		expect(Calculadora.somar.calls.any()).toBeFalsy();
	});
});