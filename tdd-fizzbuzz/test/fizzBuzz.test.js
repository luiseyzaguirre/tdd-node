
const fizzBuzz = require("../src/fizzBuzz.js");
var {expect} = require('chai');
describe("A Bizz Buzz game ", function () {
    describe("Given a number with value 1 ", function () {
        it("should be return '1'", function () {
            var result = fizzBuzz.play(1);
            expect(result).to.eql('1');
        });
    });
    describe("Given a number with value 2 ", function () {
        it("should be return '2'", function () {
            var result = fizzBuzz.play(2);
            expect(result).to.eql('2');
        });
    });
    describe("Given a number with value 3 ", function () {
        it("should be return '3'", function () {
            var result = fizzBuzz.play(3);
            expect(result).to.eql('3');
        });
    });
    describe("Given a number with value 4 ", function () {
        it("should be return '4'", function () {
            var result = fizzBuzz.play(4);
            expect(result).to.eql('4');
        });
    });
    describe("Given a number with value 5 ", function () {
        it("should be return 'Bizz'", function () {
            var result = fizzBuzz.play(5);
            expect(result).to.eql('Bizz');
        });
    });


});