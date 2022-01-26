import React from 'react';

function Data(props) {
    console.log(`${props.text} rendeing`);
  return <div>
      <h1>{props.text}:{props.val}</h1>
  </div>;
}

export default React.memo(Data);
