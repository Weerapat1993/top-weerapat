import React from 'react';

const Home = () => (
  <div>
    <h4>Home</h4>
    <div style={{ display: 'flex' }}>
      <button className="btn btn--default">Default</button>
      <button className="btn btn--primary">Primary</button>
      <button className="btn btn--info">Info</button>
      <button className="btn btn--warning">Warning</button>
      <button className="btn btn--success">Success</button>
      <button className="btn btn--danger">Danger</button>
      <button className="btn btn--disabled" disabled>Disable</button>
    </div>
    <div style={{ display: 'flex' }}>
      <button className="btn btn--large btn--default">Default</button>
      <button className="btn btn--large btn--primary">Primary</button>
      <button className="btn btn--large btn--info">Info</button>
      <button className="btn btn--large btn--warning">Warning</button>
      <button className="btn btn--large btn--success">Success</button>
      <button className="btn btn--large btn--danger">Danger</button>
      <button className="btn btn--large btn--disabled" disabled>Disable</button>
    </div>
    <div style={{ display: 'flex' }}>
      <button className="btn btn--large btn--success hide-mobile">Hide Mobile</button>
      <button className="btn btn--large btn--warning hide-desktop">Hide Desktop</button>
    </div>
  </div>
);

export default Home
