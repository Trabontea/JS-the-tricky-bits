(function (_) {
    "use strict";

    var kitty = {
        name: "Squiggy",
        color: "orange",
        age: 5,
        chipId: "ZA123456",

        offspring: ["Mars", "Jupiter", "Mercury"],
        bestFriend: {
            name: "Crackers",
        },

        meow: function () {
            return "Meow, says " + this.name;
        },
    };
})(_);
