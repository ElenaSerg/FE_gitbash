function Schilderij(naam, canvasgrootte, kostprijs) {
  this.naam = naam;
  this.canvasgrootte = canvasgrootte;
  this.kostprijs = kostprijs;
}
const schilderij = new Schilderij("Zonnebloemen", "123x72", 39921750);

function Schilder(voornaam, achternaam, stijl) {
  this.voornaam = voornaam;
  this.achternaam = achternaam;
  this.stijl = stijl;
  this.lijst = [];
}

Schilder.prototype.addPainting = function (naam, canvasgrootte, kostprijs) {
  this.lijst.push(new Schilderij(naam, canvasgrootte, kostprijs));
};

Schilder.prototype.removePainting = function (naam) {
  this.schilderij = this.lijst.filter(function (productObj) {
    return productObj.naam !== naam;
  });
};
Schilder.prototype.getList = function () {
  for (i = 0; i < schilder.lijst.length; i++)
    return ` ${this.voornaam} ${this.achternaam} / ${this.stijl}
    
    -Naam : ${this.lijst[i].naam};
    -Canvas: ${this.lijst[i].canvasgrootte}
    -Prijs: ${this.lijst[i].kostprijs}
    ---------------------------------- `;
};

const schilder = new Schilder("Vincent ", " van Gogh", "Postimpressionisme");

//console.log(schilder);
//console.log(schilderij);
// schilder.addPainting("Zonnebloemen", "123x72", 39921750);
schilder.addPainting("De aardappeleters", "82x114", 21152154);
schilder.addPainting("Slaapkamer te Arles", "61x81", 19127784);
//console.log(schilder);
// schilder.removePainting("Zonnebloemen");
// schilder.removePainting("Zonnebloemen");
// schilder.removePainting("Zonnebloemen");
//schilder.removePainting("De aardappeleters");
//schilder.removePainting("Slaapkamer te Arles");
//console.log(schilder);
console.log(schilder.getList());
