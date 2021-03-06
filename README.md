## react-d3-library
A library that will allow developers the ability to reroute D3 output to React’s virtual DOM. Just use your existing D3 code, and with a few simples lines, you can now harness the power of React with the flexibility of D3! React-D3-Library will compile your code into React components, and it also comes with a series of D3 template charts converted to React components for developers who are unfamiliar with D3. Not only do we build fully functional React components, but they utilize the power of D3 to automate scaling ranges, normalizing data, and constructing legends. Some examples are shown below, and others will be able to be viewed [here](http://someplace) with corresponding code examples.

**Caution:** This library is still in alpha state and APIs will change.

### Version
[![npm version](https://badge.fury.io/js/react-d3-library.png)](https://www.npmjs.com/package/react-d3-library)

### Installing

First off, install with:

`npm install [--save] react-d3-library`

Next, import into your React project:

```javascript
const rd3 = require('react-d3-library');
```

or 

```javascript
import rd3 from 'react-d3-library'
```

### Use With Existing D3 Code

Developers can now take their existing D3 code and use React-D3-Library to create React components.
Below is an excerpt of using D3 to create a Bubble Chart with Mike Bostock's D3 code found [here](https://bl.ocks.org/mbostock/4063269).

```javascript
var diameter = 960,
    format = d3.format(",d"),
    color = d3.scale.category20c();

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select('body').append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

d3.json("flare.json", function(error, root) {
  if (error) throw error;

var node = svg.selectAll(".node")
    .data(bubble.nodes(classes(flare))
    .filter(function(d) { return !d.children; }))
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

//etc...
```

We need to create a `div` element for D3 to build upon before
converting it to a React component,

`var div = document.createElement('div');`

and this **`div`** is what we will have D3 select.

We change the selection from 
```javascript
d3.select('body')
```
to our new **`div`** variable.
```javascript
d3.select(div)
```

This is what the new code should look like:

```javascript
var div = document.createElement('div');

var diameter = 960,
    format = d3.format(",d"),
    color = d3.scale.category20c();

var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter, diameter])
    .padding(1.5);
    
var svg = d3.select(div).append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

d3.json("flare.json", function(error, root) {
  if (error) throw error;

var node = svg.selectAll(".node")
    .data(bubble.nodes(classes(flare))
    .filter(function(d) { return !d.children; }))
    .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

//etc...
```

Just one more step and you are ready to convert everything to React!

Use the `componentDidMount()` React lifecycle method to make the state aware of your new D3 **`div`**. 

Then pass the state as props to the react-d3-library Component `rd3.Component`.

```javascript
import rd3 from 'react-d3-library';
const Component = rd3.Component;

var my_First_React_D3_Library_Component = React.createClass({

  getInitialState: function() {
    return {d3: ''}
  },

  componentDidMount: function() {
    this.setState({d3: div});
  },

  render: function() {
    return (
      <div>
        <Component data={this.state.d3} />
      </div>
    )
  }
});
```
And that's it!! Good Job!!


Simple chart templates are also available under the `rd3` namespace as shown below

### Available Charts

```
var ScatterPlot = rd3.createScatterPlot;
var PieChart = rd3.createPieChart;
var LineChart = rd3.createLineChart;
var AreaChart = rd3.createAreaChart;
var BarChart = rd3.createBarChart;
```

### License
MIT

Copyright (c) 2016 Andrew Burke, Danny Lee, Dave Loyst [contributors](https://github.com/orgs/react-d3-library/people)