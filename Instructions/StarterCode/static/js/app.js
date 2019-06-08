// from data.js
var tableData = data;

// YOUR CODE HERE!

let tbody = d3.select("#ufo-table > tbody");
tableData.forEach((ufosight) => {
    var row = tbody.append("tr");
    Object.entries(ufosight).forEach(([key, value]) => {
        if (key !== "durationMinutes") {
            if (dateSelected === "" || dateSelected === value) {
            var cell = row.append("td");
            cell.text(value);
        }else{
            row.remove();
        }
        }
    });
});

    let searchButton = d3.select("filter-btn");
    searchButton.on("click", () => {
    d3.event.preventDefault();

    let searchBox = d3.select("#datetime");
    searchData(searchBox.text);
})

searchData("");



//from data.js

var tableData = data;

var tbody = d3.select("tbody");

//*********************************

tableData.forEach(function(ufosight) {
    console.log(ufosight);
    var row = tbody.append("tr");

// use d3 to update each cell's values with ufo data.

    Object.entries(ufosight).forEach(function([key, value]){
        console.log(key, value);
        ver cell = tbody.append("td");
        cell.text(value);

        });
});

//**************************

var submit = d3.select('#filter-btn');
var empty = d3.select("tbody")
submit.on("click", function(){
    empty.html("")
    d3.event.prefentDefault();
    var inputElement = d3select("#datetime");
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData = tableData.filter(bydate => bydate.datatime === inputValue);

    console.log(filterData);

    filteredData.forEach(function(filteredReport) {
        console.log(filteredReport);
        var row = tbody.append("tr");

    // use d3 to update each cell's values with data

    Object.entries(filteredReport).forEach(funcion([key, value]) {
        console.log(key,value);
        var cell = tbody.append("td");
    });

    });
});