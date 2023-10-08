import React from "react";
import styles from "./HowToWork.module.sass"

export const HowToWork = () => (
    <div>
        <div className={styles.container}>
            <div className={styles.tittle}>
                Как это работает
            </div>
            <div className={styles.kit}>
                <div className={styles.icons}>
                    <div>
                        <div>
                            <img src="image/cursor.svg" alt="12313"/>
                        </div>
                        <div className={styles.text}>
                            Прочитай задание внимательно
                        </div>
                        <div className={styles.lowerText}>
                            Думаю у тебя не займет это больше <br/> двух-трех минут
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div>
                        <div>
                            <img src="image/truck.svg" alt="12313"/>
                        </div>
                        <div className={styles.text}>
                            Изучи весь макет заранее
                        </div>
                        <div className={styles.lowerText}>
                            Подумай как это будет работать на <br/> разных разрешениях и при скролле
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div>
                        <div>
                            <img src="image/secure.svg" alt="12313"/>
                        </div>
                        <div className={styles.text}>
                            Сделай хорошо
                        </div>
                        <div className={styles.lowerText}>
                            Чтобы мы могли тебе доверить <br/> подобные задачи в будущем
                        </div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div>
                        <div>
                            <img src="image/money.svg" alt="12313"/>
                        </div>
                        <div className={styles.text}>
                            Получи предложение
                        </div>
                        <div className={styles.lowerText}>
                            Ну тут все просто, не я придумал <br/> правила, но думаю так и будет)))
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.third}>
            <div className={styles.textCool}>
                <div className={styles.cool}>
                    Круто, ты дошел до третьего блока
                </div>
                <div className={styles.coolText}>
                63% опрошенных пользовались кредитами из-за того, что не могли покрыть <br/> непредвиденные расходы свыше 15 000 ₽. <br/> <br/> Доступ к заработанным деньгам помогает отказаться от    кредитов и <br/> экономить деньги на процентах и штрафах.
                </div>
            </div>
            <div className={styles.man}>
                <img src="image/man.jpg" alt="Мужчина)" width="592" height="448"/>
            </div>
        </div>
    </div>

    


)