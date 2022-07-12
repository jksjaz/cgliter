import { fabric } from "fabric"
import { useRef, useEffect } from "react"
import sample from "./sample.json"
import "./Canvas.css"

export const Canvas = () => {
  const canvasEl = useRef(null)

  useEffect(() => {
    const workarea = sample.objects.find((obj) => obj.id === "workarea")
    console.log(workarea)

    const mergedCanvasOption = Object.assign(
      {},
      {
        preserveObjectStacking: true,
        selection: true,
        defaultCursor: "default",
        width: workarea?.workareaWidth || 0,
        height: workarea?.workareaHeight || 0,
      }
    )
    const canvas = new fabric.Canvas(canvasEl.current, mergedCanvasOption)

    const objects = sample.objects.filter((obj) => obj.id !== "workarea")

    const mergeToJson = JSON.parse(JSON.stringify(sample))
    mergeToJson.objects = objects

    canvas.loadFromJSON(mergeToJson, () => {
      canvas.renderAll()
    })

    canvas.setBackgroundColor("red", canvas.renderAll.bind(canvas))

    // if (workarea) {
    //   const image = new Image(workarea.width, workarea.height)
    //   const workareaObject = Object.fromEntries(
    //     Object.entries(workarea).map(([key, value]) => [key, value === null ? undefined : value])
    //   )
    //   const workareaObj = new fabric.Image(image, workareaObject)
    //   canvas.add(workareaObj)
    //   //   canvas.centerObject(workareaObj)
    //   //   canvas.setActiveObject(workareaObj)
    // }
    // canvas.loadFromJSON(sample, canvas.renderAll.bind(canvas))
    // canvas.renderAll()
  }, [])

  return (
    // <div className="preview-container">
    <canvas ref={canvasEl} />
    // </div>
  )
}
