const listSort = [
    {
        name: "Titre",
        type: "title",
    },
    {
        name: "Annee",
        type: "year",
    },
    {
        name: "Duree",
        type: "duration",
    },
    {
        name: "Producteur",
        type: "productor",
    },
    {
        name: "Acteurs",
        type: "actors",
    },
];

$(function () {
    const type = `<li><span class="dropdown-item sort-type" data-sort="unsorted">Non trié</span></li>`;
    $(".sort-menu").append(type);
    for (let s of listSort) {
        const type = `<li><span class="dropdown-item sort-type" data-sort="${s.type}">${s.name}</span></li>`;
        $(".sort-menu").append(type);
    }

    $(".sort-type").each(function () {
        $(this).click(function () {
            const value = $(this).attr("data-sort");
            $(".sort-value").html($(this).text()).attr("data-sort", value);
            getMovies({
                type: "sort",
                value: value,
            });
        });
    });
});
