import Section from "@/components/Section";

export default function PrivatePlanningPage() {
  return (
    <>
      <section className="bg-slate-900 text-white">
        <div className="container py-12 md:py-16">
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            Private Trip Planning
          </h1>
          <p className="text-sm text-slate-200 max-w-2xl">
            Custom itineraries for Rome and the wider Mediterranean, built for
            who you are and how you travel – not for a generic template.
          </p>
        </div>
      </section>

      <Section
        title="Who this is for"
        subtitle="We design trips for people who want both flexibility and structure."
      >
        <div className="grid gap-4 md:grid-cols-4 text-sm text-slate-700">
          <Card
            title="Families"
            text="Trips that keep kids interested and adults sane, with realistic pacing and breaks."
          />
          <Card
            title="Couples"
            text="Anniversaries, honeymoons or just time together with fewer logistics headaches."
          />
          <Card
            title="Friends"
            text="Birthday trips, reunions, bachelor / bachelorette weekends with clear plans."
          />
          <Card
            title="Cruise add-ons"
            text="Pre and post-cruise days that connect smoothly with your ship schedule."
          />
        </div>
      </Section>

      <Section
        title="Planning packages"
        subtitle="Approximate structure – we can always adjust once we talk."
      >
        <div className="grid gap-6 md:grid-cols-3 text-sm text-slate-700">
          <PackageCard
            name="Lite Planning"
            description="Short stays or simple add-ons."
            points={[
              "1 destination · up to 3 days",
              "One call or video chat",
              "Written day-by-day plan with links",
              "Suggestions for tickets and restaurants"
            ]}
            from="from €90"
          />
          <PackageCard
            name="Full Trip Planning"
            description="Most popular for first-time Italy trips."
            points={[
              "4–10 days · multiple neighborhoods",
              "Detailed itinerary with timings",
              "Restaurant and activity suggestions each day",
              "Messaging support before and just after arrival"
            ]}
            from="from €190"
          />
          <PackageCard
            name="VIP / Group Planning"
            description="Complex routes, events or bigger groups."
            points={[
              "Custom routes and logistics",
              "Coordinating multiple arrivals and needs",
              "Pre-trip call plus follow-ups",
              "Optional on-the-ground support or local host"
            ]}
            from="quote on request"
          />
        </div>
      </Section>

      <Section
        title="Tell us about your trip"
        subtitle="Share a few basics – we&apos;ll reply with ideas, questions and a clear quote."
      >
        <div className="max-w-xl bg-white border rounded-2xl shadow-sm p-5 text-xs text-slate-700">
          <form className="space-y-3">
            <div>
              <label className="block mb-1">Name</label>
              <input
                className="w-full border rounded-lg px-3 py-2 text-xs"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 text-xs"
                name="email"
                required
              />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="block mb-1">Travel dates</label>
                <input
                  className="w-full border rounded-lg px-3 py-2 text-xs"
                  name="dates"
                  placeholder="e.g. 10–17 May 2026"
                />
              </div>
              <div>
                <label className="block mb-1">Destination(s)</label>
                <input
                  className="w-full border rounded-lg px-3 py-2 text-xs"
                  name="destinations"
                  placeholder="Rome, Naples, Amalfi..."
                />
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label className="block mb-1">Number of people</label>
                <input
                  type="number"
                  min={1}
                  className="w-full border rounded-lg px-3 py-2 text-xs"
                  name="people"
                />
              </div>
              <div>
                <label className="block mb-1">Budget range</label>
                <select
                  className="w-full border rounded-lg px-3 py-2 text-xs bg-white"
                  name="budget"
                >
                  <option value="">Select...</option>
                  <option>€100–€150 per day per person</option>
                  <option>€150–€250 per day per person</option>
                  <option>€250+ per day per person</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block mb-1">Travel style</label>
              <textarea
                name="style"
                rows={3}
                className="w-full border rounded-lg px-3 py-2 text-xs"
                placeholder="Tell us if you prefer slow days, food focus, history, nightlife, photography..."
              />
            </div>
            <div>
              <label className="block mb-1">How did you find us?</label>
              <select
                className="w