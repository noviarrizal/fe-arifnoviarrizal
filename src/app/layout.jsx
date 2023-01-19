import './styles/globals.css';
import Head from './components/head';
import Header from './components/header';
import Hero from './components/hero';
import Guest from './components/guest';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<Head />
			<Header />
			<Hero />
			<Guest />
			<body>{children}</body>
		</html>
	);
}
