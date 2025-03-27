import React, { useState } from "react";

import { Item } from "./App";
export default function Accordion({ data }: { data: Item[] }) {
  return (
    <div className="accordion">
      {data.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          text={item.text}
          num={idx}
        />
      ))}
    </div>
  );
}

function AccordionItem({
  num,
  title,
  text,
}: Item & { num: number }): React.JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleToggle(): void {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div className="item">
      <p className="number">{num < 10 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon" onClick={handleToggle}>
        {isOpen ? "-" : "+"}
      </p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
