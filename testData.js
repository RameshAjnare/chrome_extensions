// (function() {
//         var randomString = function(length) {
//         var text = "";
//         var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzgdfsdfdsa";
//         for(var i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//         }
//         console.log("text value===>",text);
//         return text
//         }
//         // random string length
//         var random = randomString(20);
//         // insert random string to the field
//         //loader.engine.document.getElementById(95464968).setValue(({"value": random}));
//         console.log("random value===>",random)

//         })();

const firstNames = ['John', 'Jane', 'Michael', 'Emily', 'David'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown'];

function getRandomName() {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return firstName + ' ' + lastName;
}

const randomName = getRandomName();
console.log(randomName); // Output: e.g. "Michael Williams"
