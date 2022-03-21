import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  // const [numberOfShades, setNumberOfShades] = useState('');
  // const number = parseInt(numberOfShades);
  const [list, setList] = useState(new Values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10); // this is coming from the library and the link is provided in the readme.md file of this setup folder
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
            style={{ marginTop: '15px' }}
          />
          <button type='submit' className='btn'>
            submit
          </button>

          {/* <label
            htmlFor='number'
            id='label'
            // style={{
            //   position: 'absolute',
            //   top: '45px',
            //   right: '670px',
            //   fontWeight: 'bold',
            // }}
          >
            <h4>Number Of Shades :</h4>
          </label>
          <input
            type='number'
            name='number'
            id='number'
            value={numberOfShades}
            onChange={(e) => setNumberOfShades(e.target.value)}
            placeholder='10'
            // style={{ marginLeft: '320px', marginBottom: '355px' }}
          /> */}
        </form>
      </section>
      <section className='colors' style={{ marginTop: '50px' }}>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
