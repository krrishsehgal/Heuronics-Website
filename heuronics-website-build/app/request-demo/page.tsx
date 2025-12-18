"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

export default function RequestDemoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    useCase: "",
    depth: "",
    endurance: "",
    payloads: "",
    country: "",
    phone: "",
    budget: "",
    currency: "USD",
  })

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const res = await fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      throw new Error("Failed to submit request")
    }

    setSubmitted(true)
  } catch (error) {
    console.error("Demo request error:", error)
    alert("Something went wrong. Please try again.")
  }
}


  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (submitted) {
    return (
      <main className="py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mt-6 text-3xl font-bold text-foreground">Thank you for your request!</h1>
          <p className="mt-4 text-lg text-muted-foreground">We'll get back within 2 business days.</p>
          <div className="mt-8">
            <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Request a Demo</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your requirements and we'll schedule a demonstration
          </p>
        </div>

        <Card className="mt-12 border-border bg-card">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>We'll use this to get in touch with you</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    required
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (with country code) *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+1 555 123 4567"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select value={formData.currency} onValueChange={(val) => handleChange("currency", val)}>
                    <SelectTrigger id="currency" className="bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="useCase">Use Case / Application *</Label>
                <Textarea
                  id="useCase"
                  required
                  rows={4}
                  placeholder="Describe your intended use case..."
                  value={formData.useCase}
                  onChange={(e) => handleChange("useCase", e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="depth">Required Depth (meters)</Label>
                  <Input
                    id="depth"
                    type="number"
                    placeholder="e.g., 300"
                    value={formData.depth}
                    onChange={(e) => handleChange("depth", e.target.value)}
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endurance">Endurance (hours)</Label>
                  <Input
                    id="endurance"
                    type="number"
                    placeholder="e.g., 8"
                    value={formData.endurance}
                    onChange={(e) => handleChange("endurance", e.target.value)}
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="payloads">Payloads</Label>
                <Input
                  id="payloads"
                  placeholder="e.g., camera, sonar, DVL, manipulator..."
                  value={formData.payloads}
                  onChange={(e) => handleChange("payloads", e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  id="budget"
                  placeholder="Optional"
                  value={formData.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                  className="bg-background"
                />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Submit Request
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
