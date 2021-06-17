window.onload = function () {
	const moreBtn = document.querySelectorAll('.btn-more');

	window.addEventListener('click', function (e) {
		const target = e.target;
		const sliderProductArrows = document.querySelectorAll('.slider-product__arrow');
		const tabItems = document.querySelectorAll('._tabs-item');

		const closeShowMoreBlock = () => {
			document.querySelectorAll('.slider-product__text')
				.forEach(item => item.classList.remove('_active'));
			document.querySelectorAll('.btn-more')
				.forEach(item => item.textContent = 'подробнее');
		}

		if (moreBtn.length > 0 && target.classList.contains('btn-more')) {
			const moreText = target.closest('.slider-product__slide')
				.querySelector('.slider-product__text');
			if (!moreText.classList.contains('_active')) {
				moreText.classList.add('_active');
				target.textContent = 'скрыть';
			} else {
				moreText.classList.remove('_active');
				target.textContent = 'подробнее';
			}
		}

		if (sliderProductArrows.length > 0 && target.classList.contains('slider-product__arrow')) {
			closeShowMoreBlock();
		}
		if (tabItems.length > 0 && target.closest('._tabs-item')) {
			closeShowMoreBlock();
		}
	});

}