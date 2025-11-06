"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add your login logic here
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <Image src="/logo_sekolah.png" alt="MIS Nurul Falah Areman" width={60} height={60} className="w-16 h-16" />
          </div>
          <h1 className="text-3xl font-bold text-green-700 mb-2">MIS NURUL FALAH AREMAN</h1>
        </div>

        {/* Login Form Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-8">Login</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Username</label>
              <div className="relative">
                <User size={20} className="absolute left-4 top-3.5 text-green-700" />
                <input
                  type="text"
                  placeholder="Masukan username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-700 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Kata Sandi</label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-3.5 text-green-700" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan kata sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-green-700 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-green-700 hover:text-green-800 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg transition-colors mt-8"
            >
              {isLoading ? "Loading..." : "Masuk"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 border-t border-gray-300"></div>

          {/* Copyright */}
          <p className="text-center text-gray-600 text-sm">© 2025 MIS Nurul Falah Areman. Semua hak dilindungi.</p>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-green-700 hover:text-green-800 font-medium transition-colors">
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </main>
  )
}
