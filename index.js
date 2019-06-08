const { o3: obj } = require('./protochain');
const arrayOfPrototypes = [];

pushNameOfPrototype(obj);

module.exports = arrayOfPrototypes;

function pushNameOfPrototype(obj) {
  const objPrototype = Reflect.getPrototypeOf(obj);

  if (!objPrototype) {
      return;
  }

  arrayOfPrototypes.push(objPrototype.name);
  pushNameOfPrototype(objPrototype);
}
