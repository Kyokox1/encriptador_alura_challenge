import { WORDS } from './constants.js';

export const decrypt = (text) => {
	if (!text) return;
	// ? convierte el texto en minusculas y quita las tildes.
	text = text
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');

	for (const array of WORDS) {
		if (text.includes(array[1])) text = text.replaceAll(array[1], array[0]);
	}

	return text;
};
