var meuMatcher = {
	toBeValidEmail: function(util, customEqualityTesters) {
		var emailRegex = /\S+@\S+\.\S+/;
		return {
			compare: function(actual, expected) {
				var result = {};
				if (expected == undefined) {
					result.pass = emailRegex.test(actual);
				} else {
					result.pass = expected.test(actual);
				}
				if (result.pass) {
					result.message = actual + " é um email válido";
				} else {
					result.message = actual + " não é um email válido";
				}
				return result;
			}
		}
	}
};

describe("Testes do objeto jasmine.addMatchers", function() {
	beforeEach(function() {
		jasmine.addMatchers(meuMatcher);
	});

	it("deve verificar se um email é valido", function() {
		expect("email@dominio.com").toBeValidEmail();
		expect("email").not.toBeValidEmail();
	})
});