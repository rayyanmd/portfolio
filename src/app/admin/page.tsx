"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/src/components/Header";
import { AdminMessageList } from "@/src/components/AdminMessageList";
import { Footer } from "@/src/components/Footer";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth");

        if (response.status === 401) {
          // This will trigger the browser's HTTP Basic Auth dialog
          setIsAuthenticated(false);
          return;
        }

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Authentication error:", error);
        router.push("/");
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="retro-text text-xl">Loading...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="retro-text text-xl">
          Authentication required. Please refresh the page.
        </p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl retro-heading text-retro-orange">
              Admin Dashboard
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed retro-text">
              Manage and reply to anonymous messages
            </p>
          </div>
          <AdminMessageList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
