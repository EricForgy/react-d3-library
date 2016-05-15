const createScatterPlot = require('./../basic-graphs/createScatterPlot');

//Build data to pass to createScatterPlot;
var data = {}

// Define class names for CSS styling;
data.x_axis_class = "x axis";
data.y_axis_class = 'y axis';
data.legend_class = 'legend';
data.dot_class = 'dot';
data.label_class = 'label';

// Define the height and width of the graph
data.width = 960;
data.height = 500;

// Define margins of scatter plot
data.margin = {top: 20, right: 20, bottom: 30, left: 40};

// Names displayed along x and y axis

data.x_display_name = 'X VALUE';

data.y_display_name = 'Y VALUE';

// Create collection of x and y data
data.dataSet = [
			   	
	{ y_value : 5.1, x_value : 3.5, type : 'type 1' },
	{ y_value : 4.9, x_value : 3.0, type : 'type 1' },
	{ y_value : 4.7, x_value : 3.2, type : 'type 1' },
	{ y_value : 4.6, x_value : 3.1, type : 'type 1' },
	{ y_value : 5.0, x_value : 3.6, type : 'type 1' },
	{ y_value : 5.4, x_value : 3.9, type : 'type 1' },
	{ y_value : 4.6, x_value : 3.4, type : 'type 1' },
	{ y_value : 5.0, x_value : 3.4, type : 'type 1' },
	{ y_value : 4.4, x_value : 2.9, type : 'type 1' },
	{ y_value : 4.9, x_value : 3.1, type : 'type 1' },
	{ y_value : 5.4, x_value : 3.7, type : 'type 1' },
	{ y_value : 4.8, x_value : 3.4, type : 'type 1' },
	{ y_value : 4.8, x_value : 3.0, type : 'type 1' },
	{ y_value : 4.3, x_value : 3.0, type : 'type 1' },
	{ y_value : 5.8, x_value : 4.0, type : 'type 1' },
	{ y_value : 5.7, x_value : 4.4, type : 'type 1' },
	{ y_value : 5.4, x_value : 3.9, type : 'type 1' },
	{ y_value : 5.1, x_value : 3.5, type : 'type 1' },
	{ y_value : 5.7, x_value : 3.8, type : 'type 1' },
	{ y_value : 5.1, x_value : 3.8, type : 'type 1' },
	{ y_value : 5.4, x_value : 3.4, type : 'type 1' },
	{ y_value : 5.1, x_value : 3.7, type : 'type 1' },
	{ y_value : 4.6, x_value : 3.6, type : 'type 1' },
	{ y_value : 5.1, x_value : 3.3, type : 'type 1' },
	{ y_value : 4.8, x_value : 3.4, type : 'type 1' },
	{ y_value : 5.0, x_value : 3.0, type : 'type 1' },
	{ y_value : 5.0, x_value : 3.4, type : 'type 1' },
	{ y_value : 5.2, x_value : 3.5, type : 'type 1' },
	{ y_value : 5.2, x_value : 3.4, type : 'type 1' },
	{ y_value : 4.7, x_value : 3.2, type : 'type 1' },
	{ y_value : 4.8, x_value : 3.1, type : 'type 1' },
	{ y_value : 5.4, x_value : 3.4, type : 'type 1' },
	{ y_value : 5.2, x_value : 4.1, type : 'type 1' },
	{ y_value : 5.5, x_value : 4.2, type : 'type 1' },
	{ y_value : 4.9, x_value : 3.1, type : 'type 1' },
	{ y_value : 5.0, x_value : 3.2, type : 'type 1' },
	{ y_value : 5.5, x_value : 3.5, type : 'type 1' },
	{ y_value : 4.9, x_value : 3.6, type : 'type 1' },
	{ y_value : 4.4, x_value : 3.0, type : 'type 1' },
	{ y_value : 5.1, x_value : 3.4, type : 'type 1' },
	{ y_value : 5.0, x_value : 3.5, type : 'type 1' },
	{ y_value : 4.5, x_value : 2.3, type : 'type 1' },
	{ y_value : 4.4, x_value : 3.2, type : 'type 1' },
	{ y_value : 5.0, x_value : 3.5, type : 'type 1' },
	{ y_value : 5.1, x_value : 3.8, type : 'type 1' },
	{ y_value : 4.8, x_value : 3.0, type : 'type 1' },
	{ y_value : 5.1, x_value : 3.8, type : 'type 1' },
	{ y_value : 4.6, x_value : 3.2, type : 'type 1' },
	{ y_value : 5.3, x_value : 3.7, type : 'type 1' },
	{ y_value : 5.0, x_value : 3.3, type : 'type 1' },
	{ y_value : 7.0, x_value : 3.2, type : 'type 2' },
	{ y_value : 6.4, x_value : 3.2, type : 'type 2' },
	{ y_value : 6.9, x_value : 3.1, type : 'type 2' },
	{ y_value : 5.5, x_value : 2.3, type : 'type 2' },
	{ y_value : 6.5, x_value : 2.8, type : 'type 2' },
	{ y_value : 5.7, x_value : 2.8, type : 'type 2' },
	{ y_value : 6.3, x_value : 3.3, type : 'type 2' },
	{ y_value : 4.9, x_value : 2.4, type : 'type 2' },
	{ y_value : 6.6, x_value : 2.9, type : 'type 2' },
	{ y_value : 5.2, x_value : 2.7, type : 'type 2' },
	{ y_value : 5.0, x_value : 2.0, type : 'type 2' },
	{ y_value : 5.9, x_value : 3.0, type : 'type 2' },
	{ y_value : 6.0, x_value : 2.2, type : 'type 2' },
	{ y_value : 6.1, x_value : 2.9, type : 'type 2' },
	{ y_value : 5.6, x_value : 2.9, type : 'type 2' },
	{ y_value : 6.7, x_value : 3.1, type : 'type 2' },
	{ y_value : 5.6, x_value : 3.0, type : 'type 2' },
	{ y_value : 5.8, x_value : 2.7, type : 'type 2' },
	{ y_value : 6.2, x_value : 2.2, type : 'type 2' },
	{ y_value : 5.6, x_value : 2.5, type : 'type 2' },
	{ y_value : 5.9, x_value : 3.2, type : 'type 2' },
	{ y_value : 6.1, x_value : 2.8, type : 'type 2' },
	{ y_value : 6.3, x_value : 2.5, type : 'type 2' },
	{ y_value : 6.1, x_value : 2.8, type : 'type 2' },
	{ y_value : 6.4, x_value : 2.9, type : 'type 2' },
	{ y_value : 6.6, x_value : 3.0, type : 'type 2' },
	{ y_value : 6.8, x_value : 2.8, type : 'type 2' },
	{ y_value : 6.7, x_value : 3.0, type : 'type 2' },
	{ y_value : 6.0, x_value : 2.9, type : 'type 2' },
	{ y_value : 5.7, x_value : 2.6, type : 'type 2' },
	{ y_value : 5.5, x_value : 2.4, type : 'type 2' },
	{ y_value : 5.5, x_value : 2.4, type : 'type 2' },
	{ y_value : 5.8, x_value : 2.7, type : 'type 2' },
	{ y_value : 6.0, x_value : 2.7, type : 'type 2' },
	{ y_value : 5.4, x_value : 3.0, type : 'type 2' },
	{ y_value : 6.0, x_value : 3.4, type : 'type 2' },
	{ y_value : 6.7, x_value : 3.1, type : 'type 2' },
	{ y_value : 6.3, x_value : 2.3, type : 'type 2' },
	{ y_value : 5.6, x_value : 3.0, type : 'type 2' },
	{ y_value : 5.5, x_value : 2.5, type : 'type 2' },
	{ y_value : 5.5, x_value : 2.6, type : 'type 2' },
	{ y_value : 6.1, x_value : 3.0, type : 'type 2' },
	{ y_value : 5.8, x_value : 2.6, type : 'type 2' },
	{ y_value : 5.0, x_value : 2.3, type : 'type 2' },
	{ y_value : 5.6, x_value : 2.7, type : 'type 2' },
	{ y_value : 5.7, x_value : 3.0, type : 'type 2' },
	{ y_value : 5.7, x_value : 2.9, type : 'type 2' },
	{ y_value : 6.2, x_value : 2.9, type : 'type 2' },
	{ y_value : 5.1, x_value : 2.5, type : 'type 2' },
	{ y_value : 5.7, x_value : 2.8, type : 'type 2' },
	{ y_value : 6.3, x_value : 3.3, type : 'type 3' },
	{ y_value : 5.8, x_value : 2.7, type : 'type 3' },
	{ y_value : 7.1, x_value : 3.0, type : 'type 3' },
	{ y_value : 6.3, x_value : 2.9, type : 'type 3' },
	{ y_value : 6.5, x_value : 3.0, type : 'type 3' },
	{ y_value : 7.6, x_value : 3.0, type : 'type 3' },
	{ y_value : 4.9, x_value : 2.5, type : 'type 3' },
	{ y_value : 7.3, x_value : 2.9, type : 'type 3' },
	{ y_value : 6.7, x_value : 2.5, type : 'type 3' },
	{ y_value : 7.2, x_value : 3.6, type : 'type 3' },
	{ y_value : 6.5, x_value : 3.2, type : 'type 3' },
	{ y_value : 6.4, x_value : 2.7, type : 'type 3' },
	{ y_value : 6.8, x_value : 3.0, type : 'type 3' },
	{ y_value : 5.7, x_value : 2.5, type : 'type 3' },
	{ y_value : 5.8, x_value : 2.8, type : 'type 3' },
	{ y_value : 6.4, x_value : 3.2, type : 'type 3' },
	{ y_value : 6.5, x_value : 3.0, type : 'type 3' },
	{ y_value : 7.7, x_value : 3.8, type : 'type 3' },
	{ y_value : 7.7, x_value : 2.6, type : 'type 3' },
	{ y_value : 6.0, x_value : 2.2, type : 'type 3' },
	{ y_value : 6.9, x_value : 3.2, type : 'type 3' },
	{ y_value : 5.6, x_value : 2.8, type : 'type 3' },
	{ y_value : 7.7, x_value : 2.8, type : 'type 3' },
	{ y_value : 6.3, x_value : 2.7, type : 'type 3' },
	{ y_value : 0.7, x_value : 3.3, type : 'type 3' },
	{ y_value : 0.2, x_value : 3.2, type : 'type 10' },
	{ y_value : 0.2, x_value : 2.8, type : 'type 10' },
	{ y_value : 6.1, x_value : 3.0, type : 'type 3' },
	{ y_value : 6.4, x_value : 2.8, type : 'type 3' },
	{ y_value : 7.2, x_value : 3.0, type : 'type 3' },
	{ y_value : 7.4, x_value : 2.8, type : 'type 3' },
	{ y_value : 7.9, x_value : 3.8, type : 'type 3' },
	{ y_value : 6.4, x_value : 2.8, type : 'type 3' },
	{ y_value : 6.3, x_value : 2.8, type : 'type 3' },
	{ y_value : 6.1, x_value : 2.6, type : 'type 3' },
	{ y_value : 7.7, x_value : 3.0, type : 'type 3' },
	{ y_value : 6.3, x_value : 3.4, type : 'type 3' },
	{ y_value : 6.4, x_value : 3.1, type : 'type 3' },
	{ y_value : 6.0, x_value : 3.0, type : 'type 3' },
	{ y_value : 6.9, x_value : 3.1, type : 'type 3' },
	{ y_value : 6.7, x_value : 3.1, type : 'type 3' },
	{ y_value : 6.9, x_value : 3.1, type : 'type 5' },
	{ y_value : 5.8, x_value : 2.7, type : 'type 5' },
	{ y_value : 6.8, x_value : 3.2, type : 'type 5' },
	{ y_value : 6.7, x_value : 3.3, type : 'type 5' },
	{ y_value : 6.7, x_value : 3.0, type : 'type 5' },
	{ y_value : 6.3, x_value : 2.5, type : 'type 9' },
	{ y_value : 6.5, x_value : 3.0, type : 'type 9' },
	{ y_value : 6.2, x_value : 3.4, type : 'type 9' },
	{ y_value : 5.9, x_value : 3.0, type : 'type 8' }

]

module.exports = createScatterPlot(data);