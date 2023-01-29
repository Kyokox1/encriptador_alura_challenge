import { HIDDEN_ELEMENT } from './constants.js';
import { decrypt } from './decrypt.js';
import { encrypt } from './encrypt.js';
import { copyTextInView } from './copyTextInView.js';
import { useToast } from './useToast.js';

const $ = (element) => document.getElementById(element);

const inputText = $('input-text');
const encryptButton = $('encrypt-button');
const decryptButton = $('decrypt-button');
const outputContainer = $('output-container');
const outputDefaultApears = $('default-appears');
const outputExecucionApears = $('execution-appears');
const resultMessage = $('result-message');
const copyButton = $('copy-button');

// TODO: refactorizar Código handleClickEncrypt y handleClickDecrypt
const handleClickEncrypt = () => {
	const textEncrypted = encrypt(inputText.value);
	outputContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

	if (!textEncrypted) {
		outputDefaultApears.classList.remove(HIDDEN_ELEMENT);
		outputExecucionApears.classList.add(HIDDEN_ELEMENT);
		copyButton.classList.add(HIDDEN_ELEMENT);
		return;
	}

	resultMessage.innerText = textEncrypted;
	outputDefaultApears.classList.add(HIDDEN_ELEMENT);
	outputExecucionApears.classList.remove(HIDDEN_ELEMENT);
	copyButton.classList.remove(HIDDEN_ELEMENT);
	inputText.value = '';
};

const handleClickDecrypt = () => {
	const textEncrypted = decrypt(inputText.value);
	outputContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

	if (!textEncrypted) {
		outputDefaultApears.classList.remove(HIDDEN_ELEMENT);
		outputExecucionApears.classList.add(HIDDEN_ELEMENT);
		copyButton.classList.add(HIDDEN_ELEMENT);
		return;
	}

	resultMessage.innerText = textEncrypted;
	outputDefaultApears.classList.add(HIDDEN_ELEMENT);
	outputExecucionApears.classList.remove(HIDDEN_ELEMENT);
	copyButton.classList.remove(HIDDEN_ELEMENT);
	inputText.value = '';
};

const handleClickCopyText = () => {
	copyTextInView(resultMessage.innerText).then(useToast);
};

encryptButton.addEventListener('click', handleClickEncrypt);

decryptButton.addEventListener('click', handleClickDecrypt);

copyButton.addEventListener('click', handleClickCopyText);
