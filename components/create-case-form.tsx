"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Save, X } from "lucide-react"

export function CreateCaseForm() {
  const [formData, setFormData] = useState({
    caseId: "",
    requesterName: "",
    department: "",
    category: "",
    status: "",
    subStatus: "",
    assignmentGroup: "",
    assignTo: "",
    impact: "",
    argency: "",
    priority: "",
    shortDescription: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="bg-muted/50 px-4 py-3">
        <CardTitle className="text-base font-medium">Create New</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <Input
              placeholder="Case ID"
              value={formData.caseId}
              onChange={(e) =>
                setFormData({ ...formData, caseId: e.target.value })
              }
            />
            <Input
              placeholder="Requester Name"
              value={formData.requesterName}
              onChange={(e) =>
                setFormData({ ...formData, requesterName: e.target.value })
              }
            />
            <Select
              value={formData.department}
              onValueChange={(value) =>
                setFormData({ ...formData, department: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="IT">IT</SelectItem>
                <SelectItem value="HR">HR</SelectItem>
                <SelectItem value="Operations">Operations</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={formData.category}
              onValueChange={(value) =>
                setFormData({ ...formData, category: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Payroll">Payroll</SelectItem>
                <SelectItem value="Tax">Tax</SelectItem>
                <SelectItem value="Compensation">Compensation</SelectItem>
                <SelectItem value="Benefits">Benefits</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <Select
              value={formData.status}
              onValueChange={(value) =>
                setFormData({ ...formData, status: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Open">Open</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
                <SelectItem value="On Hold">On Hold</SelectItem>
                <SelectItem value="Assign to me">Assign to me</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={formData.subStatus}
              onValueChange={(value) =>
                setFormData({ ...formData, subStatus: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Sub Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Pending Information">Pending Information</SelectItem>
                <SelectItem value="User not responding">User not responding</SelectItem>
                <SelectItem value="In Progress">In Progress</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Assignment Group"
              value={formData.assignmentGroup}
              onChange={(e) =>
                setFormData({ ...formData, assignmentGroup: e.target.value })
              }
            />
            <Input
              placeholder="Assign to"
              value={formData.assignTo}
              onChange={(e) =>
                setFormData({ ...formData, assignTo: e.target.value })
              }
            />
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              placeholder="Impact"
              value={formData.impact}
              onChange={(e) =>
                setFormData({ ...formData, impact: e.target.value })
              }
            />
            <Input
              placeholder="Argency"
              value={formData.argency}
              onChange={(e) =>
                setFormData({ ...formData, argency: e.target.value })
              }
            />
            <Input
              placeholder="Priority"
              value={formData.priority}
              onChange={(e) =>
                setFormData({ ...formData, priority: e.target.value })
              }
            />
          </div>

          {/* Short Description */}
          <Textarea
            placeholder="Short Description"
            value={formData.shortDescription}
            onChange={(e) =>
              setFormData({ ...formData, shortDescription: e.target.value })
            }
            rows={2}
          />

          {/* Description */}
          <Textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            rows={4}
          />
        </form>
      </CardContent>
      {/* Footer with buttons */}
      <div className="flex items-center justify-end gap-2 border-t border-border bg-muted/30 px-4 py-3">
        <Button type="submit" className="bg-primary hover:bg-primary/90">
          <Save className="mr-1 h-4 w-4" />
          Save
        </Button>
        <Button
          type="button"
          variant="secondary"
          className="bg-[#4a4a4a] text-white hover:bg-[#3a3a3a]"
        >
          <X className="mr-1 h-4 w-4" />
          Cancel
        </Button>
      </div>
    </Card>
  )
}
