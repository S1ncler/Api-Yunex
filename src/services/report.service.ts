import ReportModel from "../models/report.model";
import Report from "../models/reportClass.model";

const get_all_reports_service = async () => {
  const response = await ReportModel.find();
  return response ? response : "NOT_DATA";
};

const get_repotrs_by_user = async (userId: string) => {
  const response = await ReportModel.find({ userId: userId });
  return response ? response : "NOT_DATA";
};

const get_report_service = async (id: string) => {
  const response = await ReportModel.findOne({ _id: id });
  return response ? response : "REPORT_NOT_FOUND";
};

const post_report_service = async (report: Report) => {
  const response = await ReportModel.create(report);
  return response ? "REPORT_CREATED_OK" : "ERROR_CREATING_REPORT";
};

const put_report_service = async (id: string, report: Report) => {
  const response = await ReportModel.findOneAndUpdate({ _id: id }, report);
  return response ? "REPORT_UPDATED_OK" : "ERROR_UPDATING_REPORT";
};

const delete_report_service = async (id: string) => {
  const reponse = await ReportModel.findOneAndRemove({ _id: id });
  return reponse ? "REPORT_DELETED_OK" : "ERROR_DELETING_REPORT";
};

export {
  get_all_reports_service,
  get_report_service,
  post_report_service,
  put_report_service,
  delete_report_service,
  get_repotrs_by_user,
};
