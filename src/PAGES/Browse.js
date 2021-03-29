import React from "react";
import { useContent } from "../customHooks";
import Selectionfilter from "../utility/selection-filter";
import BrowseContainer from "../CONTAINERS/BrowseContainer";

export default function Browse() {
  const { films } = useContent("films");
  const { series } = useContent("series");

  const slides = Selectionfilter({ series, films });
  // console.log(films);
  // console.log(series);

  return <BrowseContainer slides={slides} />;
}
