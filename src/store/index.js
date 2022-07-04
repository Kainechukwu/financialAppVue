import { createStore } from "vuex";
import authToken from "./modules/authToken";
import customer from "./modules/customer";
import bankDetails from "./modules/bankDetails";
import deposit from "./modules/deposit";
import backOffice from "./modules/backOffice";
import createPersistedState from "vuex-persistedstate";

let timer;
let noticeTimer;
export default createStore({
	state: {
		addPlanModal: false,
		openSideBar: false,
		thisPlanModal: false,
		addProductModal: false,
		otpPhoneNumberModal: false,
		phoneNo: "",
		signupEmail: "",
		sidebarMenu: false,
		globaAlert: { show: false, text: "", type: "" },
		notification: { show: false, text: "", type: "" },
		bankDetailsPinModal: false,
		transactionSuccessfulModal: false,
		customSuccessTransactionModal: false,
		savingsSuccessTransactionModal: false,
		naijaTransactionSuccessfulModal: false,

		rerender: 0,
		confirmTransaction: false,
		rejectTransaction: false,
		transactionDetailsModal: false,
	},
	mutations: {
		setSavingsSuccessTransactionModal(state, payload) {
			state.savingsSuccessTransactionModal = payload;
		},
		setCustomSuccessTransactionModal(state, payload) {
			state.customSuccessTransactionModal = payload;
		},
		setNaijaTransactionSuccessfulModal(state, payload) {
			state.naijaTransactionSuccessfulModal = payload;
		},
		setOpenSideBar(state, payload) {
			state.openSideBar = payload;
		},
		setTransactionDetailsModal(state, payload) {
			state.transactionDetailsModal = payload;
		},
		setRejectTransaction(state, payload) {
			state.rejectTransaction = payload;
		},
		setConfirmTransaction(state, payload) {
			state.confirmTransaction = payload;
		},
		setAddPlanModal(state, payload) {
			state.addPlanModal = payload;
		},
		setThisPlanModal(state, payload) {
			state.thisPlanModal = payload;
		},
		setAddProductModal(state, payload) {
			state.addProductModal = payload;
		},
		setSignupEmail(state, payload) {
			state.signupEmail = payload;
		},
		setOtpPhoneNumberModal(state, payload) {
			state.otpPhoneNumberModal = payload;
		},
		setPhoneNo(state, payload) {
			state.phoneNo = payload;
		},
		setSidebarMenu(state, payload) {
			state.sidebarMenu = payload;
		},
		setGlobalAlert(state, payload) {
			// Clear previous timer
			clearTimeout(timer);
			// update alert state
			state.globaAlert = payload;
			// set new timer
			timer = setTimeout(() => {
				const alert = document.getElementById("globalAlert");
				state.globaAlert = { show: false, text: "", type: "" };
				if (payload.show === true) {
					alert.click();
				}
			}, 5000);
		},
		setNotification(state, payload) {
			// Clear previous timer
			clearTimeout(noticeTimer);
			// update alert state
			state.notification = payload;
			// set new noticeTimer
			noticeTimer = setTimeout(() => {
				const alert = document.getElementById("notification");
				state.notification = { show: false, text: "", type: "" };
				if (payload.show === true) {
					alert.click();
				}
			}, 5000);
		},
		setBankDetailsPinModal(state, payload) {
			state.bankDetailsPinModal = payload;
		},
		setTransactionSuccessfulModal(state, payload) {
			state.transactionSuccessfulModal = payload;
		},
		setRerender(state, payload) {
			state.rerender += payload;
		},
	},
	actions: {},
	modules: {
		authToken,
		bankDetails,
		deposit,
		backOffice,
		customer,
	},
	plugins: [createPersistedState()],
});
