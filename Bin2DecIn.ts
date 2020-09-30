function OnBin2Dec(value: string): string {
  if (value == null) {
    return "Preenchimento do campo é obrigatório.";
  }

  if (value.length != 8) {
    return "A quantidade de dígitos deve ser igual a 8.";
  }

  let valorDecimal: number = 0;
  let j = 0;

  for (let i = value.length - 1; i >= 0; i--) {
    if (value[i] != "0") {
      valorDecimal += 2 ** j;
    }
    j += 1;
  }

  return valorDecimal.toString();
}
