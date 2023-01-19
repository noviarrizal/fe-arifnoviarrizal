import './styles/globals.css';
import Head from './components/head';
import Header from './components/header';
import Hero from './components/hero';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<Head />
			<Header />
			<Hero />
			<body>{children}</body>
		</html>
	);
}
