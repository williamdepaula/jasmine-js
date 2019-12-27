describe("Teste do beforeEach", function(){
	var contar = 0;

	beforeEach(function(){
		contar++;
	})

	it("deve incrememtar o contar para 1", function(){
		expect(contar).toEqual(1);
	});

	it("deve incrememtaro contar para 2", function(){
		expect(contar).toEqual(5);
		pending("Implementar...");
	});

	it("deve demostrar um teste desabilitado a ser implementado");
});