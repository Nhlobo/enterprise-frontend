import SEO from '../components/SEO';
import Form from '../components/Form';
import { useUserBehavior } from '../hooks/useUserBehavior';

export default function Contact() {
  useUserBehavior('contact');

  return (
    <>
      <SEO
        title="Contact Us – Mapengo Innovation"
        description="Get in touch with Mapengo Innovation. We'd love to hear about your project."
        canonical="/contact"
      />

      <div className="bg-gray-50 min-h-screen py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600">Let&apos;s talk about how we can help your business grow.</p>
          </div>
          <Form title="Send Us a Message" />
        </div>
      </div>
    </>
  );
}
