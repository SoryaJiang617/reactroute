import React from "react";

const options = [
  {
    label: "Apple",
    value: "apple",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Banana",
    value: "banana",
  },
  {
    label: "Pineapple",
    value: "pineapple",
  },
];

class App extends React.Component {
	
	
	  handleChange(e) {
		console.log("Fruit Selected!!");
		this.setState({ fruit: e.target.value });
	  }

  render() {
    return (
      <div id="App">
        <div className="select-container">
          <select value="banana">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default App;