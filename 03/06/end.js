(function () {
    "use strict";

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
        placeBot: function (
            {
                height = 300,
                width = 300,
                topPadding: tp = 20,
                leftPadding: lp = 20,
            },
            robot
        ) {
            var topOffset = this.randomInt(tp, height / 3);
            var leftOffset = this.randomInt(lp, width / 2);

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

            return true;
        },
        /**
         * Re-render the robots in new places within the botSlot
         */
        renderBots: function () {
            this.botSlot.innerHTML = "";

            var width = this.botSlot.clientWidth;
            var height = this.botSlot.clientHeight;

            var params = {
                width,
                height,
                topPadding: 20,
                leftPadding: 20,
            };

            this.robots.every(this.placeBot.bind(this, params));
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
