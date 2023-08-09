const searchClear = (val) => {
    if (`${val}`.trim().length > 0) $(".search-clear").addClass("visible");
    else $(".search-clear").removeClass("visible").addClass("hidden");

    $(".search-clear").on("click", function () {
        $("#search-movie").val("");
        getMovies({
            type: "search-clear",
            value: "",
        });
        $(this).removeClass("visible").addClass("hidden");
    });
};

$(function () {
    $("#search-movie").on("focus", function () {
        $(".search-input-container").addClass("border-container-search");
    });

    $("#search-movie").on("blur", function () {
        $(".search-input-container").removeClass("border-container-search");
    });

    searchClear($("#search-movie").val());

    $("#search-movie").on("keyup", function () {
        const value = $("#search-movie").val();

        searchClear(value);
        getMovies({
            type: "search",
            value: value,
        });
    });
});
