describe("Teste do toContain", function(){
	it("deve demostrar o uso do toContain", function(){
		var texto = "Meu nome é William";
		var frutas = ["laranja", "banana", "pera"];

		expect(texto).toContain("William");
		expect(texto).not.toContain("william");

		expect(frutas).toContain("laranja");
		expect(frutas).not.toContain("uva");
	});
});