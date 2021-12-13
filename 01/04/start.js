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
    // filter() method creates a new array with all elements that pass the test implemented by the provided function
    // Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.

    // var drummers = [];
    // for (var i = 0; i < musicians.length; i++) {
    //     var person = musicians[i];

    //     if (person.instruments.indexOf("drums") !== -1) {
    //         drummers.push(person);
    //     }
    // }
    // inlocuire cu filters
    
    var drummers = musicians.filter(function(person) {
        console.log('person::', person);
        console.log('indexOf::', person.instruments.indexOf("drums"))
         return person.instruments.indexOf("drums") !== -1
    });
    console.log('drummers_filter', drummers)

    
    // for (var d = 0; d < drummers.length; d++) {
    //     var drummerName = drummers[d].name.toUpperCase();
    //     console.log(drummerName, "plays DRUMS! YEAH!");

    //     drummers[d].name = drummerName;
    // }

   
    // The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    drummers = drummers.map(function(drummer) {
			// console.log('drummer::', drummer);
			 // shout their names with a rebel yell
			drummer.name = drummer.name.toUpperCase();
			console.log(drummer.name, "plays DRUMS! YEAH!");
			return drummer;
		})

		
    // var totalYears = 0;
    // for (var d = 0; d < drummers.length; d++) {
    //     totalYears += currentYear - drummers[d].since;
    // }

		//reduce
    // get the total years of experience for the drummers
    var currentYear = new Date().getFullYear();
    var totalYears = drummers.reduce(function(totalYears, drummer) {
			return (totalYears += currentYear - drummer.since);
		}, 0);

		var avgYears = drummers.reduce(function(totalYears, drummer, index) {
			totalYears += currentYear - drummer.since;

			// daca ajnuge la ultima valoare
			if(index === drummers.length -1) {
				return totalYears / drummers.length
			} else {
				return totalYears;
			}
		}, 0);

    console.log("These drummers have been active for", totalYears, "years.");
    console.log("These drummers have been active for an average of ", avgYears, "years.");

})();
