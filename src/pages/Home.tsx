import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome to Our Application</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A modern application built with React, Tailwind CSS, and shadcn/ui components.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Feature One</CardTitle>
            <CardDescription>Discover our primary features</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Explore the powerful capabilities of our application.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/features">Learn More</Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>About Us</CardTitle>
            <CardDescription>Our story and mission</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Learn about who we are and what drives our work.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/about">About Us</Link>
            </Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Get Started</CardTitle>
            <CardDescription>Begin your journey</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Start using our application with our easy onboarding process.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}