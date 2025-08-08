
import Link from "next/link";
import { Shield, Instagram, Facebook, Youtube } from "lucide-react";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24px"
    height="24px"
    {...props}
  >
    <path
      fill="#4285F4"
      d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"
    />
    <path
      fill="#34A853"
      d="M24 46c6.48 0 11.93-2.13 15.89-5.81l-7.11-5.52c-2.17 1.45-4.92 2.3-8.78 2.3-6.76 0-12.47-4.55-14.51-10.61H2.26v5.7C6.19 40.07 14.45 46 24 46z"
    />
    <path
      fill="#FBBC05"
      d="M9.49 26.92c-.38-1.13-.6-2.31-.6-3.53s.22-2.4.6-3.53V14.1H2.26C.82 17.03 0 20.39 0 24s.82 6.97 2.26 9.9l7.23-5.78z"
    />
    <path
      fill="#EA4335"
      d="M24 9.4c3.49 0 6.57 1.2 9.02 3.5l6.33-6.33C35.91 2.52 30.46 0 24 0 14.45 0 6.19 5.93 2.26 14.1l7.23 5.78C11.53 13.95 17.24 9.4 24 9.4z"
    />
  </svg>
);


export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Shield className="h-5 w-5 text-primary" />
            <p className="text-lg font-headline">Alliance Sambo MMA</p>
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Alliance Sambo MMA. Tous droits réservés.
          </p>
        </div>
        <div className="flex items-center gap-4">
           <Link href="https://share.google/Zxu8Pz3cBirYt5QVs" target="_blank" rel="noreferrer" aria-label="Google My Business">
            <GoogleIcon className="text-muted-foreground transition-opacity hover:opacity-80" />
          </Link>
          <Link href="https://www.instagram.com/alliancesambo?utm_source=qr&igsh=ZjB5N2xsYmNnMHVn" target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
           <Link href="https://youtube.com/@alliancesambomma89?si=VYGo8v9-NJ3tnS6U" target="_blank" rel="noreferrer" aria-label="Youtube">
            <Youtube className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61566303579173" target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
