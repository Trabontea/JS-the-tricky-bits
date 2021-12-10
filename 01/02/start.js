(function () {
    "use strict";

    // Simple array
    var band = [
        "Renee Rosnes",
        "Anat Cohen",
        "Melissa Aldana",
        "Ingrid Jensen",
        "Noriko Ueda",
        "Allison Miller",
        "Cécile McLorin Salvant",
    ];

    // for (var i = 0; i < band.length; i++) {
    //     var member = band[i];
    // }

    // for (var of) pentru array
    for (var member of band) {
        // iterating member of the bands
        console.log('member', member)
    }

    band.forEach(function(member) {
        //console.log("introducing: ", member)
    })

    // every // return just the first value of array
    band.every(function(member) {
        console.log("introducing every: ", member)
        if(member === 'Ingrid Jensen') {
            return false;
        }
        // to return all value -> return true
        return true;
    })

    // Nested array
    var bands = [
        [
            "Renee Rosnes",
            "Anat Cohen",
            "Melissa Aldana",
            "Ingrid Jensen",
            "Noriko Ueda",
            "Allison Miller",
            "Cécile McLorin Salvant",
        ],
        [
            "Miles Davis",
            "Wayne Shorter",
            "Herbie Hancock",
            "Ron Carter",
            "Tony Williams",
        ],
        ["Chick Corea", "Miroslav Vitous", "Roy Haynes"],
    ];

    for (var b = 0; b < bands.length; b++) {
        var band = bands[b];

        for (var c = 0; c < band.length; c++) {
            var item = band[c]
        }
    }

    //For each
    bands.forEach((band, index) => {
        console.log('introducing by index', index)
        if(index === 0) {
        band.forEach(function(member) {
            console.log("introducing__2: ", member)
        })
    }
    })

})();
