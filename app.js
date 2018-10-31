const app = (function app() {

    "use strict";

    const dom = {};
    const testURL = "http://cdn.55labs.com/demo/api.json";

    const getAXIOS = function(url, callback) {
        axios.get(url).then(res => {
            //console.log("axios get", res);
            callback(res.data.data)
        }).catch(err => {
            console.error(err);
        });
    };
    const populateList = function(results) {
        return console.log(results);
        results.forEach(res => {
            const li = document.createElement("li");
            li.classList.add("item");
            li.textContent = `${res.fields.adresse} ( ${res.fields.arrondissement} )`;
            dom.listRes.appendChild(li);
        });
    };

    const start = function() {
        console.log("ready to rock !");

        getAXIOS(testURL, populateList);
    }

    window.addEventListener("DOMContentLoaded", start);

}());