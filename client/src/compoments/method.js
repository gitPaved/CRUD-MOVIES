const sortTabAlphabetic = (tab, key) => {
    tab.sort(function (a, b) {
        if (a[key] < b[key]) {
            return -1;
        }
        if (a[key] > b[key]) {
            return 1;
        }
        return 0;
    });
    return tab;
};

const getMovies = (action) => {
    const category = $(".category-value").attr("data-category");
    const sort = $(".sort-value").attr("data-sort");
    const searchValue = $("#search-movie").val();
    switch (action?.type) {
        case "sort":
            searchMovies(category, action?.value, searchValue);
            break;
        case "category":
            searchMovies(action?.value, sort, searchValue);
            break;
        case "search":
            searchMovies(category, sort, action?.value);
            break;
        case "search-clear":
            searchMovies(category, sort, "");
            break;
        case "delete":
            deleteMovie(action?.value, action?.pageNumber);
            break;

        default:
            break;
    }
};

const searchMovies = (sortByCategory, sort, searchName, pageNumber = 1) => {
    var settings = {
        url: "http://localhost:3000/api/movie/filter",
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: JSON.stringify({
            order: sort && sort !== "unsorted" ? sort : "",
            categoryId:
                sortByCategory && parseInt(sortByCategory, 10) != 0
                    ? parseInt(sortByCategory, 10)
                    : "",
            search: searchName ? `${searchName}`.trim() : "",
        }),
    };

    $.ajax(settings)
        .done(function (response) {
            if (response?.length > 0) {
                $(".empty-movies").addClass("display-none");
                paginateMovies(response, pageNumber);
            } else {
                $(".empty-movies").removeClass("display-none");
                $(".data-container").addClass("display-none");
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("Erreur lors de la requête AJAX:", textStatus, errorThrown);
        });
};

const deleteMovie = (id, pageNumber) => {
    var settings = {
        url: `http://localhost:3000/api/movie/${id}`,
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };

    $.ajax(settings)
        .done(function (response) {
            if (response?.success == 1) {
                const category = $(".category-value").attr("data-category");
                const sort = $(".sort-value").attr("data-sort");
                const searchValue = $("#search-movie").val();
                searchMovies(category, sort, searchValue, pageNumber);
            } else {
                // alert(response);
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("Erreur lors de la requête AJAX:", textStatus, errorThrown);
        });
};

// const getSortMovies = (movies, sortByCategory, sort) => {
//     if (sort) sortTabAlphabetic(movies, sort);
//     return sortByCategory
//         ? movies.filter((item) => item.Genre.includes(sortByCategory))
//         : movies;
// };

// const searchMovies = (movies, sortByCategory, sort, searchName) => {
//     alert(`${sort} ${searchName} ${sortByCategory}`)
//     var sortMovies = getSortMovies(movies, sortByCategory, sort);
//     // console.log('sortMovies --- ', sortMovies)
//     var m = searchName
//         ? sortMovies.filter((item) =>
//             item.Titre.toLowerCase().includes(`${searchName}`.toLowerCase())
//         )
//         : sortMovies;
//     paginateMovies(m);

// };
