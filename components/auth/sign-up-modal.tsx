"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X, Eye, EyeOff, Info, AlertCircle, ArrowRight, ArrowLeft, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"

interface SignUpModalProps {
  onOpenSignIn: () => void
  openState?: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export default function SignUpModal({ onOpenSignIn, openState }: SignUpModalProps) {
  const [open, setOpen] = openState || useState(false)
  const [activeTab, setActiveTab] = useState("personal")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [calendarOpen, setCalendarOpen] = useState(false)

  // Account Info
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)

  // Personal Info
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [birthday, setBirthday] = useState<Date | undefined>(undefined)
  const [gender, setGender] = useState("")
  const [phone, setPhone] = useState("")

  // Physical Info
  const [height, setHeight] = useState("170")
  const [weight, setWeight] = useState("70")
  const [bmi, setBmi] = useState<number | null>(null)
  const [fitnessLevel, setFitnessLevel] = useState("")
  const [fitnessGoal, setFitnessGoal] = useState("")

  // Validation states
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [tabValidation, setTabValidation] = useState({
    personal: false,
    account: false,
    physical: false,
  })

  // Add state to track field interactions
  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    birthday: false,
    email: false,
    password: false,
    confirmPassword: false,
    height: false,
    weight: false,
    fitnessLevel: false,
    fitnessGoal: false,
    phone: false,
    gender: false,
  })

  // Calculate BMI when height or weight changes
  useEffect(() => {
    if (height && weight) {
      const heightInMeters = Number.parseFloat(height) / 100
      const weightInKg = Number.parseFloat(weight)
      if (heightInMeters > 0 && weightInKg > 0) {
        const calculatedBmi = weightInKg / (heightInMeters * heightInMeters)
        setBmi(Number.parseFloat(calculatedBmi.toFixed(1)))
      } else {
        setBmi(null)
      }
    } else {
      setBmi(null)
    }
  }, [height, weight])

  // Validate form fields
  useEffect(() => {
    validatePersonalTab()
    validateAccountTab()
    validatePhysicalTab()
  }, [firstName, lastName, birthday, email, password, confirmPassword, height, weight, fitnessLevel, fitnessGoal])

  // Update the validation functions to check for touched fields
  const validatePersonalTab = () => {
    const newErrors = { ...errors }

    // First name validation
    if (touchedFields.firstName) {
      if (!firstName.trim()) {
        newErrors.firstName = "First name is required"
      } else {
        delete newErrors.firstName
      }
    }

    // Last name validation
    if (touchedFields.lastName) {
      if (!lastName.trim()) {
        newErrors.lastName = "Last name is required"
      } else {
        delete newErrors.lastName
      }
    }

    // Birthday validation
    if (touchedFields.birthday) {
      if (!birthday) {
        newErrors.birthday = "Birthday is required"
      } else {
        // Calculate minimum allowed date (16 years ago)
        const minDate = new Date()
        minDate.setFullYear(minDate.getFullYear() - 16)

        if (birthday > minDate) {
          newErrors.birthday = "You must be at least 16 years old"
        } else {
          delete newErrors.birthday
        }
      }
    }

    // Gender validation
    if (touchedFields.gender) {
      if (!gender) {
        newErrors.gender = "Gender is required"
      } else {
        delete newErrors.gender
      }
    }

    setErrors(newErrors)
    setTabValidation((prev) => ({
      ...prev,
      personal:
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        birthday !== undefined &&
        gender !== "" &&
        !newErrors.firstName &&
        !newErrors.lastName &&
        !newErrors.birthday &&
        !newErrors.gender,
    }))
  }

  const validateAccountTab = () => {
    const newErrors = { ...errors }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Email validation
    if (touchedFields.email) {
      if (!email.trim()) {
        newErrors.email = "Email is required"
      } else if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address"
      } else {
        delete newErrors.email
      }
    }

    // Password validation
    if (touchedFields.password) {
      if (!password) {
        newErrors.password = "Password is required"
      } else if (password.length < 6) {
        newErrors.password = "Password must be at least 6 characters"
      } else {
        delete newErrors.password
      }
    }

    // Confirm password validation
    if (touchedFields.confirmPassword) {
      if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match"
      } else {
        delete newErrors.confirmPassword
      }
    }

    setErrors(newErrors)
    setTabValidation((prev) => ({
      ...prev,
      account:
        !newErrors.email &&
        !newErrors.password &&
        !newErrors.confirmPassword &&
        agreeTerms &&
        touchedFields.email &&
        touchedFields.password &&
        touchedFields.confirmPassword,
    }))
  }

  const validatePhysicalTab = () => {
    const newErrors = { ...errors }

    // Height validation
    if (touchedFields.height) {
      if (!height) {
        newErrors.height = "Height is required"
      } else if (Number(height) < 50 || Number(height) > 250) {
        newErrors.height = "Please enter a valid height (50-250 cm)"
      } else {
        delete newErrors.height
      }
    }

    // Weight validation
    if (touchedFields.weight) {
      if (!weight) {
        newErrors.weight = "Weight is required"
      } else if (Number(weight) < 20 || Number(weight) > 300) {
        newErrors.weight = "Please enter a valid weight (20-300 kg)"
      } else {
        delete newErrors.weight
      }
    }

    // Fitness level validation
    if (touchedFields.fitnessLevel) {
      if (!fitnessLevel) {
        newErrors.fitnessLevel = "Please select your fitness level"
      } else {
        delete newErrors.fitnessLevel
      }
    }

    // Fitness goal validation
    if (touchedFields.fitnessGoal) {
      if (!fitnessGoal) {
        newErrors.fitnessGoal = "Please select your fitness goal"
      } else {
        delete newErrors.fitnessGoal
      }
    }

    setErrors(newErrors)
    setTabValidation((prev) => ({
      ...prev,
      physical:
        !newErrors.height &&
        !newErrors.weight &&
        !newErrors.fitnessLevel &&
        !newErrors.fitnessGoal &&
        touchedFields.height &&
        touchedFields.weight &&
        touchedFields.fitnessLevel &&
        touchedFields.fitnessGoal,
    }))
  }

  const getBmiCategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight"
    if (bmi < 25) return "Normal weight"
    if (bmi < 30) return "Overweight"
    return "Obese"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Final validation
    validatePersonalTab()
    validateAccountTab()
    validatePhysicalTab()

    if (tabValidation.personal && tabValidation.account && tabValidation.physical) {
      // Handle sign up logic here
      console.log({
        email,
        password,
        firstName,
        lastName,
        birthday,
        gender,
        phone,
        height,
        weight,
        bmi,
        fitnessLevel,
        fitnessGoal,
      })
      // Close modal after successful sign up
      setOpen(false)
    }
  }

  const handleSignInClick = () => {
    setOpen(false)
    onOpenSignIn()
  }

  const handleNextTab = () => {
    if (activeTab === "personal" && tabValidation.personal) {
      setActiveTab("account")
    } else if (activeTab === "account" && tabValidation.account) {
      setActiveTab("physical")
    }
  }

  const handlePrevTab = () => {
    if (activeTab === "physical") {
      setActiveTab("account")
    } else if (activeTab === "account") {
      setActiveTab("personal")
    }
  }

  const incrementValue = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(String(Number(value) + 1))
  }

  const decrementValue = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    if (Number(value) > 1) {
      setter(String(Number(value) - 1))
    }
  }

  // Handler for date selection
  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setBirthday(date)
      setCalendarOpen(false)
      setTouchedFields((prev) => ({ ...prev, birthday: true }))
      validatePersonalTab()
    }
  }

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFirstName(value)
    if (touchedFields.firstName) {
      validatePersonalTab()
    }
  }

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setLastName(value)
    if (touchedFields.lastName) {
      validatePersonalTab()
    }
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (touchedFields.email) {
      validateAccountTab()
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    if (touchedFields.password) {
      validateAccountTab()
    }
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setConfirmPassword(value)
    if (touchedFields.confirmPassword) {
      validateAccountTab()
    }
  }

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setHeight(value)
    if (touchedFields.height) {
      validatePhysicalTab()
    }
  }

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setWeight(value)
    if (touchedFields.weight) {
      validatePhysicalTab()
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value)
  }

  const getMissingFields = () => {
    const missingFields = []

    // Personal tab fields
    if (!firstName.trim()) missingFields.push("First Name")
    if (!lastName.trim()) missingFields.push("Last Name")
    if (!birthday) missingFields.push("Birthday")
    if (errors.firstName) missingFields.push("First Name")
    if (errors.lastName) missingFields.push("Last Name")
    if (errors.birthday) missingFields.push("Birthday")

    // Account tab fields
    if (!email.trim()) missingFields.push("Email")
    if (!password) missingFields.push("Password")
    if (!confirmPassword) missingFields.push("Confirm Password")
    if (!agreeTerms) missingFields.push("Terms Agreement")
    if (errors.email) missingFields.push("Email")
    if (errors.password) missingFields.push("Password")
    if (errors.confirmPassword) missingFields.push("Confirm Password")

    // Physical tab fields
    if (!height) missingFields.push("Height")
    if (!weight) missingFields.push("Weight")
    if (!fitnessLevel) missingFields.push("Fitness Level")
    if (!fitnessGoal) missingFields.push("Fitness Goal")
    if (errors.height) missingFields.push("Height")
    if (errors.weight) missingFields.push("Weight")
    if (errors.fitnessLevel) missingFields.push("Fitness Level")
    if (errors.fitnessGoal) missingFields.push("Fitness Goal")

    return missingFields
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg bg-gray-900 border-gray-800 [&>button]:hidden">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl">Create Your Account</DialogTitle>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="physical">Physical</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="personal" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    onFocus={() => setTouchedFields((prev) => ({ ...prev, firstName: true }))}
                    onBlur={() => {
                        setTouchedFields((prev) => ({ ...prev, phone: true }))
                        validatePersonalTab()
                    }}
                    className={`bg-gray-800 border-gray-700 ${errors.firstName && touchedFields.firstName ? "border-red-500" : ""}`}
                  />
                  {errors.firstName && touchedFields.firstName && (
                    <span className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.firstName}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={handleLastNameChange}
                    onFocus={() => setTouchedFields((prev) => ({ ...prev, lastName: true }))}
                    onBlur={() => {
                        setTouchedFields((prev) => ({ ...prev, phone: true }))
                        validatePersonalTab()
                    }}
                    className={`bg-gray-800 border-gray-700 ${errors.lastName && touchedFields.lastName ? "border-red-500" : ""}`}
                  />
                  {errors.lastName && touchedFields.lastName && (
                    <span className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.lastName}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthday">Birthday</Label>
                  <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal bg-gray-800 border-gray-700 ${
                          errors.birthday && touchedFields.birthday ? "border-red-500" : ""
                        }`}
                        onClick={() => setTouchedFields((prev) => ({ ...prev, birthday: true }))}
                        onBlur={() => {
                          setTouchedFields((prev) => ({ ...prev, birthday: true }))
                          validatePersonalTab()
                        }}
                      >
                        {birthday ? format(birthday, "PPP") : <span className="text-gray-400">Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                      <Calendar
                        mode="single"
                        selected={birthday}
                        onSelect={handleDateSelect}
                        fromDate={new Date(1900, 0, 1)}
                        toDate={(() => {
                          const maxDate = new Date()
                          maxDate.setFullYear(maxDate.getFullYear() - 16)
                          return maxDate
                        })()}
                        initialFocus
                        className="bg-gray-800 text-white"
                      />
                    </PopoverContent>
                  </Popover>
                  {errors.birthday && touchedFields.birthday && (
                    <span className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.birthday}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select 
                    value={gender} 
                    onValueChange={(value) => {
                      setGender(value)
                      setTouchedFields((prev) => ({ ...prev, gender: true }))
                      validatePersonalTab()
                    }}
                    onOpenChange={() => {
                      setTouchedFields((prev) => ({ ...prev, gender: true }))
                      validatePersonalTab()
                    }}
                  >
                    <SelectTrigger 
                      className={`bg-gray-800 border-gray-700 ${errors.gender && touchedFields.gender ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && touchedFields.gender && (
                    <span className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.gender}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  onBlur={() => {
                    setTouchedFields((prev) => ({ ...prev, phone: true }))
                    validatePersonalTab()
                  }}
                  className="bg-gray-800 border-gray-700"
                />
              </div>

              <div className="flex justify-end">
                <Button type="button" onClick={handleNextTab} disabled={!tabValidation.personal} className="gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="account" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={() => setTouchedFields((prev) => ({ ...prev, email: true }))}
                  onBlur={() => {
                    setTouchedFields((prev) => ({ ...prev, email: true }))
                    validateAccountTab()
                  }}
                  className={`bg-gray-800 border-gray-700 ${errors.email && touchedFields.email ? "border-red-500" : ""}`}
                />
                {errors.email && touchedFields.email && (
                  <span className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.email}
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
                    onBlur={() => {
                      setTouchedFields((prev) => ({ ...prev, password: true }))
                      validateAccountTab()
                    }}
                    className={`bg-gray-800 border-gray-700 pr-10 ${errors.password && touchedFields.password ? "border-red-500" : ""}`}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && touchedFields.password && (
                  <span className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.password}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    onFocus={() => setTouchedFields((prev) => ({ ...prev, confirmPassword: true }))}
                    onBlur={() => {
                      setTouchedFields((prev) => ({ ...prev, confirmPassword: true }))
                      validateAccountTab()
                    }}
                    className={`bg-gray-800 border-gray-700 pr-10 ${errors.confirmPassword && touchedFields.confirmPassword ? "border-red-500" : ""}`}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.confirmPassword && touchedFields.confirmPassword && (
                  <span className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.confirmPassword}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => {
                    setAgreeTerms(checked as boolean)
                    setTouchedFields((prev) => ({ ...prev, terms: true }))
                    validateAccountTab()
                  }}
                  required
                />
                <Label htmlFor="terms" className="text-sm cursor-pointer">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={handlePrevTab} className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <Button type="button" onClick={handleNextTab} disabled={!tabValidation.account} className="gap-2">
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="physical" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="height">Height (cm)</Label>
                  <div className="relative">
                    <Input
                      id="height"
                      type="number"
                      value={height}
                      onChange={handleHeightChange}
                      onFocus={() => setTouchedFields((prev) => ({ ...prev, height: true }))}
                      onBlur={() => {
                        setTouchedFields((prev) => ({ ...prev, height: true }))
                        validatePhysicalTab()
                      }}
                      className={`bg-gray-800 border-gray-700 pr-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${errors.height && touchedFields.height ? "border-red-500" : ""}`}
                    />
                    <div className="absolute right-0 top-0 h-full flex">
                      <button
                        type="button"
                        className="h-full px-2 border-l border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        onClick={() => decrementValue(setHeight, height)}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="h-full px-2 border-l border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        onClick={() => incrementValue(setHeight, height)}
                      >
                        <ChevronUp className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  {errors.height && touchedFields.height && (
                    <span className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.height}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <div className="relative">
                    <Input
                      id="weight"
                      type="number"
                      value={weight}
                      onChange={handleWeightChange}
                      onFocus={() => setTouchedFields((prev) => ({ ...prev, weight: true }))}
                      onBlur={() => {
                        setTouchedFields((prev) => ({ ...prev, weight: true }))
                        validatePhysicalTab()
                      }}
                      className={`bg-gray-800 border-gray-700 pr-16 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${errors.weight && touchedFields.weight ? "border-red-500" : ""}`}
                    />
                    <div className="absolute right-0 top-0 h-full flex">
                      <button
                        type="button"
                        className="h-full px-2 border-l border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        onClick={() => decrementValue(setWeight, weight)}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="h-full px-2 border-l border-gray-700 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                        onClick={() => incrementValue(setWeight, weight)}
                      >
                        <ChevronUp className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  {errors.weight && touchedFields.weight && (
                    <span className="text-red-500 text-sm flex items-center gap-1">
                      <AlertCircle className="h-3 w-3" /> {errors.weight}
                    </span>
                  )}
                </div>
              </div>

              {bmi !== null && (
                <div className="p-4 bg-gray-800 rounded-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Your BMI</h4>
                      <div className="flex items-center mt-1">
                        <span className="text-2xl font-bold text-primary">{bmi}</span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                                <Info className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-900 border-gray-700">
                              <p>Body Mass Index (BMI) is a measure of body fat based on height and weight.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-400">Category</span>
                      <p className="font-medium">{getBmiCategory(bmi)}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="fitnessLevel">Current Fitness Level</Label>
                <Select
                  value={fitnessLevel}
                  onValueChange={(value) => {
                    setFitnessLevel(value)
                    setTouchedFields((prev) => ({ ...prev, fitnessLevel: true }))
                    validatePhysicalTab()
                  }}
                  onOpenChange={() => {
                    setTouchedFields((prev) => ({ ...prev, fitnessLevel: true }))
                    validatePhysicalTab()
                  }}
                >
                  <SelectTrigger
                    className={`bg-gray-800 border-gray-700 ${errors.fitnessLevel && touchedFields.fitnessLevel ? "border-red-500" : ""}`}
                    onClick={() => setTouchedFields((prev) => ({ ...prev, fitnessLevel: true }))}
                  >
                    <SelectValue placeholder="Select your fitness level" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                    <SelectItem value="athlete">Athlete</SelectItem>
                  </SelectContent>
                </Select>
                {errors.fitnessLevel && touchedFields.fitnessLevel && (
                  <span className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.fitnessLevel}
                  </span>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="fitnessGoal">Primary Fitness Goal</Label>
                <Select
                  value={fitnessGoal}
                  onValueChange={(value) => {
                    setFitnessGoal(value)
                    setTouchedFields((prev) => ({ ...prev, fitnessGoal: true }))
                    validatePhysicalTab()
                  }}
                  onOpenChange={() => {
                    setTouchedFields((prev) => ({ ...prev, fitnessGoal: true }))
                    validatePhysicalTab()
                  }}
                >
                  <SelectTrigger
                    className={`bg-gray-800 border-gray-700 ${errors.fitnessGoal && touchedFields.fitnessGoal ? "border-red-500" : ""}`}
                    onClick={() => setTouchedFields((prev) => ({ ...prev, fitnessGoal: true }))}
                  >
                    <SelectValue placeholder="Select your fitness goal" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="weight-loss">Weight Loss</SelectItem>
                    <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                    <SelectItem value="endurance">Improve Endurance</SelectItem>
                    <SelectItem value="strength">Increase Strength</SelectItem>
                    <SelectItem value="flexibility">Improve Flexibility</SelectItem>
                    <SelectItem value="overall-health">Overall Health</SelectItem>
                  </SelectContent>
                </Select>
                {errors.fitnessGoal && touchedFields.fitnessGoal && (
                  <span className="text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" /> {errors.fitnessGoal}
                  </span>
                )}
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={handlePrevTab} className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <Button type="submit" disabled={!tabValidation.physical}>
                          Create Account
                        </Button>
                      </div>
                    </TooltipTrigger>
                    {!tabValidation.physical && (
                      <TooltipContent className="bg-gray-900 border-gray-700 max-w-[300px]">
                        <div className="space-y-1">
                          <p className="font-medium">Missing or invalid fields:</p>
                          <ul className="list-disc list-inside text-sm">
                            {getMissingFields().map((field, index) => (
                              <li key={index}>{field}</li>
                            ))}
                          </ul>
                        </div>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </div>
            </TabsContent>
          </form>
        </Tabs>

        <div className="text-center text-sm text-gray-400 mt-4">
          Already have an account?{" "}
          <Button variant="link" className="p-0 h-auto text-primary" onClick={handleSignInClick} type="button">
            Sign In
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
