/**
 * Created by stecrv on 26/03/2017.
 */


window.onload = function(e){
    var rest = Rest;
    rest.init();

    var ep = rest.setEndpoint('advertiser');
    rest.initLayout(ep.title, ep.url);



    document.getElementById("outputFormat").onchange = function () {
        var selectBox = document.getElementById("outputFormat");
        var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        rest.selectFormat(selectedValue)
    }.bind(rest);

    document.getElementById("getData").onclick = function () {
        rest.loadResponse();
    }.bind(rest);


};