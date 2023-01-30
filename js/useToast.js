const $ = (element) => document.getElementById(element);

const toastContainer = $('toast');

export const useToast = () => {
	toastContainer.style.opacity = '1';
	toastContainer.style.visibility = 'visible';
	setTimeout(() => {
		toastContainer.style.opacity = '0';
		toastContainer.style.visibility = 'hidden';
	}, 1500);
};
