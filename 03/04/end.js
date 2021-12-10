(function ($) {
    "use strict";

    // Simulates a Promise. Thanks to TJ Crowder:
    // https://stackoverflow.com/a/22707551
    function simPromise(delay, value) {
        return new Promise(function (resolve) {
            window.setTimeout(resolve, delay, value);
        });
    }

    var btn = document.querySelector("#go");

    btn.addEventListener("click", function (evt) {
        evt.preventDefault();

        btn.classList.add("animate-pulse");
        btn.textContent = "Loading…";

        var promises = [
            simPromise(1000, "Data from first promise."),
            simPromise(2000, "Second, longest promise."),
            simPromise(250, "Last, quickest promise."),
        ];

        // Similar to Promise.all()
        $.when(...promises).then(function (...args) {
            btn.classList.remove("animate-pulse");
            btn.textContent = "Go!";

            args.forEach(function (item, index) {
                document.getElementById("slot-" + (index + 1)).textContent =
                    item;
            });
        });
    });
})(jQuery);
