import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import 'tailwindcss/tailwind.css'

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider enableSystem={true} attribute="class" defaultTheme="light">
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</ThemeProvider>
	);
}

export default MyApp;
