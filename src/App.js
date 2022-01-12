import Accordian from "./Accordian";
import React from "react";
import {useState} from "react"

function App() {
 const arr = [
   {
     content:
       " Lorem ipsum dolor ",
     Title: "title",
   },
   {
     content:
       " Lorem ipsum dolor ",
     Title: "title",
   },
   {
     content:
       " Lorem ipsum dolor ",
     Title: "title",
   },
   {
     content:
       " Lorem ipsum dolor ",
     Title: "title",
   },
 ];
  return (
    <>
      {arr.map((obj) => {
        const { content, Title } = obj;
        return <Accordian content={content} Title={Title} className="App" />;
      })}
    </>
  );
}

export default App;
