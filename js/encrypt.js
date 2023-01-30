import { WORDS } from './constants.js';

export const encrypt = (text) => {
	if (!text) return;

	// ? convierte el texto en minusculas y quita las tildes.
	text = text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');

	for (const array of WORDS) {
		if (text.includes(array[0])) {
			text = text.replaceAll(array[0], array[1]);
		}
	}

	return text;
};
