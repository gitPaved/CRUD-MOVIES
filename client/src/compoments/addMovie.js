const formField = [
    "#title",
    "#year",
    "#duration",
    "#productor",
    "#actors",
    "#description",
    "#movieImage",
];

const checkInputYear = () => {
    $("#year").on("keypress", function (event) {
        const key = event.keyCode || event.which;
        // Vérifier si la touche pressée est un chiffre (0 à 9)
        if (key < 48 || key > 57) {
            // Empêcher la saisie en retournant false
            return false;
        }
        if (`${$(this).val()}`.trim().length >= 4) return false;
        // Autoriser la saisie de chiffres
        return true;
    });
};

const checkInputDuration = () => {
    $("#duration").on("keypress", function (event) {
        const key = event.keyCode || event.which;
        // Vérifier si la touche pressée est un chiffre (0 à 9)
        if (key < 48 || key > 57) {
            // Empêcher la saisie en retournant false
            return false;
        }
        // Autoriser la saisie de chiffres
        return true;
    });
};

const checkIsImageFile = () => {
    const file = $("#movieImage")[0].files[0];
    if (file) {
        // Vérifier le type MIME du fichier
        if (file.type.startsWith("image/")) {
            return true;
        }
    }
    return false;
};

const checkForm = (isUpdateMovie) => {
    for (let field of formField) {
        if (field === "#movieImage") {
            if (!checkIsImageFile()) {
                if (!isUpdateMovie) {
                    $("#movieImage").addClass("form-error");
                    return false;
                }
            }
        } else {
            if (`${$(`${field}`).val()}`.trim().length <= 0) {
                $(`${field}`).addClass("form-error");
                return false;
            }
        }
    }

    return true;
};

const removeFormErrorClass = () => {
    for (let field of formField) {
        $(`${field}`).removeClass("form-error");
    }
};

const add = (
    url,
    method,
    title,
    year,
    duration,
    categoryId,
    productor,
    authors,
    description,
    image,
    pageNumber,
    modal = null
) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("year", year);
    formData.append("duration", duration);
    formData.append("categoryId", categoryId);
    formData.append("productor", productor);
    formData.append("actors", authors);
    formData.append("description", description);
    formData.append("image", image);
    var settings = {
        url: url,
        method: method,
        data: formData,
        processData: false,
        contentType: false,
    };

    $.ajax(settings)
        .done(function (response) {
            if ("success" in response) {
                $(".empty-movies").addClass("display-none");
                if (modal) {
                    modal.hide();
                }
                const category = $(".category-value").attr("data-category");
                const sort = $(".sort-value").attr("data-sort");
                const searchValue = $("#search-movie").val();
                searchMovies(category, sort, searchValue, pageNumber);
            } else {
            }
        })
        .fail(function (jqXHR, textStatus, errorThrown) {
            console.log("Erreur lors de la requête AJAX:", textStatus, errorThrown);
        });
};

const modalUpateMoive = (movie = null, categories = null, pageNumber = 1) => {
    var html = `<div class="modal fade" data-bs-keyboard="false" data-bs-backdrop="static" id="update-movie-modal">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5">Ajouter un film</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body px-3">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Titre</label>
                                    <input type="text" class="form-control" id="title" placeholder="Entrez le titre" value="${movie ? movie?.title : ""
        }" />
                                </div>
                                <div class="mb-3">
                                    <label for="year" class="form-label">Annee</label>
                                    <input type="text" class="form-control" id="year" placeholder="Entrez l'annee" pattern="[0-9]{4}" value="${movie ? movie?.year : ""
        }"/>
                                </div>
                                <div class="mb-3">
                                    <label for="duration" class="form-label">Duree (min)</label>
                                    <input type="text" class="form-control" id="duration" placeholder="Entrez la duree" pattern="[0-9]{4}" value="${movie ? movie?.duration : ""
        }"/>
                                </div>
                                <div class="mb-3">
                                    <label for="category " class="form-label">Genre</label>                                    
                                    <select  class="form-select" id="categoryId" placeholder="Selectionnez le genre">
                                        ${categories &&
        categories.map(
            (category, index) =>
                `<option value="${category.id}" ${movie &&
                    movie?.Categories[0].id ===
                    category.id
                    ? "selected=selected"
                    : ""
                }>${category.name}</option>`
        )
        }
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="productor" class="form-label">Producteur</label>
                                    <input type="text " class="form-control" id="productor" placeholder="Entrez le producteur" value="${movie ? movie?.productor : ""
        }" />
                                </div>
                                <div class="mb-3">
                                    <label for="actors" class="form-label">Acteurs</label>
                                    <textarea class="form-control" id="actors" rows="3" placeholder="Entrez la liste des acteurs separee par des virgule. Ex: Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page "></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">Description</label>
                                    <textarea class="form-control" id="description" rows="3"></textarea>
                                </div>

                                <div class="mb-3">
                                    <label for="movieImage" class="form-label">Image</label>
                                    <input class="form-control" type="file" id="movieImage" accept="image/*" />
                                    <div class="img-movie position-relative h-100 mx-auto mt-2" >
                                    ${movie
            ? `<img class="object-fit-cover w-100 h-100" src="${movie.image}" alt="Image" />`
            : ""
        }
                           
                        </div>
                                </div>
                                
                            </div>
                            <div class="modal-footer d-flex gap-3">
                                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                    Annuler
                                </button>
                                <button type="button" class="btn btn-dark ${movie ? "btn-update" : "btn-save"
        }">
                                    Enregistrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;

    $(".modal-add-movie").append(html);
    $("#actors").val(movie ? movie?.actors : "");
    $("#description").val(movie ? movie?.description : "");

    const myUpdateModal = new bootstrap.Modal("#update-movie-modal");
    myUpdateModal.show();

    $(".btn-save").on("click", function (event) {
        event.preventDefault();
        if (checkForm(false)) {
            add(
                "http://localhost:3000/api/movie/create",
                "POST",
                $("#title").val(),
                $("#year").val(),
                $("#duration").val(),
                $("#categoryId").val(),
                $("#productor").val(),
                $("#actors").val(),
                $("#description").val(),
                $("#movieImage")[0].files[0],
                pageNumber
            );
        }
    });

    $(".btn-update").on("click", function (event) {
        event.preventDefault();
        if (checkForm(true)) {
            add(
                `http://localhost:3000/api/movie/${movie?.id}`,
                "PUT",
                $("#title").val(),
                $("#year").val(),
                $("#duration").val(),
                $("#categoryId").val(),
                $("#productor").val(),
                $("#actors").val(),
                $("#description").val(),
                $("#movieImage")[0].files ? $("#movieImage")[0].files[0] : "",
                pageNumber,
                myUpdateModal
            );
        }
    });
};

$(function () {
    checkInputYear();
    checkInputDuration();

    $("#category").select2({
        theme: "bootstrap-5",
        dropdownParent: $("#category").parent(), // Required for dropdown styling
        tags: true,
        placeholder: "Selectionnez les categories",
        allowClear: true,
    });

    $(".btn-add-movie").on("click", function () {
        removeFormErrorClass();
        $.get("http://localhost:3000/api/category", function (data, status) {
            if (status === "success") {
                modalUpateMoive(null, data, 1);
            } else {
                // alert(`"Error ,",${status}`);
            }
        });
    });

    for (const elementId of formField) {
        $(`${elementId}`).on("keyup", function (event) {
            if (`${$(`${elementId}`).val()}`.trim().length > 0) {
                $(`${elementId}`).removeClass("form-error");
            }
        });
    }
});
