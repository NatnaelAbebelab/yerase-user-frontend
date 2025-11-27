"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Eye, EyeOff, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface SignInModalProps {
  onOpenSignUp: () => void
  openState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export default function SignInModal({ onOpenSignUp, openState }: SignInModalProps) {
  const [open, setOpen] = openState
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  // Validation states
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [isFormValid, setIsFormValid] = useState(false)
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  })

  // Validate email and password on change
  useEffect(() => {
    if (touchedFields.email) {
      validateEmail(email)
    }
    if (touchedFields.password) {
      validatePassword(password)
    }

    // Check if form is valid
    setIsFormValid(!emailError && !passwordError && email.length > 0 && password.length > 0)
  }, [email, password, emailError, passwordError, touchedFields])

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!value) {
      setEmailError("Email is required")
    } else if (!emailRegex.test(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("")
    }
  }

  const validatePassword = (value: string) => {
    if (!value) {
      setPasswordError("Password is required")
    } else if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters")
    } else {
      setPasswordError("")
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (touchedFields.email) {
      validateEmail(value)
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    if (touchedFields.password) {
      validatePassword(value)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Mark all fields as touched before final validation
    setTouchedFields({
      email: true,
      password: true,
    })

    // Final validation before submission
    validateEmail(email)
    validatePassword(password)

    if (isFormValid) {
      // Handle sign in logic here
      console.log({ email, password, rememberMe })
      // Close modal after successful sign in
      setOpen(false)
    }
  }

  const handleSignUpClick = () => {
    setOpen(false)
    onOpenSignUp()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-800 [&>button]:hidden">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl">Sign In</DialogTitle>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={handleEmailChange}
              onFocus={() => setTouchedFields((prev) => ({ ...prev, email: true }))}
              className={`bg-gray-800 border-gray-700 ${emailError && touchedFields.email ? "border-red-500" : ""}`}
            />
            {emailError && touchedFields.email && (
              <span className="text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> {emailError}
              </span>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => setTouchedFields((prev) => ({ ...prev, password: true }))}
                className={`bg-gray-800 border-gray-700 pr-10 ${passwordError && touchedFields.password ? "border-red-500" : ""}`}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {passwordError && touchedFields.password && (
              <span className="text-red-500 text-sm flex items-center gap-1">
                <AlertCircle className="h-3 w-3" /> {passwordError}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <Label htmlFor="remember" className="text-sm cursor-pointer">
                Remember me
              </Label>
            </div>
            <Button variant="link" className="p-0 h-auto text-primary" type="button">
              Forgot password?
            </Button>
          </div>

          <Button type="submit" className="w-full" disabled={!isFormValid}>
            Sign In
          </Button>

          <div className="text-center text-sm text-gray-400">
            Don&apos;t have an account?{" "}
            <Button variant="link" className="p-0 h-auto text-primary" onClick={handleSignUpClick} type="button">
              Create Account
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
