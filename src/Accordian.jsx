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
          
        </div>
        {Open ? <span className='content'>{content}</span> : <div></div>}
      </div>
    );
}
