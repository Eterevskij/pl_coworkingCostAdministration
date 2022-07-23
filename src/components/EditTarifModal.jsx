import React, { useState } from 'react';
import styles from './EditTarifModal.module.css'
import { Button, Modal } from 'antd';
import Card from './EditTarifModal__card';



const EditTarifModal = (props) => {

    const { tarifInfo } = props;

    return (
        <Modal className={styles.modal} visible={false} footer={<Footer />}>
            <p className={styles.title}>Тариф <span className={styles.accent}>«СТАНДАРТ»</span></p>

            <div className={styles.cardsWrapper}>

                <Card period={'1month'} tarifInfo={tarifInfo['1month']} />
                <Card period={'6month'} tarifInfo={tarifInfo['6month']} />
                <Card period={'1year'} tarifInfo={tarifInfo['1year']} />


            </div>

        </Modal>

    )
}

const Footer = () => {
    return (
        <Button disabled={false} className={styles.saveButton} block>Сохранить изменения</Button>
    )
}

export default EditTarifModal; 