import React, { Component } from 'react';

import './App.css';
import post from './post';

const Header = () => {
  return (
    < header>
      <h1>My React Blog</h1>
    </header>
  )
}
const PrintPost = () => {
  return (
    post.map((element) => {
      return (
        <div className="siva">
          <h2>
            {element.title}
          </h2>
          <p>
            {element.body}
          </p>
        </div>
      )
    })
  )


}







class App extends Component {
  render() {
    return (
      <Header /> ,
      <PrintPost />

    );
  }
}

export default App;
