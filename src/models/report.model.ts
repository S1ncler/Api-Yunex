import { Schema } from "mongoose";


const ReportScheme = new Schema(
    {
        weeksSchedule: {
            type: Array,
            required: true
        },
        daysSchedule: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)