import React from "react";

const options = [
  {
    label: "Apple",
    value: "apple",
  },
  
  {
    label: "Banana",
    value: "banana",
  },
  
];

class Drop extends React.Component {
  render() {
    return (
      <div id="App">
        <div className="select-container">
          <select>
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
             
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Drop;