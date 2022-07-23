import React, { useState } from 'react';
import styles from './EditTarifModal__card.module.css'
import { Button, InputNumber, Divider, Collapse } from 'antd';

// import { ReactComponent as VipCard } from '../icons/VipCard.svg';

import { ReactComponent as Add } from '../icons/Add.svg';
import { ReactComponent as Delete } from '../icons/Delete.svg';


const { Panel } = Collapse;

const periodName = { '1month': '1 месяц', '6month': '6 месяцев', '1year': 'Год' }

const numFormating = (num) => {
    if (num === undefined) return;
    return num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ");
}

const EditTarifModal__card = (props) => {

    const { tarifInfo, period } = props;

    const [price, setPrice] = useState({
        new: tarifInfo.price,
        old: tarifInfo.discount?.old,
        percent: tarifInfo.discount?.percent
    })

    const [isWithDiscount, setIsWithDiscount] = useState(Number(tarifInfo.discount !== null));

    const showDiscount = () => {
        setIsWithDiscount(1);
        price.old = 0;
        price.percent = 0;
    }

    const hideDiscount = () => {
        setIsWithDiscount(0);
        price.old = 0;
        price.percent = 0;
    }

    const inputHandler = (field, value) => {
        setPrice({...price, [field]: value})
    }


    return (
        <div className={styles.card}>
            <div className={styles.cardTop}>
                <p className={styles.period}>{periodName[period]}</p>
                {
                    isWithDiscount ?
                        <div className={styles.discountMonitor}>
                            <div className={styles.left}>
                                <p className={styles.discountMonitor_oldPrice}>{numFormating(price.old)} ₽</p>
                                <p className={styles.discountMonitor_newPrice}>{numFormating(price.new)} ₽</p>
                            </div>
                            <div className={styles.right}>
                                <p className={styles.discountMonitor_discount}>-{price.percent}%</p>
                            </div>

                        </div>
                        :
                        <InputNumber className={styles.topPrice} value={numFormating(price.new)} onChange={val => inputHandler('new', val)} controls={false} />

                }
            </div>

            <Divider className={styles.divider} />

            <Collapse className={styles.collapseWrapper} defaultActiveKey={isWithDiscount} activeKey={isWithDiscount}>
                <Panel className={styles.collapseItem} key="1">
                    <div className={styles.collapseInnerWrapper}>

                        <div className={styles.collapseInnerItem}>
                            <p className={styles.collapseInnerItem_title}>Старая цена</p>
                            <InputNumber className={styles.collapseInnerItem_input} value={numFormating(price.old)} onChange={val => inputHandler('old', val)} controls={false} />
                        </div>

                        <div className={styles.collapseInnerItem}>
                            <p className={styles.collapseInnerItem_title}>Новая цена</p>
                            <InputNumber className={styles.collapseInnerItem_input} value={numFormating(price.new)} onChange={val => inputHandler('new', val)} controls={false} />
                        </div>

                        <div className={styles.collapseInnerItem}>
                            <p className={styles.collapseInnerItem_title}>В процентах</p>
                            <InputNumber className={styles.collapseInnerItem_input} value={numFormating(price.percent)} onChange={val => inputHandler('percent', val)} controls={false} />
                        </div>

                    </div>
                </Panel>
            </Collapse>

            <div className={styles.cardFooter}>

                {
                    isWithDiscount
                        ?
                        <Button onClick={hideDiscount} icon={<Delete />} className={styles.cardFooterButton} type="link">Удалить скидку</Button>
                        :
                        <Button onClick={showDiscount} icon={<Add />} className={styles.cardFooterButton} type="link">Добавить скидку</Button>
                }
            </div>

        </div>
    )
}

export default EditTarifModal__card; 