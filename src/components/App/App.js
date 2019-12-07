import React from 'react';

import List from '../List/List';

import styles from './App.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My React Todo App</h1>
        <h2 className={styles.subtitle}>with lists, columns and cards</h2>

        <List
          title={['Things to do ', <sup key='1'>soon!</sup>]}
          heroImg='http://uploads.kodilla.com/bootcamp/fer/11.react/space.png'
        />
      </main>
    )
  }
}

export default App;
