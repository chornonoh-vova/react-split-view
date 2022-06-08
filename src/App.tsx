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
          <h2>Vertical panels with grow in right</h2>
        </div>

        <div className={styles.example}>
          <SplitView>
            <SplitPanel minSize='200px'>
              <b>Panel 1</b>
              <p>min-width: 200px</p>
            </SplitPanel>
            <SplitPanel minSize='200px'>
              <b>Panel 2</b>
              <p>min-width: 200px</p>
            </SplitPanel>
            <SplitPanel minSize='300px' grow={true}>
              <b>Panel 3</b>
              <p>Takes remaining available space</p>
              <p>grow: true</p>
              <p>min-width: 300px</p>
            </SplitPanel>
          </SplitView>
        </div>
      </div>

      <div className={styles.verticalPanels}>
        <div className={styles.header}>
          <h2>Vertical panels with grow in center</h2>
        </div>

        <div className={styles.example}>
          <SplitView>
            <SplitPanel minSize='100px'>
              <b>Panel 1</b>
              <p>min-width: 100px</p>
            </SplitPanel>
            <SplitPanel minSize='200px' grow={true}>
              <b>Panel 2</b>
              <p>Takes remaining available space</p>
              <p>grow: true</p>
              <p>min-width: 200px</p>
            </SplitPanel>
            <SplitPanel minSize='100px'>
              <b>Panel 3</b>
              <p>min-width: 100px</p>
            </SplitPanel>
          </SplitView>
        </div>
      </div>

      <div className={styles.horizontalPanels}>
        <div className={styles.header}>
          <h2>Horizontal panels</h2>
        </div>

        <div className={styles.example}>
          <SplitView orientation='horizontal'>
            <SplitPanel minSize='100px'>
              <b>Panel 1</b>
              <p>min-height: 100px</p>
            </SplitPanel>
            <SplitPanel minSize='100px'>
              <b>Panel 2</b>
              <p>min-height: 100px</p>
            </SplitPanel>
            <SplitPanel minSize='200px' grow={true}>
              <b>Panel 3</b>
              <p>Takes remaining available space</p>
              <p>grow: true</p>
              <p>min-height: 200px</p>
            </SplitPanel>
          </SplitView>
        </div>
      </div>

      <hr />
    </div>
  );
}

export default App;
