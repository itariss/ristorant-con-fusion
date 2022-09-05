$(document).ready(function () {
	$("#myCarousel").carousel({ interval: 2000 });

	//Modal handlers

	// Modal Reserve Form
	$("#buttonReserve").click(function () {
		$("#formModal").modal("toggle");
	});

	//Modal Login

	$("#linkLogin").click(function () {
		$("#loginModal").modal("toggle");
	});

	//Close Modal

	$(".close").click(function () {
		$(".modal").modal("hide");
	});

	$("[type=close]").click(function () {
		$(".modal").modal("hide");
	});

	// Carousel Handler
	$("#carouselButton").click(function () {
		if ($("#carouselButton").children("span").hasClass("fa-pause")) {
			$("#myCarousel").carousel("pause");
			$("#carouselButton").children("span").removeClass("fa-pause");
			$("#carouselButton").children("span").addClass("fa-play");
		} else if ($("#carouselButton").children("span").hasClass("fa-play")) {
			$("#myCarousel").carousel("cycle");
			$("#carouselButton").children("span").removeClass("fa-play");
			$("#carouselButton").children("span").addClass("fa-pause");
		}
	});
});

//Tooltip script

// $(document).ready(function()  {
// 	$("[data-toggle='tooltip']").tooltip();
// });
