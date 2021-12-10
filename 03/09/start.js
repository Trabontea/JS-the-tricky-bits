(function () {
    "use strict";

    /**
     * Challenge Tasks:
     *  1.  Find and fix the places where `this` isn't working.
     *      a. Don't use bind on line 85, do something else.
     *  2.  STORY.setupInputCapture doesn't accept an array,
     *      use a method where it's invoked to allow an array to work.
     *      (Don't forget the body uses `this`.)
     *  3.  Change STORY.generateStory to use an object instead of
     *      individual params.  The one param should be the state object.
     *      Use destructuring assignment in the definition.
     *
     *  At this point the app should work.  Next:
     *
     *  4.  STORY.handleChange uses the event object.  Change it to
     *      rely on a DOM ID param instead.
     *  5.  Replace the hard-coded "oatmeal" in the story with a new field.
     */

    window.STORY = {
        form: document.getElementById("form-input"),
        output: document.getElementById("story-output"),

        state: {
            storyText: "",
        },

        handleChange: function (evt) {
            var value = evt.currentTarget.value;

            this.state[evt.currentTarget.id] = value;
        },

        setupInputCapture: function () {
            Array.from(arguments).forEach(
                function (id) {
                    var element = document.getElementById(id);
                    if (!element) return;

                    // if the inputs load with input, capture it
                    if (element.value) {
                        this.state[id] = element.value;
                    }

                    element.addEventListener("change", this.handleChange);
                }.bind(this)
            );
        },

        handleSubmit: function (evt) {
            evt.preventDefault();

            this.state.storyText = this.generateStory(this.state);

            this.output.innerHTML = this.state.storyText;
        },

        generateStory: function (noun, adj, adverb, p_noun, name) {
            return `<h2 class="font-bold text-xl mb-4">The Tale of ${name}</h2>
            <p class="mb-2">Once upon a time there was a little
            <span class="font-bold">${noun}</span> named
            <span class="font-bold">${name}</span>.</p>
            <p class="mb-2">They were feeling a bit
            <span class="font-bold">${adj}</span> and decided it was time for lunch.
            Unfortunately, the cafeteria was out of their usual
            <span class="font-bold">(${p_noun})</span>, so
            they walked <span class="font-bold">${adverb}</span> to the last table
            to get their backup plan, oatmeal.</p>
            <p>THE END.</p>`;
        },

        init: function () {
            console.log("Story app initializing…");

            var inputIds = [
                "noun",
                "adjective",
                "adverb",
                "plural_noun",
                "proper_name",
            ];
            // initialize the state object's slots for words
            inputIds.forEach(function (id) {
                this.state[id] = "";
            });
            // initialize event listeners
            this.setupInputCapture(inputIds);

            this.form.addEventListener("submit", this.handleSubmit);
        },
    };

    STORY.init();
})();
