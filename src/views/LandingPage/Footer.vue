<template>
	<div style="background-color: #1e2235" class="z-10 text-white w-full">
		<div class="mx-auto mt-32 px-4 md:px-12 lg:px-12 pt-8 pb-6" style="max-width: 55rem">
			<div class="w-full grid grid-cols-7">
				<div class="col-span-6 sm:col-span-2 flex flex-col items-start">
					<span class="footerHeader fw-700 brFirmaReg mb-5">Suprbiz</span>
					<span class="brFirmaReg fw-400 fs-16 text-white"
						>Building DeFi and FinTech infrastructure for businesses</span
					>
				</div>
				<div
					class="mt-5 sm:mt-3 footerText3 col-span-7 sm:col-span-5 sm:col-start-3 flex flex-row sm:justify-end"
				>
					<div class="sm:mr-8 fs-15 brFirmaReg fw-400 flex flex-col sm:items-end">
						<router-link to="#" class="underline my-px mr-5 sm:mr-0">Growth Earnings</router-link>
						<router-link to="#" class="underline my-px mr-5 sm:mr-0">Treasury</router-link>
						<router-link to="#" class="underline my-px mr-5 sm:mr-0">About</router-link>
						<router-link to="#" class="underline my-px mr-5 sm:mr-0">Blog</router-link>
						<router-link to="#" class="underline my-px sm:mr-0">Careers</router-link>
					</div>
					<div class="fs-15 brFirmaReg fw-400 flex flex-col sm:items-end">
						<!-- <router-link to="#" class="underline block sm:hidden my-px mr-5 sm:mr-0"
							>Careers</router-link
						> -->

						<router-link to="#" class="underline my-px mr-5 sm:mr-0">Contact Us</router-link>
						<router-link to="#" class="underline my-px mr-5 sm:mr-0">Privacy Policy</router-link>
						<router-link to="#" class="underline my-px mr-5 sm:mr-0">Terms of Service</router-link>
					</div>
					<!-- <div class="fs-15 brFirmaReg fw-400 col-start-7 flex flex-row sm:flex-col items-end">
						<router-link to="#" class="underline block sm:hidden my-px mr-5 sm:mr-0"
							>Terms of Service</router-link
						>
					</div> -->
				</div>
			</div>
			<div class="pt-16 flex justify-center sm:justify-start">
				<span class="fs-14 footerText2 brFirmaReg fw-400"
					>© 2022 Suprbiz · All rights reserved ·
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Footer",
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
