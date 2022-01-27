import React from "react";
import Image from "./components/Image";
import "./App.css";

const mortyImg =
  "https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png";

const rickImg =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92fd94ce-597b-471f-bb2f-3f6de15b60e4/dcmldw0-b854166a-9b0c-4784-96b8-f3705c6dfa9f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkyZmQ5NGNlLTU5N2ItNDcxZi1iYjJmLTNmNmRlMTViNjBlNFwvZGNtbGR3MC1iODU0MTY2YS05YjBjLTQ3ODQtOTZiOC1mMzcwNWM2ZGZhOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9pRWV07mYP0z69braaeht_BaPA3FpRbavY_SUd6tvVc";

function App() {
  return (
    <div className="App">
      <Image src={mortyImg} />
    </div>
  );
}

export default App;
