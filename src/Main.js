// Dependencies
import { useEffect } from "react";
import ClipboardJS from "clipboard";
import smoothscroll from 'smoothscroll-polyfill';

// Section Components
import Popular from "./sections/Popular";
import Punctuation from "./sections/Punctuation";
import Accent from "./sections/Accent";
import Greek from "./sections/Greek";
import Math from "./sections/Math";
import Arrows from "./sections/Arrows";
import Fun from "./sections/Fun";

export default function Main() {
  // Allows for smooth scrolling in Safari
  smoothscroll.polyfill();

  // Click to copy 
  useEffect(() => {
    const items = document.querySelectorAll("li.copyable");
    const clipboard = new ClipboardJS(items);

    clipboard.on("success", (e) => {
      console.log(e);
  
      // add tooltip
      e.trigger.insertAdjacentHTML("beforeend", `<span class="tooltip">Copied!</span>`);
      //debugger // use when working on tooltip css
      // hide tooltip after 2 seconds
      setTimeout(() => document.querySelectorAll(".tooltip").forEach(tooltip => tooltip.remove()), 2000);
  
      e.clearSelection();
    });
  
    clipboard.on("error", (e) => console.error(e));
  }, []);
  
  return (
    <>      
      {/* Sections */}
      <Popular />
      <Punctuation />
      {/* 
      <Accent />
      <Greek />
      <Math />
      <Arrows />
      <Fun />
      */}
    </>
  )
}