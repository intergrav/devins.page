const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = Array.from({ length: 50 }, () => ({
	x: Math.random() * canvas.width,
	y: Math.random() * canvas.height,
	size: Math.random() * 4,
	brightness: Math.random(),
	delta: Math.random() * 0.02 - 0.01,
	color: (() => {
		const roll = Math.random();
		return roll < 0.05
			? "rgba(0, 145, 255,"
			: roll < 0.1
			? "rgba(229, 72, 77,"
			: roll < 0.15
			? "rgba(26, 147, 56,"
			: "rgba(255, 255, 255,";
	})(),
}));

let fadeOpacity = 0;

const drawStars = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	stars.forEach((star) => {
		star.brightness = Math.min(Math.max(star.brightness + star.delta, 0), 1);
		if (star.brightness === 0 || star.brightness === 1) star.delta *= -1;
		ctx.fillStyle = `${star.color} ${Math.min(
			star.brightness * fadeOpacity,
			1
		)})`;
		ctx.fillRect(star.x, star.y, star.size, star.size);
	});
	fadeOpacity = Math.min(fadeOpacity + 0.02, 1);
	requestAnimationFrame(drawStars);
};

window.addEventListener("resize", () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	fadeOpacity = 0;
	stars.forEach((star) => {
		star.x = Math.random() * canvas.width;
		star.y = Math.random() * canvas.height;
	});
});

drawStars();
