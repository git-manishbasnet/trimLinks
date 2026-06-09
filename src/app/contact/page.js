export const metadata = {
  title: "Contact TrimLinks",
  description: "Contact page for TrimLinks.",
};

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-12">
      <section className="mx-auto max-w-3xl rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
          Contact
        </p>
        <h1 className="text-4xl font-black text-slate-950">Get in touch</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Add your email, portfolio, or GitHub profile here when you are ready
          to make the project public. For now, this page keeps the navigation
          complete and avoids a broken route.
        </p>
      </section>
    </main>
  );
}
