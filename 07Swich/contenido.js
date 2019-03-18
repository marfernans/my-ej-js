var combustible = "Super 200";
/*
if (combustible == "Disel") {
  alert("$ 11.000 el Galon");
}
if (combustible == "Super 98") {
  alert("$ 15.000 el Galon");
}
if (combustible == "Super 93") {
  alert("$ 18.000 el Galon");
}
*/

switch (combustible) {
    case "Diesel":
      alert("$ 11.000 el Galon!");
      break;
      case "Super 98":
        alert("$ 15.000 el Galon!");
        break;
      case "Super 93":
        alert("$ 18.000 el Galon!");
        break;
    default:
    alert(" Ese tipo no lo tengo en el catalogo!");   

}
