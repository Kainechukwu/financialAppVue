<template>
	<div class="hidden sm:block gradient3Bg absolute top-0 right-0"></div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.gradient3Bg {
	background-image: url("Gradient3.png");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 40%;
	height: 41.896rem;
	margin-bottom: 280px;

	// z-index: -1;
}
</style>
