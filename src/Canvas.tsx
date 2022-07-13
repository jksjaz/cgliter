import "./Canvas.css"
import { Canvas } from "react-design-editor"
import sample from "./sample.json"
import React from "react"

export const AppCanvas = () => {
  const objects = sample.objects.map(object => {
    if (object.id === "workarea") return { ...object, backgroundColor: "rgba(0,0,0,0)" }
    return object
  })

  return (
    <Canvas
      editable={false}
      className="rde-canvas"
      canvasOption={{
        perPixelTargetFind: true,
        backgroundColor: "rgba(0,0,0,0)"
      }}
      keyEvent={{
        grab: false
      }}
      onLoad={handler => handler.importJSON(objects)}
    />
  )
}
