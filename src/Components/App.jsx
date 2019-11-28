import React, { Component } from "react"
import Radar from "./Radar/Radar.jsx"
import EmptyText from "./EmptyText.jsx"
class App extends Component {
        constructor(props) {
          super(props)
        }
        render() {
          const style ={
            backgroundColor: "black",
            fontSize: "15px"
          } 
          return (
            <div style={style}>
              <EmptyText text="Radar"></EmptyText>
              <EmptyText text="Paul Belches"></EmptyText>
              <Radar></Radar>
            </div>
          )
        }
      }
      export default App