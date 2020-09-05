import React from 'react';

function ThreeColumns() {
  return (
    <section id ="threeColumns">

    <div className="container">

        <article className ="col1">
                <div><span>10</span></div>
                <h3 className="col-title">oddanych worków</h3>
                <p className ="col-text">Lorem ipsum dolor sit amet tellus. Quisque ut lacus pretium wisi.</p>
        </article>

        <article className ="col2">
                <div><span>5</span></div>
                <h3 className="col-title">wspartych organizacji</h3>
                <p className ="col-text">Lorem ipsum dolor sit amet tellus. Quisque ut lacus pretium wisi.</p>
        </article>
        
        <article className ="col3">
                <div><span>7</span></div>
                <h3 className="col-title">zorganizowanych zbiórek</h3>
                <p className ="col-text">Lorem ipsum dolor sit amet tellus. Quisque ut lacus pretium wisi. </p>
        </article>

    </div>

</section>
  )
}

export default ThreeColumns;
