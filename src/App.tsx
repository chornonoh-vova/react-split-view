import { SplitPanel, SplitView } from './lib';

import styles from './App.module.sass';

function App() {
  return (
    <div>
      <h1>react-split-view demo</h1>
      <p>Resizable split panels for React</p>

      <hr />

      <div className={styles.verticalPanels}>
        <div className={styles.header}>
          <h2>Vertical panels</h2>
        </div>

        <div className={styles.example}>
          <SplitView>
            <SplitPanel minWidth='200px'>
              <b>Panel 1</b>
            </SplitPanel>
            <SplitPanel minWidth='200px'>
              <b>Panel 2</b>
            </SplitPanel>
            <SplitPanel minWidth='300px' grow={true}>
              <b>Panel 3</b>
              <p>Takes remaining available space</p>
            </SplitPanel>
          </SplitView>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default App;
