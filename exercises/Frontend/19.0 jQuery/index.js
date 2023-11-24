// adding class to css
$("h1").addClass("bigass-title margin-50");

// setting h1 text
$("h1").text("Bye.");

// manipulating the button
$("button").text("Don't click");

// manipulating the button
$("button").html("<em>Hey</em>");

// manipulating the link
$("a").attr("href", "https://www.bing.com");

// change h1 to green when click on h1
$("h1").click(function() {
    $("h1").css("color", "green")
});

// change h1 to purple when click on buttons
$("button").click(function () {
    $("h1").css("color", "purple");
});

// change the h1 for de key pressed 
$(document).keydown(function(event) {
    $("h1").text(event.key);
});

/* creating buttons anywhere
$("h1").before("<button>New</button>");

$("h1").after("<button>New</button>");

$("h1").prepend("<button>New</button>");

$("h1").append("<button>New</button>");
*/

// set h1 to slide up and down with fade effect when click in buttons
$("button").on("click", function () {
    $("h1").slideToggle();
})

/* set h1 to disappear and reappear with fade effect when click in buttons
$("button").on("click", function () {
    $("h1").fadeToggle();
}) */

// adding animation on h1 to the click on button
$("button").on("click", function () {
    $("h1").animate({margin: 300});
})


