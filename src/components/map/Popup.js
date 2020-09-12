import React from 'react';

const Popup = ({ feature }) => {
  const { id, name, description, img} = feature.properties;

  return (
    <div id={`popup-${id}`}>
      <h3>{name}</h3>
      {description}
      <img class='image' alt= "robots" src={`https://thehill.com/sites/default/files/styles/article_full/public/minneapolis_blmprotest_06042020getty.jpg?itok=JHjbmk7b`} width="220" height="100"/>
    </div>
  );
};

export default Popup;