import { Schema, model } from "mongoose";


const ReportScheme = new Schema(
    {
        weeks: {
            type: Array,
            required: true
        },
        userId:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const ReportModel = model("reports", ReportScheme);

export default ReportModel;