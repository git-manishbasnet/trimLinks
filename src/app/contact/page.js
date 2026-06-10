export const metadata = {
  title: "Contact TrimLinks",
  description: "Contact page for TrimLinks.",
};

const contactMethods = [
  {
    label: "Email",
    value: "hello@trimlinks.dev",
    detail: "For project questions, feedback, and collaboration notes.",
  },
  {
    label: "Support",
    value: "support@trimlinks.dev",
    detail: "For short link issues, bug reports, and account help.",
  },
  {
    label: "GitHub",
    value: "github.com/trimlinks",
    detail: "View the source code, open issues, and follow updates.",
  },
];

const officeDetails = [
  { label: "Location", value: "Kathmandu, Nepal" },
  { label: "Hours", value: "Sun - Fri, 10:00 AM - 6:00 PM" },
  { label: "Response", value: "Usually within 24 hours" },
];

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-12">
      <section className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Contact TrimLinks
            </p>
            <h1 className="text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              Reach the team behind cleaner short links.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Have an idea, need help with a short URL, or want to talk about a
              demo? Use any of the dummy contact details below to keep this page
              complete without adding a form.
            </p>
          </div>

          <aside className="rounded-lg border border-indigo-100 bg-indigo-50 p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
              Quick Info
            </p>
            <div className="mt-5 space-y-4">
              {officeDetails.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-bold text-slate-950">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
                {method.label}
              </p>
              <h2 className="mt-3 text-lg font-black text-slate-950">
                {method.value}
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {method.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-[1fr_240px] md:items-center">
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                Prefer a quick update?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Follow the dummy social channels for release notes, feature
                ideas, and project announcements.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <span className="rounded-md bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                @trimlinks
              </span>
              <span className="rounded-md bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                /trimlinks-app
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
