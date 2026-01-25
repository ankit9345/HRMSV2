"use client"

import React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, KeyRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function SignInPage() {
  const router = useRouter()
  const [userId, setUserId] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!userId.trim()) {
      setError("Please enter your User ID")
      return
    }

    if (!password.trim()) {
      setError("Please enter your Password")
      return
    }

    // Store auth state
    if (typeof window !== "undefined") {
      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userId", userId)
      if (rememberMe) {
        localStorage.setItem("rememberMe", "true")
      }
    }

    router.push("/")
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg shadow-lg p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src="/images/logo.png" 
              alt="Enhance Services" 
              className="h-16 w-auto"
            />
          </div>

          {/* Title */}
          <h1 className="text-xl font-medium text-center text-foreground mb-8">
            Login to your account
          </h1>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSignIn} className="space-y-4">
            {/* User ID Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <User className="h-5 w-5" />
              </div>
              <Input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="pl-12 h-12 bg-muted/50 border-border"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <KeyRound className="h-5 w-5" />
              </div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 h-12 bg-muted/50 border-border"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <Checkbox 
                id="remember" 
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label 
                htmlFor="remember" 
                className="text-sm text-muted-foreground cursor-pointer"
              >
                Remember me
              </label>
            </div>

            {/* Sign In Button */}
            <Button 
              type="submit" 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Sign in
            </Button>

            {/* Forgot Password */}
            <div className="text-center">
              <Link 
                href="#" 
                className="text-sm text-primary hover:underline"
              >
                Forgot Password ?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
