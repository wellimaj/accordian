import Accordian from "./Accordian";
import React from "react";

function App() {
 const arr = [
    {
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores rerum atque explicabo cumque odit vitae voluptatum odio eius. Consequatur incidunt, qui illum corrupti repellendus ducimus maiores nemo impedit placeat, necessitatibus, cupiditate labore. Ex facilis, asperiores dignissimos adipisci qui laudantium omnis, maiores incidunt officiis, aut sapiente vitae nisi? Hic, architecto ad minus praesentium atque eveniet soluta temporibus corporis, aut earum nulla corrupti consectetur nostrum maxime impedit vitae delectus officia eius! Obcaecati aut tempore repellendus temporibus ratione labore quibusdam ducimus aliquid possimus nesciunt earum autem itaque suscipit ipsum ab perspiciatis, ut dolore sunt modi odio consectetur at placeat iure deleniti. Voluptas, ducimus?",
      Title: "title",
    },
    {
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores rerum atque explicabo cumque odit vitae voluptatum odio eius. Consequatur incidunt, qui illum corrupti repellendus ducimus maiores nemo impedit placeat, necessitatibus, cupiditate labore. Ex facilis, asperiores dignissimos adipisci qui laudantium omnis, maiores incidunt officiis, aut sapiente vitae nisi? Hic, architecto ad minus praesentium atque eveniet soluta temporibus corporis, aut earum nulla corrupti consectetur nostrum maxime impedit vitae delectus officia eius! Obcaecati aut tempore repellendus temporibus ratione labore quibusdam ducimus aliquid possimus nesciunt earum autem itaque suscipit ipsum ab perspiciatis, ut dolore sunt modi odio consectetur at placeat iure deleniti. Voluptas, ducimus?",
      Title: "title",
    },
    {
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores rerum atque explicabo cumque odit vitae voluptatum odio eius. Consequatur incidunt, qui illum corrupti repellendus ducimus maiores nemo impedit placeat, necessitatibus, cupiditate labore. Ex facilis, asperiores dignissimos adipisci qui laudantium omnis, maiores incidunt officiis, aut sapiente vitae nisi? Hic, architecto ad minus praesentium atque eveniet soluta temporibus corporis, aut earum nulla corrupti consectetur nostrum maxime impedit vitae delectus officia eius! Obcaecati aut tempore repellendus temporibus ratione labore quibusdam ducimus aliquid possimus nesciunt earum autem itaque suscipit ipsum ab perspiciatis, ut dolore sunt modi odio consectetur at placeat iure deleniti. Voluptas, ducimus?",
      Title: "title",
    },
    {
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores rerum atque explicabo cumque odit vitae voluptatum odio eius. Consequatur incidunt, qui illum corrupti repellendus ducimus maiores nemo impedit placeat, necessitatibus, cupiditate labore. Ex facilis, asperiores dignissimos adipisci qui laudantium omnis, maiores incidunt officiis, aut sapiente vitae nisi? Hic, architecto ad minus praesentium atque eveniet soluta temporibus corporis, aut earum nulla corrupti consectetur nostrum maxime impedit vitae delectus officia eius! Obcaecati aut tempore repellendus temporibus ratione labore quibusdam ducimus aliquid possimus nesciunt earum autem itaque suscipit ipsum ab perspiciatis, ut dolore sunt modi odio consectetur at placeat iure deleniti. Voluptas, ducimus?",
      Title: "title",
    },
  ];
  return (
    <>
      {arr.map((obj) => {
        const { content, Title } = obj;
        return <Accordian content={content} Title={Title} className="App" />;
      })}{" "}
    </>
  );
}

export default App;
