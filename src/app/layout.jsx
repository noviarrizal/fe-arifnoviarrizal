import './styles/globals.css';
import Head from './components/head';
import Guest from './components/guest';
import Hero from './components/hero';
import Header from './components/header';

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<Head />
			<body>{children}</body>
		</html>
	);
}
