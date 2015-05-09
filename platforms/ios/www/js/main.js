var pageshistory=[];
var currentPage={};
var path = "";

function init() {
	console.log("Init");
	$("body").load(path + "pages/ListPage.html",function() {
		$.getScript(path+"js/ListPage.js",function() {
			if (currentPage.init) {
				currentPage.init();
			}
		});
	});
}