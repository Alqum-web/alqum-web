"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [form, setForm] = useState({
    email: "",
    name: "",
    company: "",
    role: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list! We'll be in touch soon.");
        setForm({ email: "", name: "", company: "", role: "" });
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-center">
        <svg className="mx-auto h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="mt-3 font-medium text-green-800">{message}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-border px-4 py-2.5 text-sm text-foreground placeholder:text-muted/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Full name"
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
        />
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          placeholder="Role (e.g. Mechanical Engineer)"
          value={form.role}
          onChange={(e) => update("role", e.target.value)}
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white hover:bg-primary-hover transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-500">{message}</p>
      )}
    </form>
  );
}
