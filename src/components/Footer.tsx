export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
}
