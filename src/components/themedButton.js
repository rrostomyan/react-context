import React from "react";
import ThemeContext from "../context";

class ThemedButton extends React.Component {
  // static contextType = ThemeContext;

  render() {
    const { onThemeChange } = this.props;
    const style = {
      color: this.context
    };

    return (
      <ThemeContext.Consumer>
        {themeValue => {
          const style = {
            color: themeValue
          };
          return (
            <button onClick={onThemeChange} style={style}>
              Themed Button
            </button>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default ThemedButton;
