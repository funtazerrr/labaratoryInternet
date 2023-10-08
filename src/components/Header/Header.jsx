import React from "react";
import styles from "./Header.module.sass";

export const Header = () => (

    <div className={styles.header}>
       <div className={styles.container}>
            <div className={styles.cap}>
                <div>
                    <img src="image/logo.png" alt="testLab"/>
                </div>
                <div className={styles.linkList}>
                    <div>
                        <a className={styles.link} href="/">Как это работает</a>
                    </div>
                    <div>
                        <a className={styles.link} href="/">3-й блок</a>
                    </div>
                    <div>
                        <a className={styles.link} href="/">Вопросы и ответы</a>
                    </div>
                    <div>
                        <a className={styles.link} href="/">Форма</a>
                    </div>
                </div>
            </div>
            <div className={styles.text}>
                <div className={styles.textHuge}>
                    Говорят, никогда не поздно <br/> сменить профессию 
                </div>
                <div className={styles.textLittle}>
                    Сделай круто тестовое задание и у тебя получится
                </div>
                <div className={styles.textButton}>
                    <button className={styles.textButtonInside}>Проще простого!</button>
                </div>
            </div>    
       </div>
    </div>

    

    
)