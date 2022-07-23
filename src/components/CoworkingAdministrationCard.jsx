import React from 'react';
import styles from './CoworkingAdministrationCard.module.css'
import { Button } from 'antd';

import { ReactComponent as StandartCard } from '../icons/StandartCard.svg';
import { ReactComponent as VipCard } from '../icons/VipCard.svg';

import { ReactComponent as Edit } from '../icons/Edit.svg';

const numFormating = (num) => {
    if (num === undefined) return;
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
}


const CoworkingAdministrationCard = (props) => {

    const { vip, tarifInfo } = props;

    return (
        <div className={`${styles.card} ${vip ? styles.vip : ''}`}>

            <div className={styles.header}>
                <p className={styles.headerSubtitle}>Тариф</p>
                <p className={styles.headerTitle}>«{vip ? 'VIP' : 'СТАНДАРТ'}»</p>

                {
                    vip ?
                        <VipCard className={styles.headerIcon} />
                        :
                        <StandartCard className={styles.headerIcon} />

                }
            </div>

            <div className={styles.table}>
                <div className={styles.tableItem}>
                    <p className={styles.period}>1 месяц</p>
                    <div className={styles.tableRight}>
                        {tarifInfo['1month'].discount && <p className={styles.discount}><span className={styles.word}>Скидка</span> -{tarifInfo['1month'].discount.percent}%</p>}
                        <p className={styles.price}>{numFormating(tarifInfo['1month'].price)} ₽</p>
                    </div>
                </div>
                <div className={styles.tableItem}>
                    <p className={styles.period}>6 месяцев</p>
                    <div className={styles.tableRight}>
                        {tarifInfo['6month'].discount && <p className={styles.discount}><span className={styles.word}>Скидка</span> -{tarifInfo['6month'].discount.percent}%</p>}
                        <p className={styles.price}>{numFormating(tarifInfo['6month'].price)} ₽</p>
                    </div>
                </div>
                <div className={styles.tableItem}>
                    <p className={styles.period}>Год</p>
                    <div className={styles.tableRight}>
                        {tarifInfo['1year'].discount && <p className={styles.discount}><span className={styles.word}>Скидка</span> -{tarifInfo['1year'].discount.percent}%</p>}
                        <p className={styles.price}>{numFormating(tarifInfo['1year'].price)} ₽</p>
                    </div>
                </div>


            </div>

            <Button className={styles.button} icon={<Edit />}>Редактировать</Button>

        </div>

    )
}

export default CoworkingAdministrationCard; 