import React from "react";
import "./App.css";
import Toolbar from "./components/toolbar";
import ThemeContext from "./context";

const themes = ["green", "red"];

class App extends React.Component {
  state = {
    theme: themes[0]
  };

  onChangeTheme = () => {
    const {theme} = this.state;
    const index = themes.indexOf(theme);
    this.setState({
      theme: themes[1-index]
    })
  };

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <Toolbar onThemeChange={this.onChangeTheme} />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
