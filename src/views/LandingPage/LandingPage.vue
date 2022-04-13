<template>
	<div style="background-color: #ece9e5" class="">
		<Header />
		<HeroSection />
		<OurProducts />
		<WhySuprbiz />
		<FAQ />
		<Footer />
		<Gradient1 />
		<Gradient2 />
	</div>
</template>

<script>
import Header from "./Header.vue";
import HeroSection from "./HeroSection.vue";
import OurProducts from "./OurProducts.vue";
import WhySuprbiz from "./WhySuprbiz.vue";
import FAQ from "./FAQ.vue";
import Footer from "./Footer.vue";
import Gradient1 from "./Gradient1.vue";
import Gradient2 from "./Gradient2.vue";

export default {
	name: "LandingPage",
	components: {
		Header,
		HeroSection,
		OurProducts,
		WhySuprbiz,
		FAQ,
		Footer,
		Gradient1,
		Gradient2,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
