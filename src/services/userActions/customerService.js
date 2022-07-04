import { Web, Constants } from "@/components/util";

export default class CustomerService {
	// Customers
	static createCustomer(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Customers/create",
			credentials,
			successHandler,
			errorHandler
		);
	}

	static getAllCustomers(pageNumber, pageSize, type, successHandler, errorHandler) {
		Web.getCustomer(
			Constants.API_BASE +
				`/Customers/get-all?PageNumber=${pageNumber}&PageSize=${pageSize}&type=${type}`,
			successHandler,
			errorHandler
		);
	}

	static customerSearch(pageNumber, pageSize, searchText, type, successHandler, errorHandler) {
		Web.getCustomer(
			Constants.API_BASE +
				`/Customers/search?PageNumber=${pageNumber}&PageSize=${pageSize}&searchText=${searchText}&type=${type}`,
			successHandler,
			errorHandler
		);
	}

	static getAllCustomerRates(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Rates/exchange-rates`, successHandler, errorHandler);
	}

	//Rates

	static getSavingsRates(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Rates/savings-rates`, successHandler, errorHandler);
	}

	static postSavingsRates(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Rates/savings-rates",
			credentials,
			successHandler,
			errorHandler
		);
	}

	static saveRate(credentials, successHandler, errorHandler) {
		Web.postCustomer(Constants.API_BASE + "/Rates/save", credentials, successHandler, errorHandler);
	}

	static getCustomerRate(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Rates/get`, successHandler, errorHandler);
	}

	static getSuprbizRate(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Rates/master-rate`, successHandler, errorHandler);
	}

	static getAllSuprbizRates(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Rates/all-master-rate`, successHandler, errorHandler);
	}

	//Transactions

	static customerTransactionDeposit(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/customer/deposit",
			credentials,
			successHandler,
			errorHandler
		);
	}

	// static customerManualDeposit(credentials, successHandler, errorHandler) {

	// 	Web.postCustomer(
	// 		Constants.API_BASE + "/Transactions/manual-deposit",
	// 		credentials,
	// 		successHandler,
	// 		errorHandler
	// 	)
	// }

	// static customerManualDeposit(credentials, successHandler, errorHandler) {

	// 	Web.postCustomer(
	// 		Constants.API_BASE + "/Transactions/confirm-deposit",
	// 		credentials,
	// 		successHandler,
	// 		errorHandler
	// 	)
	// }

	static customerConfirmDeposit(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/customer/confirm-deposit",
			credentials,
			successHandler,
			errorHandler
		);
	}

	static customerTransactionWithdrawal(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/customer/withdrawal",
			credentials,
			successHandler,
			errorHandler
		);
	}

	static customerConfirmWithdrawal(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/customer/confirm-withdrawal",
			credentials,
			successHandler,
			errorHandler
		);
	}

	static getCustomerTransactions(
		PageNumber,
		PageSize,
		from,
		to,
		source,
		type,
		product,
		successHandler,
		errorHandler
	) {
		Web.getCustomer(
			Constants.API_BASE +
				`/Transactions/customer/transactions?PageNumber=${PageNumber}&PageSize=${PageSize}&From=${from}&To=${to}&source=${source}&type=${type}&product=${product}`,
			successHandler,
			errorHandler
		);
	}

	static searchCustomerTransactions(
		searchText,
		pageSize,
		pageNumber,
		successHandler,
		errorHandler
	) {
		Web.getCustomer(
			Constants.API_BASE +
				`/Transactions/merchant/search?PageNumber=${pageNumber}&PageSize=${pageSize}&searchText=${searchText}`,
			successHandler,
			errorHandler
		);
	}

	static getCustomerBanks(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Transactions/banks`, successHandler, errorHandler);
	}

	static getNaijaCustomerBeneficiary(bankDetails, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/resolve-nuban",
			bankDetails,
			successHandler,
			errorHandler
		);
	}

	static getCustomerNaijaBankAccountDetails(type, successHandler, errorHandler) {
		Web.getCustomer(
			Constants.API_BASE + `/Transactions/bank-account-details?type=${type}`,
			successHandler,
			errorHandler
		);
	}

	static getPrevCustomerBeneficiaries(pageNumber, pageSize, successHandler, errorHandler) {
		Web.getCustomer(
			Constants.API_BASE +
				`/Transactions/beneficiaries?pageNumber=${pageNumber}&pageSize=${pageSize}`,
			successHandler,
			errorHandler
		);
	}

	static naijaCustomerWithdrawal(bankDetails, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/withdraw-nigerian",
			bankDetails,
			successHandler,
			errorHandler
		);
	}

	static transactionCustomerWithdrawal(bankDetails, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/withdraw",
			bankDetails,
			successHandler,
			errorHandler
		);
	}

	static transactionDeposit(details, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/manual-deposit",
			details,
			successHandler,
			errorHandler
		);
	}

	static confirmDeposit(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/confirm-deposit",
			credentials,
			successHandler,
			errorHandler
		);
	}

	static shareRewards(credentials, successHandler, errorHandler) {
		Web.postCustomer(
			Constants.API_BASE + "/Transactions/share-reward",
			credentials,
			successHandler,
			errorHandler
		);
	}

	static getCharges(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + "/Transactions/get-charges", successHandler, errorHandler);
	}

	static getMerchantTransactions(
		pageNumber,
		pageSize,
		status,
		type,
		origin,
		source,
		from,
		to,
		successHandler,
		errorHandler
	) {
		Web.getCustomer(
			Constants.API_BASE +
				`/Transactions/merchant/transactions?PageNumber=${pageNumber}&PageSize=${pageSize}&Status=${status}&Type=${type}&Origin=${origin}&Source=${source}&From=${from}&To=${to}`,
			successHandler,
			errorHandler
		);
	}

	static searchMerchantTransactions(
		searchText,
		source,
		pageSize,
		pageNumber,
		successHandler,
		errorHandler
	) {
		Web.getCustomer(
			Constants.API_BASE +
				`/Transactions/merchant/search?searchText=${searchText}&source=${source}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
			successHandler,
			errorHandler
		);
	}

	static getAnyBalance(type, successHandler, errorHandler) {
		Web.getCustomer(
			Constants.API_BASE + `/Wallets/any-balance?type=${type}`,
			successHandler,
			errorHandler
		);
	}

	static localWalletBalance(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Wallets/local-balance`, successHandler, errorHandler);
	}

	static usdWalletBalance(successHandler, errorHandler) {
		Web.getCustomer(Constants.API_BASE + `/Wallets/usd-balance`, successHandler, errorHandler);
	}

	static getCustomerEarnings(period, type, successHandler, errorHandler) {
		Web.getCustomer(
			Constants.API_BASE + `/Wallets/get-earnings?period=${period}&type=${type}`,
			successHandler,
			errorHandler
		);
	}

	static customerPendingInvestment(type, successHandler, errorHandler) {
		Web.getCustomer(
			Constants.API_BASE + `/Wallets/pending-investment?type=${type}`,
			successHandler,
			errorHandler
		);
	}
}
