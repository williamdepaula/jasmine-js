describe("Teste do toBeDefined", function(){
	it("deve demostrar o uso do toBeDefined", function(){
		var n1 = 10;
		var n2;
		var n3;
		
		expect(n1).toBeDefined();
		expect(null).toBeDefined();
		expect(NaN).toBeDefined();

		expect(n2).not.toBeDefined();
		expect(n3).not.toBeDefined();
	});
});