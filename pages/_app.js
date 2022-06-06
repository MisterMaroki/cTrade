import '../styles/globals.scss';
import 'swiper/css';
import 'swiper/css/effect-cards';
import LogRocket from 'logrocket';
function MyApp({ Component, pageProps }) {
	LogRocket.init('6cpkin/omar');
	return <Component {...pageProps} />;
}

export default MyApp;
