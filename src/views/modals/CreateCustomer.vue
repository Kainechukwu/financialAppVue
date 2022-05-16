<template>
	<transition name="fadeIn">
		<div v-if="isModalOpen" class="fixed z-50 inset-0 overflow-hidden modal-blur">
			<div
				class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
			>
				<div class="fixed inset-0 transition-opacity">
					<div @click="close" class="absolute inset-0 bg-gray-800 bg-opacity-75 modal-blur"></div>
				</div>

				<!-- This element is to trick the browser into centering the modal contents. -->
				<span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
				<section
					class="main inline-block bg-white align-bottom br-5 shadow-xs text-left overflow-hidden transform transition-all max-w-lg mx-auto sm:my-8 sm:align-middle sm:w-full"
				>
					<div class="w-full h-full">
						<div class="flex flex-col h-full pb-6">
							<!-- <div class="flex-1 h-full flex flex-col"> -->
							<div
								style="border-bottom: 1px solid #efefef"
								class="px-8 flex items-center justify-between"
							>
								<div class="my-4 flex justify-between w-full">
									<h2 class="blacktext fw-600 fs-16">Create Customer</h2>
									<div @click="close" class="cursor-pointer">
										<svg
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle cx="12" cy="12" r="12" fill="#E3EEFD" />
											<path
												d="M15.5 8.5L8.5 15.5"
												stroke="#2B7EE4"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
											<path
												d="M8.5 8.5L15.5 15.5"
												stroke="#2B7EE4"
												stroke-linecap="round"
												stroke-linejoin="round"
											/>
										</svg>
									</div>
								</div>
							</div>
							<div style="max-height: 500px" class="flex flex-col py-6 px-8">
								<!-- <StaticBusinessDetails
				v-if="
					businessDetailsData &&
					businessDetailsData.companyName &&
					businessDetailsData.companyName !== null &&
					businessDetailsData.companyName.length > 0
				"
				:details="businessDetailsData"
			/> -->
								<Form
									@submit="saveDetails"
									:validation-schema="schema"
									v-slot="{ errors }"
									class="flex flex-col"
								>
									<div class="grid grid-cols-2 gap-4">
										<div class="mb-6 col-span-1">
											<label for="First Name" class="fs-14 fw-400 tx-666666">First Name</label>
											<Field
												id="First Name"
												name="firstName"
												type="text"
												autocomplete="off"
												required=""
												class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
												:class="{ 'is-invalid': errors.firstName }"
											/>
											<div class="invalid-feedback text-red-500">{{ errors.firstName }}</div>
										</div>

										<div class="mb-6 col-span-1">
											<label for="Last Name" class="fs-14 tx-666666 fw-600">Last Name</label>
											<div class="relative">
												<Field
													id="lastName"
													name="lastName"
													type="text"
													autocomplete="off"
													required=""
													placeholder=""
													class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
													:class="{ 'is-invalid': errors.lastName }"
												/>
												<div class="invalid-feedback text-red-500">
													{{ errors.lastName }}
												</div>
											</div>
										</div>
									</div>
									<div class="grid grid-cols-2 gap-4 mb-6">
										<div class="col-span-1">
											<label for="Email Address" class="fs-14 fw-400 tx-666666"
												>Email Address</label
											>
											<Field
												id="Email Address"
												name="email"
												type="text"
												autocomplete="off"
												required=""
												class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
												:class="{ 'is-invalid': errors.email }"
											/>
											<div class="invalid-feedback text-red-500">{{ errors.email }}</div>
										</div>

										<!-- <div class="mb-6 col-span-1">
											<label for="Fiat Currency" class="fs-14 tx-666666 fw-600"
												>Fiat Currency</label
											>
											<div class="relative">
												<Field
													id="fiat"
													name="fiat"
													type="text"
													autocomplete="off"
													required=""
													placeholder=""
													class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
													:class="{ 'is-invalid': errors.fiat }"
												/>
												<div class="invalid-feedback text-red-500">
													{{ errors.fiat }}
												</div>
											</div>
										</div> -->

										<div class="col-span-1">
											<Listbox as="div" v-model="selected">
												<div class="flex items-center">
													<ListboxLabel class="block fs-14 tx-666666 fw-600">
														Fiat Currency
													</ListboxLabel>
													<p class="text-red-500 fs-24 fw-400 h-6 ml-2">*</p>
												</div>
												<div class="mt-1 relative">
													<ListboxButton
														class="bg-white h-12 mt-1 relative w-full listBoxButton rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm"
													>
														<span class="block truncate">{{ selected.currency }}</span>
														<span
															class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
														>
															<div class="h-5 w-5 text-gray-400">
																<svg
																	width="12"
																	height="6"
																	viewBox="0 0 12 6"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M1 1L5.73 5.2L10.46 1"
																		stroke="#BFBFBF"
																		stroke-width="1.5"
																		stroke-linecap="round"
																		stroke-linejoin="round"
																	/>
																</svg>
															</div>
														</span>
													</ListboxButton>

													<transition
														leave-active-class="transition ease-in duration-100"
														leave-from-class="opacity-100"
														leave-to-class="opacity-0"
													>
														<ListboxOptions
															class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
														>
															<ListboxOption
																as="template"
																v-for="currency in currencies"
																:key="currency.id"
																:value="currency"
																v-slot="{ active, selected }"
															>
																<li
																	:class="[
																		active ? 'blacktext bg-gray-100' : 'blacktext',
																		'cursor-default select-none relative py-2 pl-3 pr-9',
																	]"
																>
																	<span
																		:class="[
																			selected ? 'font-semibold' : 'font-normal',
																			'block truncate',
																		]"
																	>
																		{{ currency.currency }}
																	</span>

																	<span
																		v-if="selected"
																		:class="[
																			active ? 'text-white' : 'text-indigo-600',
																			'absolute inset-y-0 right-0 flex items-center pr-4',
																		]"
																	>
																	</span>
																</li>
															</ListboxOption>
														</ListboxOptions>
													</transition>
												</div>
											</Listbox>
										</div>
									</div>

									<div class="grid grid-cols-2 gap-4">
										<div class="mb-6 col-span-2">
											<label for="User Rate" class="fs-14 fw-400 tx-666666"
												>User Rate (Optional)</label
											>
											<Field
												id="User Rate"
												name="rate"
												type="text"
												autocomplete="off"
												required=""
												class="mt-1.5 br-5 h-11 appearance-none relative block w-full px-3 py-2 border border-gray-200 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
												:class="{ 'is-invalid': errors.rate }"
											/>
											<div class="invalid-feedback text-red-500">{{ errors.rate }}</div>
										</div>
									</div>

									<!-- ---------------- -->

									<!-- ----------  -->

									<div class="flex justify-center">
										<button
											type="submit"
											:disabled="loading"
											class="cursor-pointer bluebtn fs-14 fw-500 w-2/4 h-12 br-5 flex items-center justify-center"
										>
											<div class="flex items-center justify-center">
												<span class="text-white">Create Customers</span>
												<div v-if="loading" class="h-4 w-4 ml-4 rounded-md block">
													<div class="roundLoader opacity-50 mx-auto"></div>
												</div>
											</div>
										</button>
									</div>
								</Form>
							</div>
							<!-- </div> -->
						</div>
					</div>
				</section>
			</div>
		</div>
	</transition>
