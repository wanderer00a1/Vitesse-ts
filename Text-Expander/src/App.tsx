import React, { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <TextExpander>
        React is a JavaScript library for rendering user interfaces (UI). UI is
        built from small units like buttons, text, and images. React lets you
        combine them into reusable, nestable components. From web sites to phone
        apps, everything on the screen can be broken down into components. In
        this chapter, you will learn to create, customize, and conditionally
        display React components.
      </TextExpander>

      <TextExpander
        collapsedNumWords={20}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="#ff6622"
      >
        JSX lets you write HTML-like markup inside a JavaScript file, keeping
        rendering logic and content in the same place. Sometimes you will want
        to add a little JavaScript logic or reference a dynamic property inside
        that markup. In this situation, you can use curly braces in your JSX to
        open a window to JavaScript.
      </TextExpander>

      <TextExpander expanded={true} className="box">
        React components use props to communicate with each other. Every parent
        component can pass some information to its child components by giving
        them props. Props might remind you of HTML attributes, but you can pass
        any JavaScript value through them, including objects, arrays, and
        functions.
      </TextExpander>
    </div>
  );
}

interface Props {
  children: React.ReactNode;
  collapseButtonText?: string;
  collapsedNumWords?: number;
  expandButtonText?: string;
  buttonColor?: string;
  expanded?: boolean;
  className?: string;
}
function TextExpander({
  children,
  collapseButtonText = "Show less",
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  buttonColor = "blue",
  expanded = false,
  className,
}: Props): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  const displayText = isExpanded
    ? children
    : String(children).split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };
  return (
    <div className={className}>
      <span>{displayText}</span>
      <button style={buttonStyle} onClick={() => setIsExpanded((exp) => !exp)}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
