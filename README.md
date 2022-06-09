# react-split-view
React split view with resizable panels components

## Installation

```bash
npm install @chornonoh-vova/react-split-view
```

## Usage

```jsx
import React from 'react';
import { SplitView, SplitPanel } from '@chornonoh-vova/react-split-view';

const SplitViewExample = () => (
  <SplitView>
    <SplitPanel minSize='200px' initialSize='300px' maxSize='400px'>
      <p>First Panel</p>
    </SplitPanel>
    <SplitPanel minSize='200px' grow>
      <p>Second Panel</p>
    </SplitPanel>
  </SplitView>
);

export default SplitViewExample;
```

## Properties

### `SplitView`

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `orientation` | `string` | `vertical` | Orientation of the split view. Can be either `horizontal` or `vertical`. |
| `divider` | `object` | `{}` | Options for customizing dividers. |

### Divider customization options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `color` | `string` | `rgb(128, 128, 128)` | Color of the divider. |
| `hoverColor` | `string` | `rgb(72, 66, 245)` | Color of the dividers when the mouse is over them. |
| `hoverBorderColor` | `string` | `rgba(72, 66, 245, 0.2` | Color of the dividers border when the mouse is over them. |

### `SplitPanel`

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `grow` | `boolean` | `false` | Let panel to take all available space. |
| `initialSize` | `number` or `string` | - | Initial size of the split panel (in pixels). |
| `minSize` | `number` or `string` | - | Minimum size of the split panel (in pixels). |
| `maxSize` | `number` or `string` | - | Maximum size of the split panel (in pixels). |

## Examples

### Horizontal split view

```jsx
import React from 'react';
import { SplitView, SplitPanel } from '@chornonoh-vova/react-split-view';

const SplitViewHorizontalExample = () => (
  <SplitView orientation='horizontal'>
    <SplitPanel minSize={200}>
      <p>First Panel</p>
    </SplitPanel>
    <SplitPanel minSize={300} grow>
      <p>Second Panel</p>
    </SplitPanel>
  </SplitView>
);

export default SplitViewHorizontalExample;
```

### Vertical split view

```jsx
import React from 'react';
import { SplitView, SplitPanel } from '@chornonoh-vova/react-split-view';

const SplitViewVerticalExample = () => (
  <SplitView>
    <SplitPanel minSize={200}>
      <p>First Panel</p>
    </SplitPanel>
    <SplitPanel minSize={300} grow>
      <p>Second Panel</p>
    </SplitPanel>
  </SplitView>
);

export default SplitViewVerticalExample;
```