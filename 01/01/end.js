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

    for (var i = 0; i < band.length; i++) {
        var member = band[i];
    }

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
})();
