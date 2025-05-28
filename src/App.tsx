import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import CounterPage from "@/pages/CounterPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/counter" element={<CounterPage />} />
          </Routes>
        </main>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}