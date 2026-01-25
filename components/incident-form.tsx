"use client"

import React from "react"

import { useState } from "react"
import { RefreshCw, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface IncidentFormProps {
  title: string
}

export function IncidentForm({ title }: IncidentFormProps) {
  const [requestorFor, setRequestorFor] = useState("")
  const [shortDescription, setShortDescription] = useState("")
  const [description, setDescription] = useState("")
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSave = () => {
    // Handle save logic
    console.log({
      requestorFor,
      shortDescription,
      description,
      file,
    })
  }

  const handleCancel = () => {
    setRequestorFor("")
    setShortDescription("")
    setDescription("")
    setFile(null)
  }

  return (
    <Card className="border-border">
      <CardHeader className="border-b border-border bg-muted/50 px-6 py-4">
        <CardTitle className="text-lg font-semibold text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* First row - Requestor, Requestor For, Short Description */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-xs text-muted-foreground">Requestor</label>
              <Input
                value="Enhance Services"
                disabled
                className="bg-muted text-muted-foreground"
              />
            </div>
            <div className="flex items-end gap-2">
              <div className="flex-1 space-y-2">
                <Input
                  placeholder="Requestor For"
                  value={requestorFor}
                  onChange={(e) => setRequestorFor(e.target.value)}
                  className="border-border"
                />
              </div>
              <Button
                size="icon"
                className="shrink-0 bg-primary hover:bg-primary/90"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Short Description"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                className="min-h-[40px] resize-none border-border"
                rows={1}
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] border-border"
              rows={4}
            />
          </div>

          {/* Upload File */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Upload File</label>
            <div className="flex items-center gap-2">
              <label className="cursor-pointer">
                <span className="inline-block rounded border border-border bg-muted px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/80">
                  Choose file
                </span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <span className="text-sm text-muted-foreground">
                {file ? file.name : "No file chosen"}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2 border-t border-border bg-muted/30 px-6 py-4">
        <Button
          onClick={handleSave}
          className="bg-primary hover:bg-primary/90"
        >
          <Save className="mr-2 h-4 w-4" />
          Save
        </Button>
        <Button
          variant="secondary"
          onClick={handleCancel}
          className="bg-neutral-500 text-white hover:bg-neutral-600"
        >
          <X className="mr-2 h-4 w-4" />
          Cancel
        </Button>
      </CardFooter>
    </Card>
  )
}
