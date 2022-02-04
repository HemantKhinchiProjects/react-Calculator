import React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <form>
        <input type="text" id="calc" />
        <div>
          <button type="button" value="1" onClick="form1.answer.value += '1' ">
            1
          </button>
          <button type="button" value="2" onClick="form1.answer.value += '2' ">
            2
          </button>
          <button type="button" value="3" onClick="form1.answer.value += '3' ">
            3
          </button>
          <button type="button" value="3" onClick="form1.answer.value += '+' ">
            +
          </button>
        </div>
        <div>
          <button type="button" value="1" onClick="form1.answer.value += '4' ">
            4
          </button>
          <button type="button" value="2" onClick="form1.answer.value += '5' ">
            5
          </button>
          <button type="button" value="3" onClick="form1.answer.value += '6' ">
            6
          </button>
          <button type="button" value="3" onClick="form1.answer.value += '-' ">
            -
          </button>
        </div>
        <div>
          <button type="button" value="1" onClick="form1.answer.value += '7' ">
            7
          </button>
          <button type="button" value="2" onClick="form1.answer.value += '8' ">
            8
          </button>
          <button type="button" value="3" onClick="form1.answer.value += '9' ">
            9
          </button>
          <button type="button" value="3" onClick="form1.answer.value += '*' ">
            *
          </button>
        </div>
        <div>
          <button type="button" value="/" onClick="form1.answer.value += '/' ">
            /
          </button>
          <button type="button" value="0" onClick="form1.answer.value += '0' ">
            0
          </button>
          <button type="button" value="." onClick="form1.answer.value += '.' ">
            .
          </button>
          <button type="button" value="=" onClick="form1.answer.value += '=' ">
            =
          </button>
        </div>
      </form>
    </div>
  );
}
