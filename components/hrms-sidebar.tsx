"use client"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  X,
  Minus,
  Plus,
  Flag,
  CalendarCheck,
  UserPlus,
  UserMinus,
  User,
} from "lucide-react"

interface HrmsSidebarProps {
  isOpen: boolean
  onClose: () => void
  activePage?: string
  activeSection?: string
}

const caseManagementItems = [
  { label: "All", href: "/hrms", id: "all" },
  { label: "Create New", href: "/hrms/create-new", id: "create-new" },
  { label: "Open", href: "/hrms/open", id: "open" },
  { label: "Resolved", href: "/hrms/resolved", id: "resolved" },
  { label: "Assign to Me", href: "/hrms/assign-to-me", id: "assign-to-me" },
]

const leaveManagementItems = [
  { label: "Leave", href: "/hrms/leave", id: "leave" },
  { label: "Leave Update", href: "/hrms/leave-update", id: "leave-update" },
]

export function HrmsSidebar({
  isOpen,
  onClose,
  activePage = "all",
  activeSection = "case-management",
}: HrmsSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    caseManagement: activeSection === "case-management",
    leaveManagement: activeSection === "leave-management",
    onboarding: activeSection === "onboarding",
    offboarding: activeSection === "offboarding",
    client: false,
    employee: false,
    joiningRequirements: false,
    preJoiningCompliance: false,
    supplier: false,
    offClient: false,
    offEmployee: false,
    offJoiningRequirements: false,
    offPreJoiningCompliance: false,
    offSupplier: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 transform border-r border-border bg-card transition-transform duration-200 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Mobile close button */}
          <div className="flex items-center justify-end p-2 lg:hidden">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto">
            {/* Case Management Section */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection("caseManagement")}
                className="flex w-full items-center justify-between bg-muted px-4 py-3 text-left"
              >
                <div className="flex items-center gap-2">
                  <Flag className="h-4 w-4 text-foreground" />
                  <span className={cn("font-medium", activeSection === "case-management" ? "text-primary" : "text-foreground")}>Case Management</span>
                </div>
                {expandedSections.caseManagement ? (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Plus className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              {expandedSections.caseManagement && (
                <ul className="py-1">
                  {caseManagementItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-6 py-2 text-sm transition-colors",
                          item.id === activePage && activeSection === "case-management"
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Leave Management Section */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection("leaveManagement")}
                className="flex w-full items-center justify-between bg-muted px-4 py-3 text-left"
              >
                <div className="flex items-center gap-2">
                  <CalendarCheck className="h-4 w-4 text-foreground" />
                  <span className={cn("font-medium", activeSection === "leave-management" ? "text-primary" : "text-foreground")}>Leave Management</span>
                </div>
                {expandedSections.leaveManagement ? (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Plus className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              {expandedSections.leaveManagement && (
                <ul className="py-1">
                  {leaveManagementItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-6 py-2 text-sm transition-colors",
                          item.id === activePage && activeSection === "leave-management"
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Onboarding Section */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection("onboarding")}
                className="flex w-full items-center justify-between bg-muted px-4 py-3 text-left"
              >
                <div className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4 text-foreground" />
                  <span className={cn("font-medium", activeSection === "onboarding" ? "text-primary" : "text-foreground")}>Onboarding</span>
                </div>
                {expandedSections.onboarding ? (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Plus className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              {expandedSections.onboarding && (
                <div className="py-1">
                  {/* Client Sub-section */}
                  <div className="ml-4 border-b border-border pb-1">
                    <button
                      onClick={() => toggleSection("client")}
                      className="flex w-full items-center justify-between px-2 py-2 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-foreground" />
                        <span className={cn("text-sm", activePage?.startsWith("client") ? "text-primary" : "text-foreground")}>Client</span>
                      </div>
                      {expandedSections.client ? (
                        <Minus className="h-3 w-3 text-muted-foreground" />
                      ) : (
                        <Plus className="h-3 w-3 text-muted-foreground" />
                      )}
                    </button>
                    {expandedSections.client && (
                      <Link
                        href="/hrms/onboarding/client/onboarding-compliance"
                        className={cn(
                          "block px-8 py-2 text-sm transition-colors",
                          activePage === "client-onboarding-compliance"
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                        onClick={onClose}
                      >
                        Onboarding Compliance
                      </Link>
                    )}
                  </div>

                  {/* Employee Sub-section */}
                  <div className="ml-4 border-b border-border pb-1">
                    <button
                      onClick={() => toggleSection("employee")}
                      className="flex w-full items-center justify-between px-2 py-2 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-foreground" />
                        <span className={cn("text-sm", activePage?.startsWith("employee") ? "text-primary" : "text-foreground")}>Employee</span>
                      </div>
                      {expandedSections.employee ? (
                        <Minus className="h-3 w-3 text-muted-foreground" />
                      ) : (
                        <Plus className="h-3 w-3 text-muted-foreground" />
                      )}
                    </button>
                    {expandedSections.employee && (
                      <div>
                        {/* Joining Requirements Sub-sub-section */}
                        <button
                          onClick={() => toggleSection("joiningRequirements")}
                          className="flex w-full items-center justify-between px-6 py-2 text-left"
                        >
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            <span className={cn("text-sm", activePage?.startsWith("employee-joining") ? "text-primary" : "text-foreground")}>Joining Requirements</span>
                          </div>
                        </button>
                        {expandedSections.joiningRequirements && (
                          <div className="ml-4">
                            <Link
                              href="/hrms/onboarding/employee/joining-requirements"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "employee-joining-all"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              All
                            </Link>
                            <Link
                              href="/hrms/onboarding/employee/joining-requirements/create-new"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "employee-joining-create-new"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              Create New
                            </Link>
                            <Link
                              href="/hrms/onboarding/employee/joining-requirements/resolved"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "employee-joining-resolved"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              Resolved
                            </Link>
                          </div>
                        )}

                        {/* Pre-Joining Compliance - under Employee */}
                        <button
                          onClick={() => toggleSection("preJoiningCompliance")}
                          className="flex w-full items-center justify-between px-6 py-2 text-left"
                        >
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-foreground" />
                            <span className={cn("text-sm", activePage?.startsWith("employee-prejoining") ? "text-primary" : "text-foreground")}>Pre-Joining Compliance</span>
                          </div>
                        </button>
                        {expandedSections.preJoiningCompliance && (
                          <div className="ml-4">
                            <Link
                              href="/hrms/onboarding/employee/pre-joining-compliance"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "employee-prejoining-all"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              All
                            </Link>
                            <Link
                              href="/hrms/onboarding/employee/pre-joining-compliance/create-new"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "employee-prejoining-create-new"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              Create New
                            </Link>
                            <Link
                              href="/hrms/onboarding/employee/pre-joining-compliance/resolved"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "employee-prejoining-resolved"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              Resolved
                            </Link>
                          </div>
                        )}

                        {/* Offer Letter - under Employee */}
                        <Link
                          href="/hrms/onboarding/offer-letter"
                          className={cn(
                            "block px-6 py-2 text-sm transition-colors",
                            activePage === "offer-letter"
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          )}
                          onClick={onClose}
                        >
                          Offer Letter
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Supplier Sub-section */}
                  <div className="ml-4 pb-1">
                    <button
                      onClick={() => toggleSection("supplier")}
                      className="flex w-full items-center justify-between px-2 py-2 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-foreground" />
                        <span className={cn("text-sm", activePage?.startsWith("supplier") ? "text-primary" : "text-foreground")}>Supplier</span>
                      </div>
                      {expandedSections.supplier ? (
                        <Minus className="h-3 w-3 text-muted-foreground" />
                      ) : (
                        <Plus className="h-3 w-3 text-muted-foreground" />
                      )}
                    </button>
                    {expandedSections.supplier && (
                      <Link
                        href="/hrms/onboarding/supplier/onboarding-compliance"
                        className={cn(
                          "block px-8 py-2 text-sm transition-colors",
                          activePage === "supplier-onboarding-compliance"
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                        onClick={onClose}
                      >
                        Onboarding Compliance
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Offboarding Section */}
            <div className="border-b border-border">
              <button
                onClick={() => toggleSection("offboarding")}
                className="flex w-full items-center justify-between bg-muted px-4 py-3 text-left"
              >
                <div className="flex items-center gap-2">
                  <UserMinus className="h-4 w-4 text-foreground" />
                  <span className={cn("font-medium", activeSection === "offboarding" ? "text-primary" : "text-foreground")}>Offboarding</span>
                </div>
                {expandedSections.offboarding ? (
                  <Minus className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Plus className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              {expandedSections.offboarding && (
                <div className="py-1">
                  {/* Client Sub-section */}
                  <div className="ml-4 border-b border-border pb-1">
                    <button
                      onClick={() => toggleSection("offClient")}
                      className="flex w-full items-center justify-between px-2 py-2 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-foreground" />
                        <span className={cn("text-sm", activePage?.startsWith("off-client") ? "text-primary" : "text-foreground")}>Client</span>
                      </div>
                      {expandedSections.offClient ? (
                        <Minus className="h-3 w-3 text-muted-foreground" />
                      ) : (
                        <Plus className="h-3 w-3 text-muted-foreground" />
                      )}
                    </button>
                    {expandedSections.offClient && (
                      <Link
                        href="/hrms/offboarding/client/offboarding-compliance"
                        className={cn(
                          "block px-8 py-2 text-sm transition-colors",
                          activePage === "off-client-offboarding-compliance"
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                        onClick={onClose}
                      >
                        Offboarding Compliance
                      </Link>
                    )}
                  </div>

                  {/* Employee Sub-section */}
                  <div className="ml-4 border-b border-border pb-1">
                    <button
                      onClick={() => toggleSection("offEmployee")}
                      className="flex w-full items-center justify-between px-2 py-2 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-foreground" />
                        <span className={cn("text-sm", activePage?.startsWith("off-employee") ? "text-primary" : "text-foreground")}>Employee</span>
                      </div>
                      {expandedSections.offEmployee ? (
                        <Minus className="h-3 w-3 text-muted-foreground" />
                      ) : (
                        <Plus className="h-3 w-3 text-muted-foreground" />
                      )}
                    </button>
                    {expandedSections.offEmployee && (
                      <div>
                        {/* Joining Requirements Sub-sub-section */}
                        <button
                          onClick={() => toggleSection("offJoiningRequirements")}
                          className="flex w-full items-center justify-between px-6 py-2 text-left"
                        >
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-primary" />
                            <span className={cn("text-sm", activePage?.startsWith("off-employee-joining") ? "text-primary" : "text-foreground")}>Joining Requirements</span>
                          </div>
                        </button>
                        {expandedSections.offJoiningRequirements && (
                          <div className="ml-4">
                            <Link
                              href="/hrms/offboarding/employee/joining-requirements"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "off-employee-joining-all"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              All
                            </Link>
                            <Link
                              href="/hrms/offboarding/employee/joining-requirements/create-new"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "off-employee-joining-create-new"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              Create New
                            </Link>
                            <Link
                              href="/hrms/offboarding/employee/joining-requirements/resolved"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "off-employee-joining-resolved"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              Resolved
                            </Link>
                          </div>
                        )}

                        {/* Pre-Joining Compliance - under Employee */}
                        <button
                          onClick={() => toggleSection("offPreJoiningCompliance")}
                          className="flex w-full items-center justify-between px-6 py-2 text-left"
                        >
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-foreground" />
                            <span className={cn("text-sm", activePage?.startsWith("off-employee-prejoining") ? "text-primary" : "text-foreground")}>Pre-Joining Compliance</span>
                          </div>
                        </button>
                        {expandedSections.offPreJoiningCompliance && (
                          <div className="ml-4">
                            <Link
                              href="/hrms/offboarding/employee/pre-joining-compliance"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "off-employee-prejoining-all"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              All
                            </Link>
                            <Link
                              href="/hrms/offboarding/employee/pre-joining-compliance/create-new"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "off-employee-prejoining-create-new"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              Create New
                            </Link>
                            <Link
                              href="/hrms/offboarding/employee/pre-joining-compliance/resolved"
                              className={cn(
                                "block px-8 py-2 text-sm transition-colors",
                                activePage === "off-employee-prejoining-resolved"
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              )}
                              onClick={onClose}
                            >
                              Resolved
                            </Link>
                          </div>
                        )}

                        {/* Offer Letter - under Employee */}
                        <Link
                          href="/hrms/offboarding/offer-letter"
                          className={cn(
                            "block px-6 py-2 text-sm transition-colors",
                            activePage === "off-offer-letter"
                              ? "text-primary"
                              : "text-foreground hover:text-primary"
                          )}
                          onClick={onClose}
                        >
                          Offer Letter
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Supplier Sub-section */}
                  <div className="ml-4 pb-1">
                    <button
                      onClick={() => toggleSection("offSupplier")}
                      className="flex w-full items-center justify-between px-2 py-2 text-left"
                    >
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-foreground" />
                        <span className={cn("text-sm", activePage?.startsWith("off-supplier") ? "text-primary" : "text-foreground")}>Supplier</span>
                      </div>
                      {expandedSections.offSupplier ? (
                        <Minus className="h-3 w-3 text-muted-foreground" />
                      ) : (
                        <Plus className="h-3 w-3 text-muted-foreground" />
                      )}
                    </button>
                    {expandedSections.offSupplier && (
                      <Link
                        href="/hrms/offboarding/supplier/offboarding-compliance"
                        className={cn(
                          "block px-8 py-2 text-sm transition-colors",
                          activePage === "off-supplier-offboarding-compliance"
                            ? "text-primary"
                            : "text-foreground hover:text-primary"
                        )}
                        onClick={onClose}
                      >
                        Offboarding Compliance
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}
