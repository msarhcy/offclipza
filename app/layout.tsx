import './globals.css';
import ThemeProvider from './providers/ThemeProvider';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html><body><ThemeProvider>{children}</ThemeProvider></body></html>);
}
