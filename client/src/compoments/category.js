const setCategories = (categories) => {
    const category = `<li><span class="dropdown-item category" data-category="0">Tout</span></li>`;
    $(".categories").append(category);
    for (let c of categories) {
        const category = `<li><span class="dropdown-item category" data-category="${c.id}">${c.name}</span></li>`;
        $(".categories").append(category);
    }

    $(".category").each(function () {
        $(this).click(function () {
            const value = $(this).attr("data-category");
            $(".category-value").html($(this).text()).attr("data-category", value);
            getMovies({
                type: "category",
                value: value,
            });
        });
    });
};

const setCategoriesModal = (categories) => {   
    for (let c of categories) {
        const category = `<option value="${c.id}">${c.name}</option>`;
        console.log(`category ------ ${category}`)
        $("#category-select").append(category);
    }
};

$(function () {
    mobiscroll.setOptions({
        locale: mobiscroll.localeFr,
        theme: "ios",
        themeVariant: "light",
    });

    $("#category-select")
        .mobiscroll()
        .select({
            filter: true,
            touchUi: false,
            inputElement: document.getElementById("category-select-input"),
        });
    $.get("http://localhost:3000/api/category", function (data, status) {
        if (status === "success") {
            setCategories(data);
            setCategoriesModal(data);
        } else {
            // alert(`"Error ,",${status}`);
        }
    });
});
