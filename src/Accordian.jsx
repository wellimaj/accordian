import React, { useEffect } from 'react'
import { useState } from 'react'
import './Accordian.css'
export default function Accordian({content,Title}) {
    const [Open,setOpen]=useState(false)
    return (
      <div className="accordian">
        <div
          className="accordian-head"
          onClick={() => {
            setOpen(!Open);
          }}
        >
          <div>{Title}</div>
          {!Open ? (
            <img
              className="arrow"
              src="https://cdn0.iconfinder.com/data/icons/feather/96/591276-arrow-right-512.png"
            ></img>
          ) : (
            <img
              className="arrow"
              src="https://cdn2.iconfinder.com/data/icons/lightly-icons/30/next-alt-240.png"
            ></img>
          )}
        </div>
        {Open ? <div className='content'>{content}</div> : <div></div>}
      </div>
    );
}
