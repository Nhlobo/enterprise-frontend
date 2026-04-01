import Link from 'next/link';

export default function Card({ title, description, href, tag, image }) {
  const content = (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col h-full border border-gray-100">
      {image && (
        <div className="w-full h-40 bg-brand-50 rounded-xl mb-4 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {tag && (
        <span className="text-xs font-semibold text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3 w-fit">
          {tag}
        </span>
      )}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm flex-1">{description}</p>
      {href && (
        <span className="mt-4 text-brand-600 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
          Learn more →
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }
  return content;
}
