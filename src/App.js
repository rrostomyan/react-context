import React from "react";
import "./App.css";
import Toolbar from "./components/toolbar";
import ThemeContext from "./context";

const themes = ["green", "red"];

class App extends React.Component {

  constructor() {
    super();

    this.onChangeTheme = () => {
      const {theme} = this.state;
      const index = themes.indexOf(theme.value);
      this.setState({
        theme: {
          ...theme,
          value: themes[1-index]
        }
      })
    };

    this.state = {
      theme: {
        value: themes[0],
        onChangeTheme: this.onChangeTheme
      }
    };
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={theme}>
        <div className="App">
          <Toolbar />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
