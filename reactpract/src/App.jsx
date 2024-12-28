import React from "react";
import './App.css'
import JsxIntro from "./Topics/JSX/JsxIntro";
import TypesOfComponent from "./Topics/TypesOfComponent/TypesOfComponent";
import UseStateIntro from "./Topics/Hooks/useStateHook/UseStateIntro";
import PropIntro from "./Topics/Props/PropIntro";
import ModuleIntro from "./Topics/ModulesCss/ModuleIntro";
import ConditionalRendering from "./Topics/ConditionRendering/ConditionalRendering";
import EventsIntro from "./Topics/Events/EventsIntro";
import UseEfffect from "./Topics/Hooks/UseEffect/UseEfffect";
import AppContext from "./Topics/ContextApi/AppContext";
import ContextApiIntro from "./Topics/ContextApi/ContextApiIntro";
import Bidirectional from "./Topics/FluxArchitecture/Bidirectional";
import UseRefIntro from "./Topics/Hooks/UseRef/UseRefIntro";
import TaskIntro from "./Topics/Tasks/TaskIntro";



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
      {/* //? useEffect  */}
      {/* <UseEfffect/> */}
      {/*//? Context Api  */}
      {/* <ContextApiIntro/> */}
      {/* //? useRef  */}
      {/* <UseRefIntro/> */}
      {/*//!  Props  */}
      {/* <PropIntro/> */}
      {/* //! Css Module  */}
      {/* <ModuleIntro /> */}
      {/* //!Conditional Rendering  */}
      {/* <ConditionalRendering/> */}
      {/* //! Events  */}
      {/* <EventsIntro/> */}
      {/*//! BiDirectional  */}
      {/* <Bidirectional/> */}

      {/* Tasks  */}
      <TaskIntro/>
    </div>
  );
}
