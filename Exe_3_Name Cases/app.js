var personName = "Osaf Khan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/\b\w/g, function (EvoO) { return EvoO.toUpperCase(); }));
