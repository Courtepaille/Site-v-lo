	window.onload = function () {
		const colour_btn_els = document.querySelectorAll('.colours .colour');
		const taille_btn_els = document.querySelectorAll('.taille .size');
		const leftbox_el = document.querySelector('.leftbox');
		const image_el = document.querySelector('.leftbox .image');


		
		

		for (let i = 0; i < taille_btn_els.length; i++) {
			let btn = taille_btn_els[i];

			btn.addEventListener('click', function () {
				document.querySelector('.taille .size.selected').classList.remove('selected');
				this.classList.add('selected');
			});
		}	
		for (let i = 0; i < colour_btn_els.length; i++) {
			let btn = colour_btn_els[i];

			btn.addEventListener('click', function () {
				document.querySelector('.colours .colour.selected').classList.remove('selected');
				this.classList.add('selected');
				image_el.src = "img/render_bank/" + this.dataset.name;
			});
		}	

	}