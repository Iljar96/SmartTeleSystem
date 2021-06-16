window.onload = function () {
	const moreBtn = document.querySelectorAll('.btn-more');

	window.addEventListener('click', function (e) {
		const target = e.target;

		if (moreBtn.length > 0 && target.classList.contains('btn-more')) {
			const moreText = target.closest('.slider-product__slide').querySelector('.slider-product__text');
			if (!moreText.classList.contains('_active')) {
				moreText.classList.add('_active');
			} else {
				moreText.classList.remove('_active');

			}
		}
	});

}