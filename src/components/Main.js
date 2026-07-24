// Components
import Popular from "../sections/Popular";
import Punctuation from "../sections/Punctuation";
import Accent from "../sections/Accent";
import Greek from "../sections/Greek";
import Math from "../sections/Math";
import Arrows from "../sections/Arrows";
import Fun from "../sections/Fun";

export default function Main() {
  return (
    <main>
      <Popular />
      <Punctuation />
      <Accent />
      <Greek />
      <Math />
      <Arrows />
      <Fun />
    </main>
  );
}
