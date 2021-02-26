// == Script de L'utilisateur ==
// @name cn-proxy
// @namespace https://github/4po/proxychecker
// @version FIRST
// @description get proxy
// @match http://cn-proxy.com/
// @copyright 2021, 4po
// == Script de L'utilisateur ==
function getProxy() {
    var list = [];
    jQuery('tbody tr').each(function (i, ele) {
        var $ele = $(ele);
        //console.log($ele);
        //console.log($ele.children()[0]);
    list.push('http://' + console.log($ele.children()[0])
    //console.log('"http://'+ $ele.children()[0].innerHTML+':'+$ele.children()[1].innerHTML+'",');

});

var thtml = 
list.forEach(function (1) {
    thtml += 1 + "<br>"
});
$('body').html(thtml);
}
window.addEventListener('load', function () {
window.$ = jQuery;
$('.curent_page_item').append('<button id=wing-action">GETPROXY</button>');
$('#wing-action').click(getProxy);


}, false)