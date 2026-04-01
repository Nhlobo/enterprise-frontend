import { useState } from 'react';
import Link from 'next/link';
import { submitLead } from '../lib/api';

export default function Form({ title = 'Get in Touch', onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', consent: false });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.consent) {
      setError('You must consent to data processing to submit this form.');
      return;
    }
    setStatus('loading');
    setError('');
    try {
      await submitLead(form);
      setStatus('success');
      if (onSuccess) onSuccess();
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank you!</h3>
        <p className="text-green-700">We&apos;ve received your message and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-8 space-y-5 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="Jane Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="jane@company.co.za"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={form.company}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="Acme Corp"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 text-brand-600 rounded border-gray-300 focus:ring-brand-500"
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          I consent to Mapengo Innovation processing my personal information in accordance with the{' '}
          <Link href="/privacy" className="text-brand-600 underline">Privacy Policy</Link>{' '}
          and the Protection of Personal Information Act (POPIA).
        </label>
      </div>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-brand-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-700 transition-colors disabled:opacity-60"
        data-track="form-submit"
      >
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
