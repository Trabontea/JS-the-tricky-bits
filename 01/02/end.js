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

    for (var member of band) {
        // Nice!
    }

    // band.forEach(function (member) {
    //     console.log("Introducing…", member);
    // });

    band.every(function (member) {
        console.log("Introducing…", member);

        if (member === "Ingrid Jensen") {
            return false;
        }

        return true;
    });

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

        for (var c = 0; c < band.length; c++) {}
    }

    // bands.forEach(function (band, index) {
    //     console.log("Introducing band", index);

    //     band.forEach(function (member) {
    //         console.log("Introducing…", member);
    //     });
    // });
})();
