<template>
	<div class="col-span-1">
		<div class="flex h-full flex-col bg-white br-10 px-4">
			<div class="flex flex-col justify-between my-4 h-7">
				<div class="flex mb-2">
					<span class="fw-400 fs-12 tx-666666 uppercase"
						>Your total balance in <span>USD</span></span
					>
				</div>

				<div class="flex">
					<span class="fw-400 fs-24 blacktext mr-3">${{ totalBalance }}</span>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
					>
						<rect width="24" height="24" fill="url(#pattern0)" />
						<defs>
							<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
								<use xlink:href="#image0_2163_12364" transform="scale(0.00666667)" />
							</pattern>
							<image
								id="image0_2163_12364"
								width="150"
								height="150"
								xlink:href="data:image/png;base64,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"
							/>
						</defs>
					</svg>
				</div>
				<span class="fw-400 fs-14 tx-666666">Available Balance: <span>$216,000.00</span></span>

				<!-- <slot></slot> -->
			</div>
		</div>
	</div>
</template>

<script>
import UserInfo from "@/services/userInfo/userInfo.js";
import { useStore } from "vuex";
// import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { Log, Util, Constants } from "@/components/util";
export default {
	name: "TotalBalancePlate",
	setup() {
		onMounted(() => {
			// Log.info("rerender:" + JSON.stringify(rerender));
			getBalance();
		});

		const store = useStore();
		const totalBalance = ref("0.00");
		const customerId = store.getters["authToken/userId"];
		const getBalance = () => {
			UserInfo.accountBalance(
				customerId,
				(response) => {
					Log.info(response);
					const balance = response.data.data;
					const total = balance.principalBalance + balance.interestBalance;
					totalBalance.value = Util.currencyFormatter(total, Constants.currencyFormat);
					// interestBalance.value = Util.currencyFormatter(
					// 	balance.interestBalance,
					// 	Constants.currencyFormat
					// );
				},
				(error) => {
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
					Log.error(error);
				}
			);
		};

		return { totalBalance };
	},
};
</script>

<style lang="scss" scoped></style>
