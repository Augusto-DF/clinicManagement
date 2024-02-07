"use client"

import DashboardCard from "../Dashboard-Card"
import { WEEK_DAYS } from "./constants"
import styles from './styles.module.css'

const MOCKED_CONSULTATION_LIST = [
    { id: 7, pacient: { id: 32, name: "Fenrir" }, date: "2024-02-05T14:00:00" },
    { id: 1, pacient: { id: 23, name: "Jack" }, date: "2024-02-06T14:00:00" },
    { id: 3, pacient: { id: 4, name: "Nero" }, date: "2024-02-06T15:00:00" },
    { id: 5, pacient: { id: 66, name: "Kicks" }, date: "2024-02-06T16:00:00" },
    { id: 4, pacient: { id: 5, name: "Blau" }, date: "2024-02-07T10:00:00" },
    { id: 2, pacient: { id: 2, name: "Andrew" }, date: "2024-02-08T10:00:00" },
    { id: 6, pacient: { id: 74, name: "Anão" }, date: "2024-02-08T12:00:00" },
    { id: 8, pacient: { id: 82, name: "Tap tap" }, date: "2024-02-09T10:00:00" }
]



const Dashboard = ({ consultationList = MOCKED_CONSULTATION_LIST }) => {

    return (
        <div className={`${styles.scheduleWrapper}`}>
            {WEEK_DAYS.map(day => <div key={day.label}>{day.abbreviation}</div>)}
            {consultationList.map(data => <DashboardCard key={data.id} {...data} />)}
        </div>
    )
}

export default Dashboard 