export const copyTextInView = async (textToCopy) => {
	if (navigator.clipboard) {
		// ? Navegador modernos, usamos clipboard.writeText() (copiar texto de parrafo)
		try {
			await navigator.clipboard.writeText(textToCopy);
			console.log('Texto copiado al portapapeles: ');
		} catch (error) {
			console.error('Error al copiar al portapapeles: ', error);
		}
	} else {
		// ? Navegadores antiguos, usamos document.execCommand("copy") (copiar texto de parrafo, para un textarea es mas sencillo)
		const textarea = document.createElement('textarea');
		textarea.value = textToCopy;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand('copy');
		document.body.removeChild(textarea);
		console.log('Texto copiado al portapapeles');
	}
};

// ? Usamos uno u otro por motivos de accesibilidad y adaptibilidad.
