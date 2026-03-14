/**
 * CV - Poné tu archivo PDF en public/cv.pdf (o cambiá el nombre acá)
 */
export const CV_PDF_PATH = '/cv.pdf';

/**
 * Configuración de contacto
 *
 * FORMULARIO:
 * - Obtené tu access key en https://web3forms.com
 * - Registrate con castilloagus.dev@gmail.com para que los emails lleguen ahí
 * - Reemplazá YOUR_ACCESS_KEY con la clave que te envían
 */
export const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY';

/**
 * Redes sociales - Agregá tu link de perfil en cada href
 */
export const socials = [
	{
		name: 'GitHub',
		href: 'https://github.com/castilloagus0',
		description: 'Sigue mi trayectoria en código',
		icon: 'github' as const,
	},
	{
		name: 'LinkedIn',
		href: '#',
		description: 'Red profesional',
		icon: 'linkedin' as const,
	},
	{
		name: 'Twitter',
		href: '#',
		description: 'Pensamientos y novedades',
		icon: 'twitter' as const,
	},
	{
		name: 'Instagram',
		href: '#',
		description: 'Contenido visual',
		icon: 'instagram' as const,
	},
];