</template>

<script>
import { onMounted, ref, toRef } from "vue";
import CustomerService from "@/services/userActions/customerService.js";
// import StaticBusinessDetails from "./StaticBusinessDetails.vue";
import { Log, Util } from "@/components/util";
// import { useStore } from "vuex";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
// import { useRouter } from "vue-router";
// import GreenCheckedSvg from "@/components/svg/GreenCheckedSvg.vue";
import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/vue";
export default {
	name: "CreateCustomer",
	props: {
		open: Boolean,
	},
	components: {
		// GreenCheckedSvg,
		Form,
		Field,
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions,
		// StaticBusinessDetails,
		// CheckIcon,
		// SelectorIcon,
	},
	setup(props, context) {
		onMounted(() => {
			getAllCustomerRates();
			getSuprbizRate();
		});

		// const store = useStore();
		const isModalOpen = toRef(props, "open");
		const suprbizRateLoading = ref(false);
		const suprbizRate = ref(null);
		const loading = ref(false);

		const currencies = ref([]);
		const selected = ref({});

		// const userId = store.getters["authToken/userId"];

		const close = () => {
			context.emit("close");
		};

		const schema = Yup.object().shape({
			firstName: Yup.string().required("First Name is required"),
			lastName: Yup.string().required("Last Name is required"),
			email: Yup.string().required("Email Address is required"),
			// fiat: Yup.string().required("Fiat is required"),
			rate: Yup.string().test(
				"max",
				`NGN rate must be less than or equal to suprbiz rate`,
				(val) => val <= suprbizRate.value || val === undefined
			),
		});

		const prepareCustomerDetails = (values) => {
			const obj = {
				firstName: values.firstName,
				lastName: values.lastName,
				fiatCurrency: selected.value.currency,
				emailAddress: values.email,
				rate: values.rate,
			};
			return obj;
		};

		const getAllCustomerRates = () => {
			CustomerService.getAllCustomerRates(
				(response) => {
					Log.info("All customer Rates: " + JSON.stringify(response));
					currencies.value = response.data.data;
					selected.value = currencies.value.length > 0 ? currencies.value[3] : {};
				},
				(error) => {
					Log.error(error);
				}
			);
		};

		const getSuprbizRate = () => {
			suprbizRateLoading.value = true;
			CustomerService.getSuprbizRate(
				(response) => {
					suprbizRateLoading.value = false;
					Log.info(response);
					suprbizRate.value = response.data.data;
				},
				(error) => {
					suprbizRateLoading.value = false;
					Log.error(error);
				}
			);
		};

		const saveDetails = (values) => {
			Log.info("values");
			Log.info(values);
			loading.value = true;
			Log.info(prepareCustomerDetails(values));
			CustomerService.createCustomer(
				prepareCustomerDetails(values),
				(response) => {
					loading.value = false;
					close();
					Util.handleGlobalAlert(true, "success", response.data.message);
				},
				(error) => {
					loading.value = false;
					close();
					Util.handleGlobalAlert(true, "failed", error.response.data.Message);
				}
			);
			// loading.value = false;
		};

		return {
			isModalOpen,
			close,

			loading,

			saveDetails,
			currencies,
			selected,

			schema,
			// clientKey,
		};
	},
};
</script>

<style lang="scss" scoped></style>
