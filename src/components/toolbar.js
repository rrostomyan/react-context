import React from "react";
import ThemedButton from "./themedButton";

class Toolbar extends React.Component {
  render() {
    const { onThemeChange } = this.props;
    return <ThemedButton onThemeChange={onThemeChange} />;
  }
}

export default Toolbar;
