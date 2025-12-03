import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";
import Section from "@/components/Section";

interface Props {
  params: { slug: string };
}

export default function ExperienceDetailPage({ params }: Props) {
  const exp = experiences.find((e) => e.slug === params.slug);
  if (!exp) return notFound();

  return (
    <>
      <section className="bg-slate-900 text-white">
        <div className="container py-12 md:py-16">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            {exp.title}
          </h1>
          <p className="text-sm text-slate-200 mb-3">{exp.tagline}</p>
          <p className="text-xs text-slate-300 mb-1">
            ⏱ {exp.duration} · From {exp.priceFrom}
          </p>
          <p className="text-xs text-amber-200">{exp.ratingText}</p>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="font-semibold mb-2 text-lg">What we&apos;ll do</h2>
              <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                {exp.whatWeDo.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-1 text-sm">What&apos;s included</h3>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                  {exp.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-sm">
                  What&apos;s not included
                </h3>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                  {exp.notIncluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-1 text-sm">Schedule example</h3>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                {exp.schedule.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-1 text-sm">FAQ</h3>
              <div className="space-y-3">
                {exp.faq.map((item) => (
                  <div key={item.question}>
                    <p className="text-xs font-semibold">{item.question}</p>
                    <p className="text-xs text-slate-700">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl border shadow-sm p-4">
              <h3 className="font-semibold mb-2 text-sm">
                Request this experience
              </h3>
              <p className="text-xs text-slate-600 mb-3">
                Tell us your date and group size. We&apos;ll reply with
                availability and a link to confirm.
              </p>
              <RequestForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function RequestForm() {
  async function onSubmit(formData: FormData) {
    // No real backend here – just a fake delay and message
    "use server";
    console.log("Form submitted", Object.fromEntries(formData.entries()));
  }

  return (
    <form action={onSubmit} className="space-y-3 text-xs">
      <div className="space-y-1">
        <label className="block">Name</label>
        <input
          name="name"
          required
          className="w-full border rounded-lg px-3 py-2 text-xs"
        />
      </div>
      <div className="space-y-1">
        <label className="block">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full border rounded-lg px-3 py-2 text-xs"
        />
      </div>
      <div className="space-y-1">
        <label className="block">Preferred date</label>
        <input
          name="date"
          type="date"
          className="w-full border rounded-lg px-3 py-2 text-xs"
        />
      </div>
      <div className="space-y-1">
        <label className="block">Number of people</label>
        <input
          name="people"
          type="number"
          min={1}
          className="w-full border rounded-lg px-3 py-2 text-xs"
        />
      </div>
      <div className="space-y-1">
        <label className="block">Message</label>
        <textarea
          name="message"
          rows={3}
          className="w-full border rounded-lg px-3 py-2 text-xs"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-slate-900 text-white font-medium py-2 text-xs hover:bg-slate-800"
      >
        Send request (demo)
      </button>
      <p className="text-[10px] text-slate-500">
        This is a demo form – connect it later to email, CRM or WhatsApp.
      </p>
    </form>
  );
}