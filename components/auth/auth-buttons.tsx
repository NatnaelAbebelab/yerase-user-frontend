"use client"

import { useState } from "react"
import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import SignInModal from "./sign-in-modal"
import SignUpModal from "./sign-up-modal"

export default function AuthButtons() {
  const [signInOpen, setSignInOpen] = useState(false)
  const [signUpOpen, setSignUpOpen] = useState(false)

  const openSignIn = () => {
    setSignInOpen(true)
    setSignUpOpen(false)
  }

  const openSignUp = () => {
    setSignUpOpen(true)
    setSignInOpen(false)
  }

  return (
    <>
      <Button variant="ghost" size="sm" onClick={openSignIn} className="gap-2">
        <LogIn className="h-4 w-4" />
        Login
      </Button>
      <SignInModal onOpenSignUp={openSignUp} openState={[signInOpen, setSignInOpen]} />
      <SignUpModal onOpenSignIn={openSignIn} openState={[signUpOpen, setSignUpOpen]} />
    </>
  )
}
