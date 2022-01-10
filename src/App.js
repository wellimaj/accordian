import './Accordian.css'
import React from "react";
import { useState } from "react";

function App() {
  const [opin, setOpin] = useState(null);

  const handler = (index) => {
    setOpin(index);
  };
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
    {
      content:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores rerum atque explicabo cumque odit vitae voluptatum odio eius. Consequatur incidunt, qui illum corrupti repellendus ducimus maiores nemo impedit placeat, necessitatibus, cupiditate labore. Ex facilis, asperiores dignissimos adipisci qui laudantium omnis, maiores incidunt officiis, aut sapiente vitae nisi? Hic, architecto ad minus praesentium atque eveniet soluta temporibus corporis, aut earum nulla corrupti consectetur nostrum maxime impedit vitae delectus officia eius! Obcaecati aut tempore repellendus temporibus ratione labore quibusdam ducimus aliquid possimus nesciunt earum autem itaque suscipit ipsum ab perspiciatis, ut dolore sunt modi odio consectetur at placeat iure deleniti. Voluptas, ducimus?",
      Title: "title",
    },
  ];
  return (
    <div>
      {arr.map((object, index) => {
        const {Title,content}=object
        return (
          <div className="accordian">
            <div
              className="accordian-head"
              onClick={() => {
                handler(index);
              }}
            >
              <div>{Title}</div>
              {index === opin ? (
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
            {index === opin ? (
              <div className="content">{content}</div>
            ) : (
              <div></div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
