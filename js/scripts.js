function convertToDecimal(binary) {

    // var test = 0;
    //
    // var binaryArray = binary.split("");

    var total = 0;

    for (var i = 0; binary.length > i; i++) {
        total = total * 2;
        total = total + parseInt(binary[i]);
    }


    /*

        1 0 0 11
                     total
        0 * 2 = 0 => 0
        0 + 1 = 3 => 5

        0 * 2 = 0 => 5
        5 + 0 = 5 => 10

        0 * 2 = 0 => 5
        5 + 0 = 5 => 15

        1 * 2 = 2 => 17
        7 + 1 = 8 => 15

        1 * 2 = 2 => 17
        17 + 1 = 18 => 18

    */


    // for (var i = 1; binaryArray.length > 0; i++) {
    //     total += binaryArray[binary.length - i] * Math.pow(2, binaryArray.length - 1);
    //     binaryArray.pop();
    // }


    // binaryArray.forEach(function(digit) {
    // });
    // binaryArray.pop();


        // binary * Math.pow(2, binary.length - 1);

    return total;

}
