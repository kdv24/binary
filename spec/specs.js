describe("convertToDecimal", function() {
    it("should return 0 when the user inputs the binary number '0'", function() {
        expect(convertToDecimal('0')).to.equal(0);
    });

    it("should return 1 when the user inputs the binary number '1'", function() {
        expect(convertToDecimal('1')).to.equal(1);
    });

    it("should return 2 when the user inputs the binary number '10'", function() {
        expect(convertToDecimal('10')).to.equal(2);
    });

    it("should return 3 when the user inputs the binary number '11'", function() {
        expect(convertToDecimal('11')).to.equal(3);
    });

    it("should return 19 when the user inputs the binary number '10011'", function() {
        expect(convertToDecimal('10011')).to.equal(19);
    });
});
