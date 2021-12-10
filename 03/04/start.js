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

        var promise1 = simPromise(1000, "Data from first promise.");
        var promise2 = simPromise(2000, "Second, longest promise.");
        var promise3 = simPromise(250, "Last, quickest promise.");

        // Similar to Promise.all()
        $.when(promise1, promise2, promise3).then(function (
            data1,
            data2,
            data3
        ) {
            btn.classList.remove("animate-pulse");
            btn.textContent = "Go!";

            document.getElementById("slot-1").textContent = data1;
            document.getElementById("slot-2").textContent = data2;
            document.getElementById("slot-3").textContent = data3;
        });
    });
})(jQuery);
