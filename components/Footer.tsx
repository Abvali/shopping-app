export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="p-5 text-center">Die Shop ist sicher.{currentYear}</div>
    </footer>
  );
}
