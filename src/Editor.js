import React from 'react';
import Toolbar from './Toolbar';
const editor = props => {
  return (
    <div className="Editor">
      <Toolbar name="Editor" />
      <textarea
        id="editor"
        value={props.markdown}
        onChange={props.changeHandler}
      ></textarea>
    </div>
  );
};

export default editor;
