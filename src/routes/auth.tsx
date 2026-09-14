import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { LockKeyhole } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/auth")({
  head: () =>
    buildSeo({
      title: "Client Portal Login | ProdigyPro Marketing",
      description:
        "Sign in to the ProdigyPro Marketing client portal to track your automation project status and send updates to our team.",
      path: "/auth",
    }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    try {
      if (mode === "signup") {
        const { data, error: signUpError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + "/portal",
            data: { company_name: company },
          },
        });
        if (signUpError) throw signUpError;
        if (data.session) {
          navigate({ to: "/portal" });
          return;
        }
        setNotice(
          "Check your email to confirm your address. After that, sign in — our team will approve your account before your projects appear.",
        );
        setMode("signin");
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
        if (signInError) throw signInError;
        navigate({ to: "/portal" });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="section-frame py-20">
      <div className="premium-card mx-auto max-w-md p-7 md:p-9">
        <span className="eyebrow">Client portal</span>
        <h1 className="mt-3 flex items-center gap-2 text-2xl font-bold sm:text-3xl">
          <LockKeyhole size={22} className="text-accent" aria-hidden="true" />
          {mode === "signin" ? "Sign in" : "Create your account"}
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Track project status, milestones and send updates straight to the team.
        </p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          {mode === "signup" && (
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                Company name
              </label>
              <input
                id="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
          )}

          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              minLength={8}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
            />
          </div>

          {error && (
            <p role="alert" className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm">
              {error}
            </p>
          )}
          {notice && (
            <p role="status" className="rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm">
              {notice}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 disabled:opacity-60"
          >
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setMode(mode === "signin" ? "signup" : "signin");
            setError(null);
          }}
          className="mt-5 w-full text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          {mode === "signin" ? "New client? Create an account" : "Already have an account? Sign in"}
        </button>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Not a client yet?{" "}
          <Link to="/contact" className="underline underline-offset-4">
            Get in touch
          </Link>
        </p>
      </div>
    </section>
  );
}
