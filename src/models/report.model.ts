import { Schema } from "mongoose";


const ReportScheme = new Schema(
    [
        {
          semana: 'Semana 1',
          horarios: {
            fechas: {inicio: '01-07-2023', fin: '07-07-2023'},
            horarioGeneralSemana: { valor: '', disabled: false },
            horarioGeneralFinSemana: { valor: '', disabled: false },
            alm: false,
            trans: false,
            cond: false,
            horariosDiarios: [
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
            ],
          },
        },
        {
          semana: 'Semana 2',
          horarios: {
            fechas: {inicio: '08-07-2023', fin: '14-07-2023'},
            horarioGeneralSemana: { valor: '', disabled: false },
            horarioGeneralFinSemana: { valor: '', disabled: false },
            alm: false,
            trans: false,
            cond: false,
            horariosDiarios: [
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
            ],
          },
        },
        {
          semana: 'Semana 3',
          horarios: {
            fechas: {inicio: '15-07-2023', fin: '21-07-2023'},
            horarioGeneralSemana: { valor: '', disabled: false },
            horarioGeneralFinSemana: { valor: '', disabled: false },
            alm: false,
            trans: false,
            cond: false,
            horariosDiarios: [
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
            ],
          },
        },
        {
          semana: 'Semana 4',
          horarios: {
            fechas: {inicio: '22-07-2023', fin: '28-07-2023'},
            horarioGeneralSemana: { valor: '', disabled: false },
            horarioGeneralFinSemana: { valor: '', disabled: false },
            alm: false,
            trans: false,
            cond: false,
            horariosDiarios: [
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
              { inicio: '', fin: '', alm: false, trans: false, cond: false },
            ],
          },
        },
        {
            semana: 'Semana 5',
            horarios: {
              fechas: {inicio: '22-07-2023', fin: '28-07-2023'},
              horarioGeneralSemana: { valor: '', disabled: false },
              horarioGeneralFinSemana: { valor: '', disabled: false },
              alm: false,
              trans: false,
              cond: false,
              horariosDiarios: [
                { inicio: '', fin: '', alm: false, trans: false, cond: false },
                { inicio: '', fin: '', alm: false, trans: false, cond: false },
                { inicio: '', fin: '', alm: false, trans: false, cond: false },
                { inicio: '', fin: '', alm: false, trans: false, cond: false },
                { inicio: '', fin: '', alm: false, trans: false, cond: false },
                { inicio: '', fin: '', alm: false, trans: false, cond: false },
                { inicio: '', fin: '', alm: false, trans: false, cond: false },
              ],
            },
          },
      ]
)