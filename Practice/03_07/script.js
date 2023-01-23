/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const waterBottle = {
  color: "blue",
  size: "small",
  shape: "round",
  empty: false,
  temperature: 20,
  labelNames: ["embed", "sticker"],
  changeTemp: function (newTemp) {
    return (this.temperature = newTemp);
  },
  liquid: {
    name: "water",
    composition: ["hydrogen", "oxygen"],
    opacity: 0,
    addJuice: function (juiceAmount) {
      return (this.opacity += juiceAmount);
    },
  },
  weight: "heavy",
};
