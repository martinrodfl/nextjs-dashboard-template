import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

// Esto se llama diseño de raíz y se requiere en cada siguiente aplicación.
// Cualquier interfaz de usuario que agregue al diseño raíz se compartirá en todas las páginas de su aplicación.
// Puede usar el diseño de la raíz para modificar su <html> y <body> Etiquetas y agregue metadatos

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
