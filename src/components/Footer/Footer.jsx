import React from "react";
import useEmblaCarousel from 'embla-carousel-react'
import styles from "./Footer.module.sass";

export const Footer = () => {

const [emblaRef] = useEmblaCarousel()

    return (
    <div>
        <div className={styles.wrapper}>
            <div className={styles.reviews}>
                Отзывы
            </div>
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.container}>

                    <div className={styles.arrowLeft}>
                        <div className={styles.arrowInside}>
                            <img src="image/leftArrow.svg" alt=""/>
                        </div>
                    </div>

                    <div className={styles.slide}>
                    <div>
                        <div className={styles.user}>
                            <div><img className={styles.avatar} src="image/userOne.jpg" alt=""/></div>
                            <div>
                                <div className={styles.name}>Константинов Михаил <br/> Павлович</div>
                                <div className={styles.city}>Санкт-Петербург</div>
                            </div>
                        </div>
                            <div className={styles.text}>Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы</div>
                            </div>
                    </div>

                    <div className={styles.slide}>
                    <div>
                        <div className={styles.user}>
                            <div><img className={styles.avatar} src="image/userSecond.jpg" alt=""/></div>
                            <div>
                                <div className={styles.name}>Иван Иванов</div>
                                <div className={styles.city}>Санкт-Петербург</div>
                            </div>
                        </div>
                            <div className={styles.text}>Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.</div>
                            </div>
                    </div>

                    <div className={styles.slide}>
                    <div className={styles.collumn}>
                        <div className={styles.user}>
                            <div><img className={styles.avatar} src="image/userThird.jpg" alt=""/></div>
                            <div>
                                <div className={styles.name}>Артем Корнилов</div>
                                <div className={styles.city}>Самара</div>
                            </div>
                        </div>
                            <div className={styles.text}>Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.</div>
                        </div>
                    </div>

                    <div className={styles.arrowRight}>
                        <div className={styles.arrowInside}>
                            <img src="image/rightArrow.svg" alt=""/>
                        </div>
                    </div>

                </div>

                <div className={styles.balls}>
                    <div className={styles.ballsInside}>
                        <img src="image/balls.svg" alt=""/>
                    </div>
                </div>


            </div> 
            
        </div>
            <div className={styles.textInside}>
                <div className={styles.textFooter}>© 2021 Лаборатория интернет</div>
            </div>
    </div>
      

    )



}