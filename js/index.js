import { copyTextInView } from './copyTextInView.js';
import { decrypt } from './decrypt.js';
import { encrypt } from './encrypt.js';

const $ = (element) => document.getElementById(element);

const inputText = $('input-text');
const encryptButton = $('encrypt-button');
const decryptButton = $('decrypt-button');
const resultMessage = $('result-message');
const cautionMessage = $('caution-message');
const copyButton = $('copy-button');

const handleClickEncrypt = () => {
	const textEncrypted = encrypt(inputText.value);
	resultMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

	if (!textEncrypted) {
		resultMessage.classList.remove('hidden__element');
		resultMessage.innerText =
			'Ingresa el texto que desees encriptar o desencriptar';
		return;
	}

	resultMessage.innerText = textEncrypted;
	cautionMessage.classList.add('hidden__element');
	copyButton.classList.remove('hidden__element');
	inputText.value = '';
};

const handleClickDecrypt = () => {
	const textEncrypted = decrypt(inputText.value);
	resultMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

	if (!textEncrypted) {
		resultMessage.classList.remove('hidden__element');
		resultMessage.innerText =
			'Ingresa el texto que desees encriptar o desencriptar';
		return;
	}

	resultMessage.innerText = textEncrypted;
	cautionMessage.classList.add('hidden__element');
	inputText.value = '';
};

const handleClickCopyText = () => {
	copyTextInView(resultMessage.innerText);
};

encryptButton.addEventListener('click', handleClickEncrypt);

decryptButton.addEventListener('click', handleClickDecrypt);

copyButton.addEventListener('click', handleClickCopyText);
