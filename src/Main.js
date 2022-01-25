// Dependencies
import { useEffect } from "react";
import ClipboardJS from "clipboard";

// Section Components
import Popular from "./sections/Popular";
import Punctuation from "./sections/Punctuation";

export default function Main() {

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
      <Popular />
      <Punctuation />
    </>
  )
}