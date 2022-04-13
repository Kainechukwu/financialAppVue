<template>
	<div style="background-color: #ece9e5" class="">
		<Header />
		<HeroSection />
		<OurProducts />
		<WhySuprbiz />
		<FAQ />
		<Footer />
	</div>
</template>

<script>
import Header from "./Header.vue";
import HeroSection from "./HeroSection.vue";
import OurProducts from "./OurProducts.vue";
import WhySuprbiz from "./WhySuprbiz.vue";
import FAQ from "./FAQ.vue";
import Footer from "./Footer.vue";

export default {
	name: "LandingPage",
	components: {
		Header,
		HeroSection,
		OurProducts,
		WhySuprbiz,
		FAQ,
		Footer,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
