describe("Teste do objeto jasmine.any", function() {
	var dobro;

	beforeAll(function() {
		dobro = jasmine.createSpy("dobro");
	});

	it("deve demostrar o uso do jasmine.any", function() {
		dobro(10);

		expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
	});
})