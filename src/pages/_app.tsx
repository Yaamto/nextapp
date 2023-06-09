import { UserProvider } from '@/context/UserContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
export default function App({ Component, pageProps }: AppProps) {
  return   <UserProvider><Component {...pageProps} /></UserProvider>
}
