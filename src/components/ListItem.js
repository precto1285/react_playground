import React from 'react';

const ListItem = (props) => {
  return (
    <div>
      <p className="text-info">{props.show}</p>
    </div>
  );
};

export default ListItem;