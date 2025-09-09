import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Phone, Mail, MapPin, CheckCircle, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// === Editable Branding ===
const BRAND = {
  name: "El-roi's Waste Solutions",
  tagline: "Clean Communities. Happy Residents.",
  phone: "(555) 555-5555",
  email: "info@elroiwaste.com",
  address: "Denton, TX 76208",
  cta: "Get a Proposal",
};

export default function ElRoiWebsite() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
              <Trash2 className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-bold tracking-tight">{BRAND.name}</div>
              <div className="text-xs text-slate-500">{BRAND.tagline}</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            <button onClick={() => scrollTo("about")} className="text-sm text-slate-600 hover:text-slate-900">About</button>
            <button onClick={() => scrollTo("services")} className="text-sm text-slate-600 hover:text-slate-900">Services</button>
            <button onClick={() => scrollTo("process")} className="text-sm text-slate-600 hover:text-slate-900">3-Step Valet</button>
            <button onClick={() => scrollTo("contact")} className="text-sm text-slate-600 hover:text-slate-900">Contact</button>
            <Button onClick={() => scrollTo("contact")} className="rounded-2xl text-sm">{BRAND.cta}</Button>
          </nav>

          {/* Mobile */}
          <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3">
              <div className="flex flex-col gap-2">
                {[
                  { id: "about", label: "About" },
                  { id: "services", label: "Services" },
                  { id: "process", label: "3-Step Valet" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="rounded-xl px-2 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {item.label}
                  </button>
                ))}
                <Button onClick={() => scrollTo("contact")} className="mt-2 w-full rounded-2xl text-sm">
                  {BRAND.cta}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.12),transparent_50%)]" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
              Valet Trash & Waste Solutions for Multi‑Family Communities
            </h1>
            <p className="mt-4 max-w-xl text-slate-600 md:text-lg">
              Boost resident satisfaction, keep hallways spotless, and reduce operational strain with reliable, nightly doorstep pickup.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button size="lg" className="rounded-2xl" onClick={() => scrollTo("contact")}>{BRAND.cta}</Button>
              <button onClick={() => scrollTo("services")} className="flex items-center gap-2 text-sm font-medium text-emerald-700 hover:text-emerald-800">
                Explore services <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/> Insured & background‑checked valets</span>
              <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/> Nightly reporting & SLA tracking</span>
              <span className="inline-flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600"/> Eco‑friendly disposal options</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="md:justify-self-end">
            <Card className="overflow-hidden border-0 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white">
                <CardTitle className="text-xl">Request a Property Proposal</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <Input placeholder="Property / Community Name" />
                <div className="grid gap-3 md:grid-cols-2">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Email" type="email" />
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  <Input placeholder="Phone" />
                  <Input placeholder="Units (approx.)" />
                </div>
                <Textarea placeholder="Notes (desired start date, special needs, etc.)" rows={4} />
                <Button className="w-full rounded-2xl">Submit</Button>
                <p className="text-center text-xs text-slate-500">This demo form is non‑functional. Connect to your form handler/CRM.</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">About Us</h2>
            <p className="mt-4 text-slate-600 md:text-lg">
              {BRAND.name} partners with property managers to deliver dependable valet trash collection and tailored waste solutions across Denton and the DFW metro. We focus on cleanliness, safety, and resident delight—so your team can focus on occupancy and NOI.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Uniformed, trained, and background‑checked valets",
                "Consistent pick‑up windows and route optimization",
                "Photo‑verified service logs & incident reporting",
                "Flexible pricing aligned to occupancy & unit count",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-6">
            <Card className="h-full border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Fast Facts</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-2">
                <Fact label="Service Area" value="Denton & DFW" />
                <Fact label="Pick‑up Days" value="Sun–Thu (customizable)" />
                <Fact label="Start Window" value="7–10 PM (typical)" />
                <Fact label="Reporting" value="Nightly photo logs" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Services</h2>
          <p className="mt-3 max-w-2xl text-slate-600">End‑to‑end waste solutions tailored for multi‑family properties.</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <ServiceCard title="Valet Trash (Doorstep)" desc="Nightly doorstep collection with sealed, leak‑proof liners, route optimization, and photo‑verified service." />
            <ServiceCard title="Bulk & Overflow Pickup" desc="On‑demand removal for furniture, mattresses, and overflow around enclosures to keep curb appeal high." />
            <ServiceCard title="Recycling Programs" desc="Resident education and dedicated recycling nights to reduce landfill waste and improve sustainability." />
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section id="process" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">How Valet Trash Works (3 Simple Steps)</h2>
        <p className="mt-3 max-w-2xl text-slate-600">Clear communication, consistent timing, and verified completion—every night.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <StepCard step={1} title="Residents Set Out" desc="Residents place tied bags in provided containers outside the door during the posted time window." />
          <StepCard step={2} title="Valets Collect & Verify" desc="Uniformed valets collect, swap liners, and photo‑verify each pickup along optimized routes." />
          <StepCard step={3} title="Dispose & Report" desc="Waste is transported to onsite enclosures; nightly report with photos is sent to management." />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Contact</h2>
              <p className="mt-3 text-slate-600">Request a site walk, pricing, or a same‑day proposal.</p>

              <div className="mt-6 space-y-3 text-slate-700">
                <div className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-600"/><a href={`tel:${BRAND.phone}`} className="hover:underline">{BRAND.phone}</a></div>
                <div className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-600"/><a href={`mailto:${BRAND.email}`} className="hover:underline">{BRAND.email}</a></div>
                <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-emerald-600"/><span>{BRAND.address}</span></div>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Preferred Start</h3>
                <p className="mt-2 text-slate-700">Most communities launch within 2 weeks. We provide door hangers, resident instructions, and hall signage.</p>
              </div>
            </div>

            <div className="md:col-span-7">
              <Card className="border-0 shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle>Send a Message</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email" type="email" />
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <Input placeholder="Phone" />
                    <Input placeholder="Property / Company" />
                  </div>
                  <Textarea rows={5} placeholder="Tell us about your community (units, floors, elevators, target launch date)…" />
                  <Button className="w-full rounded-2xl">Send</Button>
                  <p className="text-center text-xs text-slate-500">Hook this form to your email, CRM, or form handler to receive inquiries.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm">
            <button onClick={() => scrollTo("about")} className="text-slate-600 hover:text-slate-900">About</button>
            <button onClick={() => scrollTo("services")} className="text-slate-600 hover:text-slate-900">Services</button>
            <button onClick={() => scrollTo("process")} className="text-slate-600 hover:text-slate-900">3‑Step Valet</button>
            <button onClick={() => scrollTo("contact")} className="text-slate-600 hover:text-slate-900">Contact</button>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-5 right-5 hidden md:block">
        <Button onClick={() => scrollTo("contact")} className="shadow-xl">{BRAND.cta}</Button>
      </div>
    </div>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <Trash2 className="h-5 w-5 text-emerald-600" /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-slate-600">{desc}</CardContent>
    </Card>
  );
}

function StepCard({ step, title, desc }: { step: number; title: string; desc: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <Card className="h-full border-0 shadow-lg">
        <CardHeader className="pb-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">{step}</div>
          <CardTitle className="mt-3 text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-slate-600">{desc}</CardContent>
      </Card>
    </motion.div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
      <div className="mt-1 text-slate-800">{value}</div>
    </div>
  );
}
