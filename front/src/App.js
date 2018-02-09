import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import MessageBox from './components/MessageBox/MessageBox'
import InputBox from './components/InputBox/InputBox'
import NotificationBox from './components/NotificationBox/NotificationBox';
import Store from './Store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotificationBox show={Store.nickname} >
          Talking to {Store.nickname}
        </NotificationBox>
        <MessageBox />
        <InputBox />

      </div>
    );
  }
}

export default observer(App);
