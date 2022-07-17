import { AddRounded, CameraAltRounded, VideocamRounded } from "@mui/icons-material"
import { Grid, ImageListItemBar, Paper } from "@mui/material"
import PouchDB from "pouchdb"
import { useCallback, useEffect, useState } from "react"
import { FileWithPath, useDropzone } from "react-dropzone"
import { v4 } from "uuid"

const dataDb = new PouchDB("cgliter")

interface Doc extends FileWithPath {
  _id: string
  _rev: string
  data?: string
}

export const Home = () => {
  const [files, setFiles] = useState<Doc[]>([])
  const fetchFiles = useCallback(async () => {
    const docs = await dataDb.allDocs({ include_docs: true })
    setFiles(docs.rows.map(({ doc }) => doc as Doc))
  }, [])

  useEffect(() => {
    fetchFiles()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onDrop = useCallback(async (acceptedFiles: FileWithPath[]) => {
    try {
      await Promise.all(
        acceptedFiles.map(async file => {
          if (file.path) {
            const doc = {
              _id: v4(),
              lastModified: file.lastModified,
              name: file.name,
              size: file.size,
              type: file.type,
              path: file.path
            }
            await dataDb.put(doc)
          } else {
            const data = await new Promise((resolve, reject) => {
              const reader = new FileReader()
              reader.onload = () => resolve(reader.result)
              reader.onerror = reject
              reader.readAsDataURL(file)
            })

            const doc = {
              _id: v4(),
              lastModified: file.lastModified,
              name: file.name,
              size: file.size,
              type: file.type,
              path: file.path,
              data
            }
            await dataDb.put(doc)
          }
        })
      )
      fetchFiles()
    } catch (error) {
      console.log(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/gif": [".gif"],
      "video/mp4": [".mp4"],
      "video/webm": [".webm"],
      "video/ogg": [".ogv"],
      "video/quicktime": [".mov"]
    }
  })

  return (
    <Grid container spacing={2}>
      <Grid item xs>
        <Paper elevation={0} className="h-full p-5">
          <Grid spacing={2} container>
            {files.length > 0 && (
              <>
                {files.map(file => {
                  const isImage = file.type.startsWith("image")
                  return (
                    <Grid item xs={3} key={file._id}>
                      <Paper
                        className="flex relative p-1 h-24 justify-center"
                        elevation={0}
                        sx={{ backgroundColor: "black" }}
                      >
                        {isImage ? (
                          <img
                            className="object-contain"
                            src={file.path ? `data:${file.type};base64,${window.files.read(file.path)}` : file.data}
                            alt={file.name}
                            loading="lazy"
                          />
                        ) : (
                          <video
                            className="object-contain"
                            src={file.path ? `data:${file.type};base64,${window.files.read(file.path)}` : file.data}
                          />
                        )}
                      </Paper>
                      <div className="flex items-center">
                        {isImage ? (
                          <CameraAltRounded sx={{ color: "white", fontSize: "1rem" }} />
                        ) : (
                          <VideocamRounded sx={{ color: "white", fontSize: "1rem" }} />
                        )}
                        <ImageListItemBar
                          className="ml-2 truncate"
                          classes={{
                            subtitle: "overflow-visible text-white",
                            titleWrap: "py-2"
                          }}
                          subtitle={file.name}
                          position="below"
                        />
                      </div>
                    </Grid>
                  )
                })}
              </>
            )}
            <Grid item xs={3}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <Paper
                  className="flex relative p-1 h-24 justify-center"
                  elevation={0}
                  sx={{ backgroundColor: "primary.700", ":hover": { backgroundColor: "primary.800" } }}
                >
                  {isDragActive ? (
                    <p className="text-white">Drop the files here ...</p>
                  ) : (
                    <div className="flex items-center">
                      <AddRounded sx={{ color: "primary.500" }} fontSize="large" />
                    </div>
                  )}
                </Paper>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        Player Section
      </Grid>
    </Grid>
  )
}
