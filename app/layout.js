import { Inter } from 'next/font/google'
import "./globals.css";
import StyledComponentsRegistry from '../lib/registry'
import GlobalStyles from './styles/GlobalStyles';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "DJ Dan",
  description: "DJ Dan Tour Dates & Links",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
