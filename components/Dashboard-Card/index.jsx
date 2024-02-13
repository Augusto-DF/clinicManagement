"use client"

import styles from './styles.module.css'

const DashboardCard = ({ id, pacient, date }) => {

    const cardPos = new Date(date).getDay()
    const style = { ['grid-column']: `${cardPos};` }

    return <div style={style} className={styles.card}>
        <p>Consultation id: {id}</p>
        <p>Name: {pacient.name}</p>
        <p>Pacient id: {pacient.id}</p>
    </div>
}

export default DashboardCard