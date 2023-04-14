let newObject = {};
let key = "name";
newObject.key = "old value";
newObject[key] = "new value";
newObject["key"] = "new old value";
console.log(newObject);
