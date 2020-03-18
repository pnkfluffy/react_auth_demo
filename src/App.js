import React, { Component } from 'react';
import './App.css';

const imageData = [
    {
        "_id": "5e58b2d24b7c0132408fd81e",
        "user": "User One",
        "image": "https://images.unsplash.com/photo-1560472962-4388d184d933?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "description": "filler description",
    },
    {
        "_id": "5e586cf11fcbeb77550ca91a",
        "user": "User Two",
        "image": "https://images.unsplash.com/photo-1563573507108-39c8b923fa2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=963&q=80",
        "description": "blah blah blah",
    },
    {
        "_id": "5e586cccac2d68092fb8f17b",
        "user": "User Three",
        "image": "https://images.unsplash.com/photo-1558015245-cfeabcaa793a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        "description": "one two one two",
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
