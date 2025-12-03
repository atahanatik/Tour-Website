import Link from "next/link";
import Section from "../components/Section";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experiences";

export default function HomePage() {
  const featured = experiences.slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              Small-group experiences in Rome & the Mediterranean.
            </h1>
            <p className="text-sm md:text-base text-slate-200 mb-6 max-w-xl">
              Shore excursions for cruise guests, evening city walks and fully
              customized trip planning — designed for curious travelers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/experiences"
                className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 text-sm font-medium px-5 py-2.5 hover:bg-slate-100"
              >
                View Experiences
              </Link>
              <Link
                href="/private-planning"
                className="inline-flex items-center justify-center rounded-full border border-slate-400 text-sm font-medium px-5 py-2.5 hover:bg-slate-100 hover:text-slate-900 bg-slate-800/40"
              >
                Plan My Trip
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/10 border border-white/20 rounded-3xl p-6">
              <p className="text-xs uppercase tracking-wide text-slate-300 mb-3">
                Why travelers book with us
              </p>
              <ul className="space-y-2 text-xs text-slate-100">
                <li>• Small groups, no megaphone tours.</li>
                <li>• Timing made for cruise ship schedules.</li>
                <li>• Custom itineraries for families, couples and friends.</li>
                <li>• Highly rated on Airbnb Experiences.</li>
              </ul>
              <p className="mt-4 text-xs text-amber-200">
                ⭐ 4.9+ average rating · Hundreds of guests hosted
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Featured Experiences"
        subtitle="A taste of the walks and shore tours guests love the most."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((exp) => (
            <ExperienceCard key={exp.slug} {...exp} />
          ))}
        </div>
      </Section>

      <Section
        title="Cruise Shore Tours"
        subtitle="Designed around your ship’s schedule — Civitavecchia, Naples and more."
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white rounded-2xl border p-6 shadow-sm">
            <h3 className="font-semibold mb-2">For cruise passengers</h3>
            <p className="text-sm text-slate-600 mb-3">
              We time every shore day around your all-aboard time, keeping
              things relaxed but efficient — no running behind a flag.
            </p>
            <ul className="text-sm text-slate-600 space-y-1 mb-4">
              <li>• Civitavecchia → Rome in a Day</li>
              <li>• Naples Port: Pompeii & Amalfi</li>
              <li>• Pre / Post cruise city days</li>
            </ul>
            <Link
              href="/cruise-tours"
              className="inline-flex text-sm font-medium rounded-full border px-4 py-2 hover:bg-slate-50"
            >
              See Cruise Tours
            </Link>
          </div>
          <div className="flex-1 bg-slate-900 text-slate-50 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Private Trip Planning</h3>
            <p className="text-sm text-slate-200 mb-3">
              You tell us who you are, your dates and your budget. We build the
              trip around you — not around a template.
            </p>
            <p className="text-xs text-slate-300 mb-4">
              Perfect for families, couples and groups combining cruise and
              land.
            </p>
            <Link
              href="/private-planning"
              className="inline-flex text-sm font-medium rounded-full bg-white text-slate-900 px-4 py-2 hover:bg-slate-100"
            >
              Start Planning
            </Link>
          </div>
        </div>
      </Section>

      <Section
        title="Trusted by Airbnb Experience guests"
        subtitle="We started on Airbnb Experiences and brought the same care to our direct guests."
      >
        <div className="grid gap-4 md:grid-cols-3 text-sm text-slate-700">
          <div className="bg-white rounded-2xl border p-4 shadow-sm">
            <p className="text-xs text-slate-500 mb-1">Ratings</p>
            <p className="text-lg font-semibold mb-1">
              ⭐ 4.9+ average rating
            </p>
            <p className="text-xs text-slate-500">
              Across hundreds of guests from many countries.
            </p>
          </div>
          <div className="bg-white rounded-2xl border p-4 shadow-sm">
            <p className="text-xs text-slate-500 mb-2">Guest review</p>
            <p className="text-xs italic">
              “Felt like walking Rome with a local friend who actually knows the
              history.”
            </p>
          </div>
          <div className="bg-white rounded-2xl border p-4 shadow-sm">
            <p className="text-xs text-slate-500 mb-2">Book where you prefer</p>
            <p className="text-xs">
              You can still book us on Airbnb, or contact us here for more
              custom options and dates.
            </p>
            <Link
              href="/airbnb-rankings"
              className="inline-flex mt-3 text-xs font-medium rounded-full border px-3 py-1.5 hover:bg-slate-50"
            >
              See Airbnb Rankings
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
