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

            this.createBtn.addEventListener(
                "click",
                this.createClick.bind(this)
            );
        },

        template_v1: {
            name: "ROBOT #",
            serial: 100000,
        },

        template_v2: {
            name: "ROBO_",
            serial: 100000,
            cameOnline: function () {
                return "2021-11-04";
            },
        },

        robots: [],

        createBtn: document.querySelector("#create"),
        botSlot: document.querySelector("#bot-slot"),

        createClick: function () {
            var robot = Object.assign({}, this.template_v2);
            robot.serial += 10 * this.robots.length;
            robot.name += "" + (this.robots.length + 1);
            this.robots.push(robot);

            this.renderBots();
        },
        /**
         * Place a robot in the bots slot
         *
         * @param {object} robot
         * @param {int} width
         * @param {int} height
         */
        placeBot: function (robot, width, height) {
            var topOffset = this.randomInt(20, height / 3);
            var leftOffset = this.randomInt(20, width / 2);

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
            botInner.innerHTML = `${robot.name}<br>${robot.cameOnline()}`;
            botInner.className = "robot--inner";
            bot.appendChild(botInner);

            this.botSlot.appendChild(bot);
        },
        /**
         * Re-render the robots in new places within the botSlot
         */
        renderBots: function () {
            this.botSlot.innerHTML = "";

            var width = this.botSlot.clientWidth;
            var height = this.botSlot.clientHeight;

            this.robots.every(
                function (robot) {
                    this.placeBot(robot, width, height);
                    return true;
                }.bind(this)
            );
        },

        /**
         * Get a random number between min and max
         *
         * @param {int} min
         * @param {int} max
         * @returns
         */
        randomInt: function (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        },
    };

    ROBOT_APP.init();
})();
