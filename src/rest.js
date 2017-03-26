/**
 * Created by stecrv on 26/03/2017.
 */

var Rest = {
    apiVersion: '1.0',
    outputFormats: ['json', 'xml'],
    selectedEndPoint: null,
    selectedFormat: null,
    outputId: null,
    endPoints: {
        advertiser: {title: 'Advertiser list', url: 'advertiser/format=api'}
    },
    init: function () {
        this.selectedFormat = 'json';
        this.outputId = 'output';
    },
    setEndpoint: function (key) {
        if (!key) key = 'advertiser';
        this.selectedEndPoint = key;
        return this.endPoints[key];
    },
    initLayout: function (title, url) {
        document.getElementById('endPointTile').innerHTML = title;
        document.getElementById('endPointURL').value = url;
        for (var i = 0; i < this.outputFormats.length; i++) {
            var opt = document.createElement('option');
            opt.value = this.outputFormats[i];
            opt.innerHTML = this.outputFormats[i];
            document.getElementById('outputFormat').appendChild(opt);
        }
    },
    selectFormat: function (format) {
        this.selectedFormat = !format ? 'json' : format;
    },
    handleOutput: function (res) {
        document.getElementById("output").innerHTML = res;

    },
    loadResponse: function () {

        //this.selectedEndPoint.url;
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {

                    this.handleOutput(xmlhttp.responseText);
                }
                else if (xmlhttp.status == 400) {
                    this.handleOutput('There was an error 400');
                }
                else {
                    this.handleOutput('something else other than 200 was returned');
                }
            }
        }.bind(this);

        xmlhttp.open("GET", "/response." + this.selectedFormat, true);
        xmlhttp.send();
    }
};