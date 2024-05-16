import '@/app/ui/global.css';
import { crimson } from './ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${crimson.className} antialiased`}>{children}</body>
    </html>
  );
}
