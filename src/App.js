import React, { Component } from 'react';
import Editor from './Editor';
import Preview from './Preview';

import './App.css';

const defaultText = `# Markdown Previewer

## Vaniko Akofashvili
[My GitHub profile](https://github.com/VanoAkofashvili)

\`\`\`python
s = "Python syntax highlighting"
print(s)
\`\`\`

Inline \`code\` has \`back-ticks around\` it.

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

**i am bolded text**

![beautiful image](https://avatars2.githubusercontent.com/u/49734341?s=460&u=23ff8ec87684a776fe7010b5e683cdb6ff6dd330&v=4 "Image exampe")
`;

class App extends Component {
  state = {
    markdown: defaultText,
  };

  changeHandler = event => {
    this.setState({
      markdown: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Editor
          changeHandler={this.changeHandler}
          markdown={this.state.markdown}
        />
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}

export default App;
