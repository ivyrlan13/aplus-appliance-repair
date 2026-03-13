export default function ReviewBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition-all hover:shadow-md"
    >
      <span className="text-base text-yellow-500" aria-hidden="true">
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </span>
      <span className="text-sm font-bold text-gray-900">4.9</span>
      <span className="h-4 w-px bg-gray-300" />
      <span className="text-sm text-gray-600">416 Reviews on Google</span>
    </a>
  );
}
