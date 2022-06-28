const links = document.querySelectorAll('[data-target]')
const contents = document.querySelectorAll('[data-content]')

links.forEach(link => {
	link.addEventListener('click', () => {
		const target = document.querySelector(link.dataset.target)
		contents.forEach(content => {
			content.classList.remove('active')
		})
		links.forEach(link => {
			link.classList.remove('active')
		})
		link.classList.add('active')
		target.classList.add('active')
	})
})