import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { CheckCircle2, LogOut, Plus, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/_authenticated/admin")({
  head: () =>
    buildSeo({
      title: "Admin | ProdigyPro Client Portal",
      description: "Approve client accounts, manage project status and post updates to the ProdigyPro client portal.",
      path: "/admin",
    }),
  component: AdminPage,
});

type Account = { id: string; user_id: string; email: string; company_name: string | null; approved: boolean };
type Project = {
  id: string;
  client_id: string;
  title: string;
  summary: string | null;
  status: string;
  progress: number;
  target_date: string | null;
};

const STATUSES = ["Discovery", "Build", "Testing", "Launched", "Optimising", "On hold"];

function AdminPage() {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [newClient, setNewClient] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newSummary, setNewSummary] = useState("");
  const [updateFor, setUpdateFor] = useState<string | null>(null);
  const [updateBody, setUpdateBody] = useState("");

  const load = useCallback(async () => {
    const { data: userData } = await supabase.auth.getUser();
    const user = userData.user;
    if (!user) return;
    const { data: roles } = await supabase.from("user_roles").select("role").eq("user_id", user.id);
    const admin = Boolean(roles?.some((r) => r.role === "admin"));
    setIsAdmin(admin);
    setChecking(false);
    if (!admin) return;

    const [{ data: acc }, { data: proj }] = await Promise.all([
      supabase.from("client_accounts").select("id, user_id, email, company_name, approved").order("created_at"),
      supabase.from("projects").select("id, client_id, title, summary, status, progress, target_date").order("created_at", { ascending: false }),
    ]);
    setAccounts(acc ?? []);
    setProjects(proj ?? []);
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function toggleApproval(account: Account) {
    const { error: e } = await supabase
      .from("client_accounts")
      .update({ approved: !account.approved })
      .eq("id", account.id);
    if (e) setError(e.message);
    else setAccounts((prev) => prev.map((a) => (a.id === account.id ? { ...a, approved: !a.approved } : a)));
  }

  async function createProject(e: React.FormEvent) {
    e.preventDefault();
    if (!newClient || !newTitle.trim()) return;
    const { data, error: e2 } = await supabase
      .from("projects")
      .insert({ client_id: newClient, title: newTitle.trim(), summary: newSummary.trim() || null })
      .select("id, client_id, title, summary, status, progress, target_date")
      .maybeSingle();
    if (e2) setError(e2.message);
    else if (data) {
      setProjects((prev) => [data, ...prev]);
      setNewTitle("");
      setNewSummary("");
    }
  }

  async function patchProject(id: string, patch: Partial<Project>) {
    const { error: e } = await supabase.from("projects").update(patch).eq("id", id);
    if (e) setError(e.message);
    else setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  }

  async function postUpdate(projectId: string) {
    if (!updateBody.trim()) return;
    const { data: userData } = await supabase.auth.getUser();
    const { error: e } = await supabase.from("project_updates").insert({
      project_id: projectId,
      author_id: userData.user!.id,
      body: updateBody.trim(),
      from_team: true,
    });
    if (e) setError(e.message);
    else {
      setUpdateBody("");
      setUpdateFor(null);
    }
  }

  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  if (checking) {
    return (
      <section className="section-frame py-20">
        <p className="text-sm text-muted-foreground">Checking access…</p>
      </section>
    );
  }

  if (!isAdmin) {
    return (
      <section className="section-frame py-20">
        <div className="premium-card mx-auto max-w-lg p-8">
          <h1 className="text-2xl font-bold">Admin access only</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            This area is reserved for the ProdigyPro team.{" "}
            <Link to="/portal" className="underline underline-offset-4">
              Go to your portal
            </Link>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-frame py-16">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="eyebrow">Team admin</span>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Client portal admin</h1>
        </div>
        <div className="flex gap-2">
          <Link to="/portal" className="button-secondary">
            Client view
          </Link>
          <button type="button" onClick={handleSignOut} className="button-secondary inline-flex items-center gap-2">
            <LogOut size={15} aria-hidden="true" /> Sign out
          </button>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-6 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm">
          {error}
        </p>
      )}

      <h2 className="mt-12 text-xl font-semibold">Client accounts</h2>
      <div className="mt-4 space-y-3">
        {accounts.length === 0 && <p className="text-sm text-muted-foreground">No accounts registered yet.</p>}
        {accounts.map((a) => (
          <div key={a.id} className="premium-card flex flex-wrap items-center justify-between gap-3 p-5">
            <div>
              <p className="font-medium">{a.company_name || a.email}</p>
              <p className="text-xs text-muted-foreground">{a.email}</p>
            </div>
            <button
              type="button"
              onClick={() => toggleApproval(a)}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                a.approved ? "border border-border" : "bg-gradient-brand text-white"
              }`}
            >
              <CheckCircle2 size={15} aria-hidden="true" />
              {a.approved ? "Approved — revoke" : "Approve"}
            </button>
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-xl font-semibold">Create a project</h2>
      <form onSubmit={createProject} className="premium-card mt-4 grid gap-4 p-6 md:grid-cols-2">
        <div>
          <label htmlFor="client" className="mb-1.5 block text-sm font-medium">
            Client
          </label>
          <select
            id="client"
            value={newClient}
            onChange={(e) => setNewClient(e.target.value)}
            required
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm"
          >
            <option value="">Select a client…</option>
            {accounts.map((a) => (
              <option key={a.id} value={a.user_id}>
                {a.company_name || a.email}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="title" className="mb-1.5 block text-sm font-medium">
            Project title
          </label>
          <input
            id="title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            required
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="summary" className="mb-1.5 block text-sm font-medium">
            Summary
          </label>
          <textarea
            id="summary"
            rows={2}
            value={newSummary}
            onChange={(e) => setNewSummary(e.target.value)}
            className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm"
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-white"
          >
            <Plus size={15} aria-hidden="true" /> Create project
          </button>
        </div>
      </form>

      <h2 className="mt-12 text-xl font-semibold">Projects</h2>
      <div className="mt-4 space-y-4">
        {projects.length === 0 && <p className="text-sm text-muted-foreground">No projects yet.</p>}
        {projects.map((p) => {
          const owner = accounts.find((a) => a.user_id === p.client_id);
          return (
            <div key={p.id} className="premium-card p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="text-xs text-muted-foreground">{owner?.company_name || owner?.email || "Unknown client"}</p>
                </div>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor={`status-${p.id}`} className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Status
                  </label>
                  <select
                    id={`status-${p.id}`}
                    value={p.status}
                    onChange={(e) => patchProject(p.id, { status: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background/70 px-4 py-2.5 text-sm"
                  >
                    {STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor={`progress-${p.id}`} className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Progress: {p.progress}%
                  </label>
                  <input
                    id={`progress-${p.id}`}
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={p.progress}
                    onChange={(e) => patchProject(p.id, { progress: Number(e.target.value) })}
                    className="w-full accent-[oklch(0.62_0.24_305)]"
                  />
                </div>
              </div>

              {updateFor === p.id ? (
                <div className="mt-4">
                  <label htmlFor={`update-${p.id}`} className="mb-1.5 block text-sm font-medium">
                    Update for the client
                  </label>
                  <textarea
                    id={`update-${p.id}`}
                    rows={3}
                    value={updateBody}
                    onChange={(e) => setUpdateBody(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm"
                  />
                  <div className="mt-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => postUpdate(p.id)}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-2.5 text-sm font-semibold text-white"
                    >
                      <Send size={15} aria-hidden="true" /> Post update
                    </button>
                    <button type="button" onClick={() => setUpdateFor(null)} className="button-secondary">
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setUpdateFor(p.id);
                    setUpdateBody("");
                  }}
                  className="button-secondary mt-4"
                >
                  Post an update
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
