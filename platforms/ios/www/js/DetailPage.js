currentPage = {};
currentPage.init = function() {
    alert("DetailPage::init");
    console.log("DetailPage::init");
};
currentPage.back = function() {
    alert("DetailPage:back");
    console.log("DetailPage::back");
    $("body").load(path + "pages/ListPage.html"),
        function() {
            $.getScript(path + "js/ListPage.js", function() {
                if (currentPage.init) {
                    currentPage.init();
                }
            });
        };
};