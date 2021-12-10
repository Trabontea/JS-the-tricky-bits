(function () {
    "use strict";

    /**
     * Challenge tasks:
     *  1. Reorganize the code so it falls within the ROBOT_APP
     *  2. Change class methods so they reference the properties,
     *     and other methods, using `this`.  Bind where needed.
     *  3. Fix the robots so every copy has a unique name and serial number.
     *  4. Change the template from v1 to v2.
     *      a. Update label so it shows when the robot came online
     *      b. Make sure copying mechanism works
     */

    var ROBOT_APP = {
        init: function () {
            console.log("Robot app initializing…");
        },
    };

    var template_v1 = {
        name: "ROBOT #",
        serial: 100000,
    };

    var template_v2 = {
        name: "ROBO_",
        serial: 100000,
        cameOnline: function () {
            return "2021-11-04";
        },
    };

    var robots = [];

    var createBtn = document.querySelector("#create");
    var botSlot = document.querySelector("#bot-slot");

    createBtn.addEventListener("click", function createClick() {
        var robot = template_v1;
        robot.serial += 10;
        robot.name += "" + (robots.length + 1);
        robots.push(robot);

        renderBots();
    });

    /**
     * Place a robot in the bots slot
     *
     * @param {object} robot
     * @param {int} width
     * @param {int} height
     */
    function placeBot(robot, width, height) {
        var topOffset = randomInt(20, height / 3);
        var leftOffset = randomInt(20, width / 2);

        // maybe flip the sign on the offsets
        if (Math.floor(Math.random() * 100) % 2 === 0) {
            topOffset = 0 - topOffset;
        }
        if (Math.floor(Math.random() * 100) % 2 === 0) {
            leftOffset = 0 - leftOffset;
        }

        var bot = document.createElement("div");
        bot.className = "robot";
        bot.style =
            "transform: translateX(" +
            leftOffset +
            "px) translateY(" +
            topOffset +
            "px);";
        var botInner = document.createElement("div");
        botInner.innerHTML = `${robot.name}<br>${robot.serial}`;
        botInner.className = "robot--inner";
        bot.appendChild(botInner);
        botSlot.appendChild(bot);
    }

    /**
     * Re-render the robots in new places within the botSlot
     */
    function renderBots() {
        botSlot.innerHTML = "";

        var width = botSlot.clientWidth;
        var height = botSlot.clientHeight;

        robots.every(function (robot) {
            placeBot(robot, width, height);
            return true;
        });
    }

    /**
     * Get a random number between min and max
     *
     * @param {int} min
     * @param {int} max
     * @returns
     */
    function randomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    ROBOT_APP.init();
})();
