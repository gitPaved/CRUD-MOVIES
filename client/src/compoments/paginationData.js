const myDeleteModal = new bootstrap.Modal("#delete-movie-modal");

const conacteCategory = (categories) => {
    var str = "";

    for (const category of categories) {
        str += `${category.name}, `;
    }
    return str.substring(0, str.length - 2);
};



const paginateMovies = (movies, pageNumber = 1) => {
    $("#pagination-data").pagination({
        dataSource: movies,
        pageSize: 4,
        // pageRange:3,
        pageNumber: pageNumber,
        showGoInput: true,
        showGoButton: true,
        showNavigator: true,
        goButtonText: "Aller",
        formatNavigator:
            "<%= rangeStart %> - <%= rangeEnd %> de <%= totalNumber %> films,  <%= currentPage %>/<%= totalPage %> Page",

        callback: function (response, pagination) {
            window.console && console.log(response, pagination);
            var movie = "";
            $.each(response, function (index, item) {
                movie += `<div class="d-flex item-movie">
                        <div class="img-movie position-relative h-100">
                            <img class="object-fit-cover w-100 h-100" src="${item.image
                    }" alt="Image" />
                        </div>
                        <div class="w-100 px-3">
                            <div class="d-flex justify-content-between flex-column">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <span class="fw-bold fs-4 color-primary">${item.title
                    }</span>
                                        <div class="d-flex">
                                            <div class="d-flex gap-3 other-info fs-7">
                                                <span>${item.year}</span>
                                                <span>${item.duration
                    } min</span>
                                                <span>${conacteCategory(
                        item.Categories
                    )}</span>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex gap-3 pt-3">
                                        <button type="button" class="btn btn-outline-secondary btn-action btn-edit">
                                           
                                            <i class="bi bi-pencil-square"></i>
                                        </button>
                                        <button type="button" class="btn btn-outline-secondary btn-action btn-delete">
                                            <i class="bi bi-x"></i>
                                        </button>
                                    </div>
                                </div>

                                <div class="d-flex gap-3 my-4">
                                    <div class="d-flex flex-column">
                                        <span class="color-primary fw-semibold">${item.productor
                    }</span>
                                        <span class="fs-7">Producteur</span>
                                    </div>
                                    <div class="d-flex flex-column">
                                        <span class="color-primary fw-semibold">${item.actors
                    }</span>
                                        <span class="fs-7">Acteurs</span>
                                    </div>                                 
                                    
                                </div>
                                <div>${item.description}</div>
                            </div>
                        </div>
                    </div>
                    <hr/>`;
                $(".data-container").html(movie).removeClass("display-none");

                $(".btn-edit").each(function (index) {
                    $(this).click(function () {
                        $.get("http://localhost:3000/api/category", function (data, status) {
                            if (status === "success") {
                                $("#update-movie-modal").remove();
                                modalUpateMoive(response[index], data,pagination?.pageNumber);
                            } else {
                                // alert(`"Error ,",${status}`);
                            }
                        });
                    });
                });

                $(".btn-delete").each(function (index) {
                    $(this).click(function () {
                        $(".movie-title").text(response[index].title);
                        $(".btn-delete-movie")
                            .attr("data-movie-id", response[index].id)
                            .attr("data-page-number", pagination?.pageNumber);
                        myDeleteModal.show();
                    });
                });
            });
        },
    });

    $(".btn-delete-movie").on("click", function () {
        var id = $(this).attr("data-movie-id");
        var pageNumber = $(this).attr("data-page-number");
        getMovies({
            type: "delete",
            value: id,
            pageNumber,
        });
        myDeleteModal.hide();
    });
};

const movieLoading = (pageNumber = 1) => {
    $.get("http://localhost:3000/api/movie", function (data, status) {
        if (status === "success") {
            $(".data-loading").addClass("display-none");
            if (data?.length > 0) {
                paginateMovies(data, pageNumber);
            } else {
                $(".empty-movies").removeClass("display-none");
            }
        } else {
            // alert(`"Error ,",${status}`);
        }
    });
};

$(function () {
    movieLoading();
});
