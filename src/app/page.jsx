import styles from './page.module.css';
import Header from './components/header';
import Hero from './components/hero';
import Guest from './components/guest';
import Rundown from './components/rundown';
import Announcements from './components/announcement';
import PopCulture from './components/popCulture';
import InsideICC from './components/insideICC';
import Brands from './components/brands';
import Wristband from './components/wristband';
import Party from './components/party';
import DateAndPlace from './components/dateAndPlace';
import Credit from './components/credit';
import ChatUs from './components/chatUs';
import Footer from './components/footer';

export default function Home() {
	return (
		<main className={styles.main}>
			<Header />
			<Hero />
			<Guest />
			<Rundown />
			<Announcements />
			<PopCulture />
			<InsideICC />
			<Brands />
			<Wristband />
			<Party />
			<DateAndPlace />
			<Credit />
			<ChatUs />
			<Footer />
		</main>
	);
}
