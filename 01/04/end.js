(function () {
    "use strict";

    var musicians = [
        {
            name: "Esperanza Spalding",
            instruments: ["bass", "voice"],
            since: 2006,
        },
        {
            name: "Jacob Collier",
            instruments: ["bass", "voice", "piano", "drums"],
            since: 2016,
        },
        {
            name: "Theo Katzman",
            instruments: ["guitar", "voice", "drums"],
            since: 2011,
        },
        {
            name: "Annie Clark",
            instruments: ["guitar", "voice"],
            since: 2007,
        },
        {
            name: "H.E.R.",
            instruments: ["guitar", "voice"],
            since: 2017,
        },
        {
            name: "Anderson .Paak",
            instruments: ["drums", "voice"],
            since: 2014,
        },
        {
            name: "Terri Lyne Carrington",
            instruments: ["drums"],
            since: 1984,
        },
    ];

    // filter for just the drummers
    var drummers = musicians
        .filter(function (person) {
            return person.instruments.indexOf("drums") !== -1;
        })
        .map(function (drummer) {
            // shout their names with a rebel yell
            drummer.name = drummer.name.toUpperCase();
            console.log(drummer.name, "plays DRUMS! YEAH!");

            return drummer;
        });

    // get the total years of experience for the drummers
    var currentYear = new Date().getFullYear();
    var totalYears = drummers.reduce(function (totalYears, drummer) {
        return (totalYears += currentYear - drummer.since);
    }, 0);
    console.log("These drummers have been active for", totalYears, "years.");

    var avgYears = drummers.reduce(function (totalYears, drummer, index) {
        totalYears += currentYear - drummer.since;

        if (index === drummers.length - 1) {
            return totalYears / drummers.length;
        } else {
            return totalYears;
        }
    }, 0);
    console.log(
        "These drummers have been active for an average of ",
        avgYears,
        "years."
    );
})();
