import React from "react";
import './App.css'
import JsxIntro from "./Topics/JSX/JsxIntro";
import TypesOfComponent from "./Topics/TypesOfComponent/TypesOfComponent";
import UseStateIntro from "./Topics/Hooks/useStateHook/UseStateIntro";
import PropIntro from "./Topics/Props/PropIntro";
import ModuleIntro from "./Topics/ModulesCss/ModuleIntro";
import ConditionalRendering from "./Topics/ConditionRendering/ConditionalRendering";
import EventsIntro from "./Topics/Events/EventsIntro";

export default function App() {
  return (
    <div>
      {/* //! JSX  */}
      {/* <JsxIntro/> */}
      {/* //! TypesOfComponent  */}
      {/* <TypesOfComponent/> */}
      {/* //! Hooks  */}
      {/* //? useState  */}
      {/* <UseStateIntro/> */}
      {/*//!  Props  */}
      {/* <PropIntro/> */}
      {/* //! Css Module  */}
      {/* <ModuleIntro /> */}
      {/* //!Conditional Rendering  */}
      {/* <ConditionalRendering/> */}
      {/* //! Events  */}
      <EventsIntro/>
    </div>
  );
}
