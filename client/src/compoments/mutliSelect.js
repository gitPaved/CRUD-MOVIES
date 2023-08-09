$(function () {
    mobiscroll.setOptions({
        locale: mobiscroll.localeFr, // Specify language like: locale: mobiscroll.localePl or omit setting to use default
        theme: "ios", // Specify theme like: theme: 'ios' or omit setting to use default
        themeVariant: "light", // More info about themeVariant: https://docs.mobiscroll.com/5-26-1/select#opt-themeVariant
    });

    $(function () {
        // Mobiscroll Select initialization
        $("#demo-multiple-select")
            .mobiscroll()
            .select({
                display:'anchored',
                filter:true,
                inputElement: document.getElementById("demo-multiple-select-input"), // More info about inputElement: https://docs.mobiscroll.com/5-26-1/select#opt-inputElement
            });
    });
});
