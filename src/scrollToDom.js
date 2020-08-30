const scrollToDom = (() => {
	function scroll() {
		document.querySelector('#about').scrollIntoView({behavior: 'smooth'});
	}

	return {
		scroll,
	};
})();
const headerBtn = document.querySelector('#headerBtn');
headerBtn.addEventListener('click', scrollToDom.scroll);

export {scrollToDom};
