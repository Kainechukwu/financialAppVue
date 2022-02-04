import { Web, Constants } from "@/components/util"

export default class backOfficeActions {



	static getBackOfficeDeposits(pageNumber, pageSize, successHandler, errorHandler) {
		Web.getBackOffice(Constants.API_BASE + '/Transactions/deposits?PageNumber=' + pageNumber + "&PageSize=" + pageSize, successHandler, errorHandler)

	}

	static approveDeposit(details, successHandler, errorHandler) {

		Web.postBackOffice(Constants.API_BASE + '/Transactions/approve-deposit', details, successHandler, errorHandler)
	}

	static getBackOfficeWithdrawals(pageNumber, pageSize, successHandler, errorHandler) {

		Web.getBackOffice(Constants.API_BASE + '/Transactions/withdrawals?PageNumber=' + pageNumber + "&PageSize=" + pageSize, successHandler, errorHandler)
	}




}