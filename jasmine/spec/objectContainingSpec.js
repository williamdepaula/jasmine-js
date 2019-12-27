describe("Teste do objeto jasmine.objectContaining", function() {
	var carro;

	beforeAll(function() {
		carro = {
			'ano': 2017
		}
	});

	it("deve demostrar o uso do jasmine.objectContaining", function() {
		expect(carro).toEqual(jasmine.objectContaining({'ano':2017}));
		expect(carro).not.toEqual(jasmine.objectContaining({'ano':2016}));
	});
});