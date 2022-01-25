import { useEffect } from "react";
import ClipboardJS from "clipboard";

export default function List(props) {
  const { category } = props;

  // Click to copy 
  useEffect(() => {
    const items = document.querySelectorAll("li.copyable");
    const clipboard = new ClipboardJS(items);

    clipboard.on("success", function (e) {
      console.log(e);
      console.info("Action:", e.action);
      console.info("Text:", e.text);
      console.info("Trigger:", e.trigger);
  
      // add tooltip
      e.trigger.insertAdjacentHTML("beforeend", `<span class="tooltip">Copied!</span>`);
      
      // hide tooltip after 2 seconds
      const hideTooltip = () => {
        document.querySelectorAll(".tooltip").forEach(tooltip => {
          tooltip.remove();
        })
      }

      // use when working on tooltip styles
      //debugger 

      setTimeout(hideTooltip, 2000);
  
      e.clearSelection();
    });
  
    clipboard.on("error", function (e) {
      console.log(e);
      console.error("Action:", e.action);
      console.error("Trigger:", e.trigger);
    });
  },[]);

  return (
    <>
      <ul className="symbol">
        {category.map(item => (<>
          <li
            key={item.symbol}
            className="copyable"
            data-clipboard-text={item.symbol}
          >
            <code>{item.symbol}</code>
          </li>
        </>))}
      </ul>

      <ul className="word">
        {category.map((item) => (<>
          <li
            key={item.word}
            className={item.word !== "-" ? "copyable" : "disabled"}
            data-clipboard-text={item.word}
          >
            <code>{item.word}</code>
          </li>
        </>))}
      </ul>

      <ul className="number">
        {category.map(item => (<>
          <li
            key={item.number}
            className="copyable"
            data-clipboard-text={item.number}
          >
            <code>{item.number}</code>
          </li>
        </>))}
      </ul>

      <ul className="name">
        {category.map(item => (<>
          <li key={item.name}>{item.name}</li>
        </>))}
      </ul>
    </>
  )
}