describe("Testes do objeto jasmine.anything", function() {
	var dobro;

	beforeAll(function() {
		dobro = jasmine.createSpy("dobro");
	});

	it("deve demostrar o uso do jasmine.anything", function() {
		dobro(10);

		expect(dobro).toHaveBeenCalledWith(jasmine.anything());

		expect({}).toEqual(jasmine.anything());
	});
});