export function convertirTemperatura(temp){
  //(32 °F − 32) × 5 / 9 = 0 °C
let celcius;

celcius = temp - 273.15;

return celcius;

}