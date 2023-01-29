export const copyTextInView = (textToCopy) => {
	if (navigator.clipboard) {
		// ? Navegador modernos, usamos clipboard.writeText() (copiar texto de parrafo)
		navigator.clipboard
			.writeText(textToCopy)
			.then((text) => {
				console.log('Texto copiado al portapapeles: ', text);
			})
			.catch((err) => {
				console.error('Error al copiar al portapapeles: ', err);
			});
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
