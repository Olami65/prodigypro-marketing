import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Clock, LogOut, Send, ShieldCheck } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/_authenticated/portal")({
  head: () =>
    buildSeo({
      title: "Your Projects | ProdigyPro Client Portal",
      description:
        "View live status, progress and milestones for your ProdigyPro automation projects, and send updates to the team.",
      path: "/portal",
    }),
  component: PortalPage,
});

type Account = { id: string; email: string; company_name: string | null; approved: boolean };
type Project = {
  id: string;
  title: string;
  summary: string | null;
  status: string;
  progress: number;
  target_date: string | null;
  updated_at: string;
};
type Update = { id: string; body: string; from_team: boolean; created_at: string };

function PortalPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [account, setAccount] = useState<Account | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [updates, setUpdates] = useState<Update[]>([]);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    const { data: userData } = await supabase.auth.getUser();
    const user = userData.user;
    if (!user) return;

    const { data: roleRows } = await supabase.from("user_roles").select("role").eq("user_id", user.id);
    setIsAdmin(Boolean(roleRows?.some((r) => r.role === "admin")));

    let { data: acct } = await supabase
      .from("client_accounts")
      .select("id, email, company_name, approved")
      .eq("user_id", user.id)
      .maybeSingle();

    if (!acct) {
      const meta = user.user_metadata as { company_name?: string };
      const { data: created } = await supabase
        .from("client_accounts")
        .insert({
          user_id: user.id,
          email: user.email ?? "",
          company_name: meta?.company_name ?? null,
          approved: false,
        })
        .select("id, email, company_name, approved")
        .maybeSingle();
      acct = created ?? null;
    }
    setAccount(acct);

    const { data: projectRows } = await supabase
      .from("projects")
      .select("id, title, summary, status, progress, target_date, updated_at")
      .eq("client_id", user.id)
      .order("created_at", { ascending: false });

    setProjects(projectRows ?? []);
    setActiveId((prev) => prev ?? projectRows?.[0]?.id ?? null);
    setLoading(false);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  useEffect(() => {
    if (!activeId) {
      setUpdates([]);
      return;
    }
    void (async () => {
      const { data } = await supabase
        .from("project_updates")
        .select("id, body, from_team, created_at")
        .eq("project_id", activeId)
        .order("created_at", { ascending: true });
      setUpdates(data ?? []);
    })();
  }, [activeId]);

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!activeId || !message.trim()) return;
    setSending(true);
    setError(null);
    const { data: userData } = await supabase.auth.getUser();
    const { data, error: insertError } = await supabase
      .from("project_updates")
      .insert({
        project_id: activeId,
        author_id: userData.user!.id,
        body: message.trim(),
        from_team: isAdmin,
      })
      .select("id, body, from_team, created_at")
      .maybeSingle();
    if (insertError) setError(insertError.message);
    else if (data) {
      setUpdates((prev) => [...prev, data]);
      setMessage("");
    }
    setSending(false);
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section className="section-frame py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="eyebrow">Client portal</span>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            {account?.company_name ? `${account.company_name}’s projects` : "Your projects"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{account?.email}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {isAdmin && (
            <Link to="/admin" className="button-secondary">
              Admin view
            </Link>
          )}
          <button type="button" onClick={handleSignOut} className="button-secondary inline-flex items-center gap-2">
            <LogOut size={15} aria-hidden="true" /> Sign out
          </button>
        </div>
      </div>

      {loading && <p className="mt-10 text-sm text-muted-foreground">Loading your projects…</p>}

      {!loading && account && !account.approved && !isAdmin && (
        <div className="premium-card mt-10 p-7">
          <Clock className="text-accent" aria-hidden="true" />
          <h2 className="mt-4 text-xl font-semibold">Your account is awaiting approval</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Thanks for registering. Our team reviews new portal accounts manually — you’ll see your project status here
            as soon as you’re approved. Need it fast?{" "}
            <Link to="/contact" className="underline underline-offset-4">
              Message us
            </Link>
            .
          </p>
        </div>
      )}

      {!loading && (account?.approved || isAdmin) && (
        <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="space-y-3">
            {projects.length === 0 && (
              <div className="premium-card p-6 text-sm text-muted-foreground">
                No projects yet. Once we kick off your build, it will appear here.
              </div>
            )}
            {projects.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveId(p.id)}
                aria-current={p.id === activeId}
                className={`w-full rounded-2xl border p-5 text-left transition ${
                  p.id === activeId ? "border-primary/60 bg-primary/10" : "border-border bg-background/70 hover:border-primary/40"
                }`}
              >
                <p className="font-semibold">{p.title}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-accent">{p.status}</p>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full rounded-full bg-gradient-brand" style={{ width: `${p.progress}%` }} />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{p.progress}% complete</p>
              </button>
            ))}
          </div>

          <div className="premium-card p-6 md:p-8">
            {!activeProject && <p className="text-sm text-muted-foreground">Select a project to see its updates.</p>}
            {activeProject && (
              <>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold">{activeProject.title}</h2>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs">
                    <ShieldCheck size={13} aria-hidden="true" /> {activeProject.status}
                  </span>
                </div>
                {activeProject.summary && (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{activeProject.summary}</p>
                )}
                {activeProject.target_date && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Target date: {new Date(activeProject.target_date).toLocaleDateString()}
                  </p>
                )}

                <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Updates</h3>
                <ul className="mt-4 space-y-3">
                  {updates.length === 0 && <li className="text-sm text-muted-foreground">No updates yet.</li>}
                  {updates.map((u) => (
                    <li
                      key={u.id}
                      className={`rounded-2xl border p-4 text-sm ${
                        u.from_team ? "border-accent/40 bg-accent/5" : "border-border bg-background/70"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        {u.from_team ? "ProdigyPro team" : "You"} · {new Date(u.created_at).toLocaleString()}
                      </p>
                      <p className="mt-2 leading-relaxed">{u.body}</p>
                    </li>
                  ))}
                </ul>

                <form onSubmit={handleSend} className="mt-6">
                  <label htmlFor="update" className="mb-2 block text-sm font-medium">
                    Send an update
                  </label>
                  <textarea
                    id="update"
                    rows={3}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    placeholder="Share feedback, assets or questions with the team…"
                  />
                  {error && (
                    <p role="alert" className="mt-2 text-sm text-destructive">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={sending}
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    <Send size={15} aria-hidden="true" /> {sending ? "Sending…" : "Send update"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
