function OnBin2Dec(value) {
    if (value == null) {
        return "Preenchimento do campo é obrigatório.";
    }
    if (value.length != 8) {
        return "A quantidade de dígitos deve ser igual a 8.";
    }
    var valorDecimal = 0;
    var j = 0;
    for (var i = value.length - 1; i >= 0; i--) {
        if (value[i] != "0") {
            valorDecimal += Math.pow(2, j);
        }
        j += 1;
    }
    return valorDecimal.toString();
}
