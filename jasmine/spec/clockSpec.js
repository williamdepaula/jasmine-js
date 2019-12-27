describe("Teste do objeto jasmine.clock", function() {

	beforeEach(function() {
		jasmine.clock().install();
	});

	afterEach(function() {
		jasmine.clock().uninstall();
	});

	var dobro;

	beforeAll(function() {
		dobro = jasmine.createSpy("dobro");
	});

	it("deve demostrar o uso com o setTimeout", function() {
		setTimeout(function() {
			dobro(10);
		}, 1000);
		jasmine.clock().tick(1000);
		expect(dobro).toHaveBeenCalled();
	});

	it("deve demostrar o uso com o sitInterval", function() {
		setInterval(function() { dobro(2); }, 500);
		jasmine.clock().tick();
		expect(dobro).toHaveBeenCalled();

	});
});