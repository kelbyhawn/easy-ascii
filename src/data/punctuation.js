import { nanoid } from "nanoid";

// Punctuation
const punctuation = [
  {
    name: "dagger",
    symbol: "†",
    word: "&dagger;",
    number: "&#8224;",
  },
  {
    name: "double dagger",
    symbol: "‡",
    word: "&Dagger;",
    number: "&#8225;",
  },
  {
    name: "paragraph",
    symbol: "¶",
    word: "&para;",
    number: "&#182;",
  },
  {
    name: "section",
    symbol: "§",
    word: "&sect;",
    number: "&#167;",
  },
  {
    name: "numero symbol",
    symbol: "№",
    word: "-",
    number: "&#8470;",
  },
];


// Spaces
const spaces = [
  {
    name: "en space",
    symbol: " ",
    word: "&ensp;",
    number: "&#8194;",
  },
  {
    name: "em space",
    symbol: " ",
    word: "&emsp;",
    number: "&#8195;",
  },
];


// Dashes
const dashes = [
  {
    name: "en dash",
    symbol: "–",
    word: "&ndash;",
    number: "&#8211;",
  },
  {
    name: "em dash",
    symbol: "—",
    word: "&mdash;",
    number: "&#8212;",
  },
];

// Quotes
const quotes = [
  {
    name: "left single quotation",
    symbol: "‘",
    word: "&lsquo;",
    number: "&#8216;",
  },
  {
    name: "right single quotation",
    symbol: "’",
    word: "&rsquo;",
    number: "&#8217;",
  },
  {
    name: "left double quotation",
    symbol: "“",
    word: "&ldquo;",
    number: "&#8220;",
  },
  {
    name: "right double quotation",
    symbol: "”",
    word: "&rdquo;",
    number: "&#8221;",
  },
  {
    name: "comma left single quote",
    symbol: "❛",
    word: "-",
    number: "&#10075;",
  },
  {
    name: "comma right single quote",
    symbol: "❜",
    word: "-",
    number: "&#10076;",
  },
  {
    name: "comma left double quote",
    symbol: "❝",
    word: "-",
    number: "&#10077;",
  },
  {
    name: "comma right double quote",
    symbol: "❞",
    word: "-",
    number: "&#10078;",
  },
  {
    name: "left single guillemet",
    symbol: "‹",
    word: "&lsaquo;",
    number: "&#8249;",
  },
  {
    name: "right single guillemet",
    symbol: "›",
    word: "&rsaquo;",
    number: "&#8250;",
  },
  {
    name: "left guillemet",
    symbol: "«",
    word: "&laquo;",
    number: "&#171;",
  },
  {
    name: "right guillemet",
    symbol: "»",
    word: "&raquo;",
    number: "&#187;",
  },
];

function getIds(category) {
  category.forEach((item, i) => item.id = i + nanoid(6));
}

getIds(punctuation);
getIds(spaces);
getIds(dashes);
getIds(quotes);

export { punctuation, spaces, dashes, quotes };
  