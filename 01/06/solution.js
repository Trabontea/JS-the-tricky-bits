(function () {
    "use strict";

    var places = [
        {
            city: "Springboard",
            state: "North Krisoto",
            population: 18000,
            founded: 1790,
        },
        {
            city: "Greengrass",
            state: "North Krisoto",
            population: 360000,
            founded: 1820,
        },
        {
            city: "Rural",
            state: "North Krisoto",
            population: 4000,
            founded: 1730,
        },
        {
            city: "Scooby",
            state: "Old York",
            population: 8000,
            founded: 1890,
        },
        {
            city: "Ruby Ridge",
            state: "Old York",
            population: 20000,
            founded: 1870,
        },
        {
            city: "Droopy",
            state: "Old York",
            population: 35000,
            founded: 1910,
        },
        {
            city: "Crestfall",
            state: "Zagrat",
            population: 90000,
            founded: 1850,
        },
        {
            city: "Crumpest",
            state: "Zagrat",
            population: 400000,
            founded: 1870,
        },
    ];

    window.addEventListener("DOMContentLoaded", function ready() {
        var selectState = document.querySelector("#states");
        var totalPopSlot = document.querySelector("#total-pop");
        var meanPopSlot = document.querySelector("#mean-pop");
        var results = document.querySelector("#results");

        // STEP 1: Use Array.reduce to produce this array from places
        var states = places.reduce(function (states, place) {
            if (states.indexOf(place.state) === -1) {
                states.push(place.state);
            }

            return states;
        }, []);

        // STEP 2: Create select box options for every one of those states
        // every would also work, just remember returns
        states.forEach(function (state) {
            var option = document.createElement("option");
            option.setAttribute("value", state);
            option.append(document.createTextNode(state));
            selectState.appendChild(option);
        });

        /*
        // If you liked map here:
        states
            .map(function (state) {
                var option = document.createElement("option");
                option.setAttribute("value", state);
                option.append(document.createTextNode(state));
                return option;
            })
            .forEach(function (option) {
                selectState.appendChild(option);
            });
        */

        selectState.addEventListener("change", function (evt) {
            evt.preventDefault();

            var state = evt.currentTarget.value;
            var stateThis = this.value; // file this away for later

            if (!state) {
                results.classList.add("hidden");
                return;
            } else {
                results.classList.remove("hidden");
            }

            // STEP 3: Use filter to get all the towns in the selected state
            var towns = places.filter(function (place) {
                return place.state === state;
            });

            // STEP 4: Use reduce on towns to get the total population
            var totalPopulation = towns.reduce(function (total, place) {
                return total + parseInt(place.population, 10);
            }, 0);

            // Calculate mean population the easy way
            var meanPopulation = totalPopulation / towns.length;

            var numberFormat = new Intl.NumberFormat("en-US");
            totalPopSlot.textContent = numberFormat.format(totalPopulation);
            meanPopSlot.textContent = numberFormat.format(
                Math.floor(meanPopulation)
            );
        });
    });
})();
