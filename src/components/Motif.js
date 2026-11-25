import React from "react";

/*
  The gold bar from the lab's logo (the rule under "Interaction Lab").
  Used as the list bullet and as the rule under page titles.
*/
function Motif({ className }) {
  return <span className={`gold-bar${className ? ` ${className}` : ""}`} aria-hidden="true" />;
}

export default Motif;
