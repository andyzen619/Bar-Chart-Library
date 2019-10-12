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

    data.forEach(function(element) {
      let bar = $("<dd></dd>");
      bar.addClass("percentage");
      bar.addClass("percentage-" + toPercentage(element, options.width));

      let label = $("<span>" + element + "</span>");
      label.addClass('text');
      bar.append(label);

      chartContainer.append(bar);
    });

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

/**
 *
 * @param {int} value of data point in data array
 * @param {int} width of chart provided in options object
 */
function toPercentage(value, width) {
  let percentage = (value / width) * 100;
  return Math.ceil(percentage);

}

drawBarChart([91, 22, 3], { width: 100, height: 50, title: "My bar chart" }, null);
