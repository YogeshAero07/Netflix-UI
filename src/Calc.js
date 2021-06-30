import React from 'react';


function add(a, b) {
    let c = a + b;
    return c;
  }
  
  function sub(a, b) {
    let c = a-b;
    return c;
  }
  
  function div(a, b) {
    let c = a/b;
    c = c.toFixed(3);
    return c;
  }
  
  function multi(a, b) {
    let c = a*b;
    return c;
  }

  export { add, sub, div, multi };
  
  