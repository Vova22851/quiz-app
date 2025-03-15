import React, { Component } from "react";

class Options extends Component {
    render() {
        const { options, selectOption, onOptionsChange } = this.props;

        return (
            <div className="options">
                {options.map((option, index) => (
                    <div key={index} className="form-check">
                    <input
                        className="form-check-input" 
                        type="radio" 
                        name="option" 
                        value={option}
                        checked={selectOption === option}
                        onChange={onOptionsChange}
                     />
                    <label className="form-check-label" for="flexRadioDefault1">
                      {option}
                    </label>
                  </div>
                ))}
            </div>
        );
    }
};

export default Options;