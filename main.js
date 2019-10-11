/**Main function
Parameters:
  data = list of int
  options = object containing options
  element = DOM elememt to hold the chart */
function drawBarChart(data, options, element) {
  $(document).ready(function() {
    // all custom jQuery will go here
    //let chartTitle = $("dt").get()[0].textContent = options.title;
    let chartContainer = $("#container");

    let chartTitle = $("<dt></dt>").text(options.title);
    chartContainer.append(chartTitle);

  });
}

/**
 * Returns the largest item inside array array.
 * @param {*} array of ints
 */
function getMax(array) {
  let maxItem = array[0];
  array.forEach(function(item) {
    if (item > maxItem) {
      maxItem = item;
    }
  });
  return maxItem;
}

drawBarChart([11, 22, 33], { width: 100, height: 50, title: "Test 1" }, null);