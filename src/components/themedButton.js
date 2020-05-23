import React from "react";
import ThemeContext from "../context";

class ThemedButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    const style = {
      color: this.context.value
    };

    return (
        <button onClick={this.context.onChangeTheme} style={style}>
          Themed Button
        </button>
    );
  }
}

export default ThemedButton;
