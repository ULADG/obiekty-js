" use strict";

var kaja = {
	imie: "kaja",
	wzrost: 152,
	przedstawOsobe: function() {console.log(this.imie)}
}

var krystian = {
	imie: "krystian",
	wzrost: 182,
	przedstawOsobe: function() {console.log(this.imie)}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();
