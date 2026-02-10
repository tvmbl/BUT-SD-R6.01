resizeToContainer = function(svg) {
    //svg.attr("width", "");
    //svg.attr("height", "");
    svg.attr("viewbox", "");
};

// Reveal.js will sort fragment indices, filling them in when they are not specified with "data-fragment-index" and
// forcing increments to 1 (no gaps). But the sorting function does not take into account indices set programmatically
// by Animate modifiers, making things out of order.
// By using a "forced-fragment-index" attribute instead; we can reset it the indices to any values after the sort
// routine has executed.
applyForcedFragmentIndex = function() {
    fragments = document.querySelectorAll("[forced-fragment-index]");
    fragments.forEach(fragment => {
        //console.log(fragment.getAttribute("data-fragment-index"), "->", fragment.getAttribute("forced-fragment-index"));
        fragment.setAttribute("data-fragment-index", fragment.getAttribute("forced-fragment-index"));
    });
};

applyForcedFragmentIndex();

Reveal.initialize({
    plugins: [
        RevealLoadContent,
        RevealAnimate
    ],
    slideNumber: true,
    //pdfSeparateFragments: false
}).then(
    () => {
        applyForcedFragmentIndex();
        //Reveal.slide(Reveal.getTotalSlides() - 1);
    }
);
