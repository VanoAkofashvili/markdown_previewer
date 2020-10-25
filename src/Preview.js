import React from 'react';
import marked from 'marked';
import Toolbar from './Toolbar';
const preview = props => (
  <div className="Preview">
    <Toolbar name="Preview" />
    <div
      dangerouslySetInnerHTML={{
        __html: marked(props.markdown, { breaks: true }),
      }}
      id="preview"
    ></div>
  </div>
);

export default preview;
