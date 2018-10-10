import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navbar/NavBar'
import Search from './contaniers/search/Search'
import ImageResults from './contaniers/image-results/ImageResults'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
          <ImageResults/>
        </div>
      </MuiThemeProvider>
     
    )
  }
}

export default App;
