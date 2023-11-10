// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  state={
    progress:0
  }

  setProgress=(progress)=>{
  this.setState({progress:progress})
  }
  render() {
    return (
      <div>
       <BrowserRouter>
       <Navbar/>
       <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
    <Routes>
      <Route exact path="/sports" element={<News  setProgress={this.setProgress} key='q' category="sports" />} />
      <Route exact path="/bussiness" element={<News  setProgress={this.setProgress} key='w' category="bussiness" />} />
      <Route exact path="/entertainment" element={<News  setProgress={this.setProgress} key='r' category="entertainment" />} />
      <Route exact path="/science" element={<News  setProgress={this.setProgress} key='g' category="science" />} />
      <Route exact path="/Technology" element={<News  setProgress={this.setProgress} key='m' category="Technology" />} />
      <Route exact path="/health" element={<News  setProgress={this.setProgress} key='n' category="health" />} />
      <Route exact path="/general" element={<News  setProgress={this.setProgress} key='b' category="general" />} />
      <Route exact path="/About" element={<News  setProgress={this.setProgress} key='x' category="About" />} />
    </Routes>
  </BrowserRouter>
      </div>
    )
  }
}
