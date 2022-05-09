/** @jsxImportSource @emotion/react */

import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import { css, jsx, Global } from '@emotion/react';

function App() {
  const [color, setColor] = useState(randomColor.randomColor());
  const [hue, setHue] = useState('');
  const [luminosity, setLuminosity] = useState('');
  const [boxHeight, setBoxHeight] = useState('100px');
  const [boxWidth, setBoxWidth] = useState('200px');

  return (
    <div className="App">
      <Global
        styles={css`
          .App {
            display: flex;
            flex-direction: column;
          }
          @keyframes backgroundColorPalette {
            0% {
              background: #d88c9a;
            }
            25% {
              background: #f2d0a9;
            }
            50% {
              background: #f1e3d3;
            }
            75% {
              background: #99c1b9;
            }
            100% {
              background: #8e7dbe;
            }
          }
          body {
            animation-name: backgroundColorPalette;
            animation-duration: 20s;
            animation-iteration-count: infinite;
            animation-direction: alternate;

            width: 100%;
          }

          .boxWrapper {
            margin: 10px;
          }

          button {
            min-width: 100px;
            margin: 0 auto;
          }
          input {
            min-width: 80px;
          }
          .inputFieldGrid {
            display: grid;
          }
          .inputWrapper {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 0px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 40px;
          }
          .inputWrapper form input {
            margin: 3px;
          }
        `}
      />
      <h1>Random Color Generator </h1>
      <div className="inputWrapper">
        <button
          onClick={() => {
            setColor(
              randomColor.randomColor({ hue: hue, luminosity: luminosity }),
            );
          }}
        >
          Generate
        </button>
        <div className="inputFieldGrid">
          <form>
            <label htmlFor="hue">Hue:</label>
            <input
              id="hue"
              onChange={(event) => {
                setHue(event.currentTarget.value);
              }}
            />
          </form>
          <form>
            <label htmlFor="luminosity">Luminosity:</label>
            <input
              id="luminosity"
              onChange={(event) => {
                setLuminosity(event.currentTarget.value);
              }}
            />
          </form>
          <form>
            <label htmlFor="boxWidth">Box Width:</label>
            <input
              id="boxWidth"
              defaultValue="200px"
              onChange={(event) => {
                setBoxWidth(event.currentTarget.value);
              }}
            />
          </form>
          <form>
            <label htmlFor="boxHeight">Box Height:</label>
            <input
              id="boxHeight"
              defaultValue="100px"
              onChange={(event) => {
                setBoxHeight(event.currentTarget.value);
              }}
            />
          </form>
        </div>
      </div>
      <div
        className="boxWrapper"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <div
          css={css`
            background-color: ${color};
            border-radius: 5px;
            padding: 5px;
            width: 50%;
            width: ${boxWidth};
            height: 20%;
            height: ${boxHeight};
            max-height: 700px;
            transition: background-color 1s;
          `}
        >
          Generated Color: {color}
        </div>
      </div>
    </div>
  );
}

export default App;
