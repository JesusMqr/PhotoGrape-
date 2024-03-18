import { NavBar } from "./NavBar"
import './App.css';
import { Home } from "./Home";
import { Badge } from "./Badge";
import { Team } from "./Team";
import { Extra } from "./Extra";

import React,{Suspense, lazy} from "react";


export const App=()=>{

  return(
    <>
      <section id="home" className="">
      <NavBar/>
      <Home/>
      </section>
      <section>
        <Badge/>
      </section>
      <section>
        <Team/>
      </section>
      <section>
        <Extra/>
      </section>
      <section className="h-16 bg-gray-600">

      </section>
    
    </>
  )
}
