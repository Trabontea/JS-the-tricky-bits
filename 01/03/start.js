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
    var drummers = [];
    for (var i = 0; i < musicians.length; i++) {
        var person = musicians[i];

        if (person.instruments.indexOf("drums") !== -1) {
            drummers.push(person);
        }
    }

    // shout their names with a rebel yell
    for (var d = 0; d < drummers.length; d++) {
        var drummerName = drummers[d].name.toUpperCase();
        console.log(drummerName, "plays DRUMS! YEAH!");

        drummers[d].name = drummerName;
    }

    // get the total years of experience for the drummers
    var currentYear = new Date().getFullYear();
    var totalYears = 0;
    for (var d = 0; d < drummers.length; d++) {
        totalYears += currentYear - drummers[d].since;
    }
    console.log("These drummers have been active for", totalYears, "years.");
})();
