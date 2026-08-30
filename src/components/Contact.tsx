import { useState, type FormEvent } from 'react';
import { Mail, Phone, MessageCircle, Linkedin, Github, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { site, projectTypes } from '@/data/site';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData): Record<string, string> => {
    const errs: Record<string, string> = {};
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    if (!name) errs.name = 'Name is required';
    if (!email) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please enter a valid email';
    }
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errs = validate(formData);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('loading');
    try {
      const { error } = await supabase.from('project_inquiries').insert({
        name: (formData.get('name') as string).trim(),
        company: (formData.get('company') as string)?.trim() || null,
        email: (formData.get('email') as string).trim(),
        phone: (formData.get('phone') as string)?.trim() || null,
        project_type: (formData.get('projectType') as string) || null,
        description: (formData.get('description') as string)?.trim() || null,
        current_system: (formData.get('currentSystem') as string)?.trim() || null,
        plc_controller: (formData.get('plcController') as string)?.trim() || null,
        budget: (formData.get('budget') as string)?.trim() || null,
      });

      if (error) throw error;
      setStatus('success');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  const contactLinks = [
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phone}` },
    { icon: MessageCircle, label: 'WhatsApp', value: site.whatsapp, href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: site.linkedin, href: '#' },
    { icon: Github, label: 'GitHub', value: site.github, href: '#' },
  ];

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-ink-50/40">
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="reveal flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-accent-600" />
            <span className="section-label">Contact</span>
          </div>
          <h2 className="reveal reveal-delay-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-ink-900 leading-tight">
            HAVE A MACHINE, PRODUCT OR PROCESS THAT NEEDS SOFTWARE?
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-lg text-ink-500 leading-relaxed">
            Tell me what you are trying to build, automate or improve. I'll review the requirement and understand what kind of software solution would fit the problem.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: contact info */}
          <div className="lg:col-span-4 reveal">
            <div className="space-y-3">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="group flex items-center gap-4 rounded-xl border border-ink-100 bg-white px-5 py-4 transition-all duration-300 hover:border-ink-900 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink-100 text-ink-700 transition-all duration-300 group-hover:bg-ink-900 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] tracking-wider text-ink-400">
                        {link.label.toUpperCase()}
                      </div>
                      <div className="text-sm font-medium text-ink-700 mt-0.5">
                        {link.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Response note */}
            <div className="mt-6 rounded-xl border border-ink-100 bg-white px-5 py-4">
              <p className="text-sm text-ink-500 leading-relaxed">
                Prefer email? Send your project details directly and I'll get back to you.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-8 reveal reveal-delay-1">
            <div className="rounded-2xl border border-ink-100 bg-white p-6 lg:p-8 shadow-sm">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink-900">
                    Project Request Sent
                  </h3>
                  <p className="mt-2 text-sm text-ink-500 max-w-md">
                    Thank you for reaching out. I'll review your requirements and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-accent-600 hover:text-accent-700"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {status === 'error' && (
                    <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3.5">
                      <AlertCircle className="h-5 w-5 text-red-500 shrink-0" />
                      <p className="text-sm text-red-700">
                        Something went wrong. Please try again or email directly.
                      </p>
                    </div>
                  )}

                  {/* Name + Company */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Name" required error={errors.name}>
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Your name"
                      />
                    </FormField>
                    <FormField label="Company">
                      <input
                        type="text"
                        name="company"
                        className="form-input"
                        placeholder="Company name (optional)"
                      />
                    </FormField>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="Email" required error={errors.email}>
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="you@example.com"
                      />
                    </FormField>
                    <FormField label="Phone / WhatsApp">
                      <input
                        type="tel"
                        name="phone"
                        className="form-input"
                        placeholder="Optional"
                      />
                    </FormField>
                  </div>

                  {/* Project type */}
                  <FormField label="Project Type">
                    <select name="projectType" className="form-input cursor-pointer">
                      <option value="">Select a type...</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </FormField>

                  {/* What do you need */}
                  <FormField label="What do you need?">
                    <textarea
                      name="description"
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Describe the software you need..."
                    />
                  </FormField>

                  {/* Current system */}
                  <FormField label="Current System">
                    <textarea
                      name="currentSystem"
                      rows={3}
                      className="form-input resize-none"
                      placeholder="Describe your machine, product, software or process."
                    />
                  </FormField>

                  {/* PLC + Budget */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField label="PLC / Controller">
                      <input
                        type="text"
                        name="plcController"
                        className="form-input"
                        placeholder="Optional (e.g. Siemens, Delta)"
                      />
                    </FormField>
                    <FormField label="Budget">
                      <input
                        type="text"
                        name="budget"
                        className="form-input"
                        placeholder="Optional"
                      />
                    </FormField>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full sm:w-auto group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Project Request
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-ink-400 leading-relaxed">
                    By submitting, you agree to be contacted about your project inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
          <AlertCircle className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}
