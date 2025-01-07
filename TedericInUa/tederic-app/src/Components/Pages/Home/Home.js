import {Link} from "react-router-dom";

import styles from './Home.module.scss';

import Header from "../../Header/Header";
import Main from "../../Main/Main";
import LeftAsideColumn from "../../LeftAsideColumn/LeftAsideColumn";
import LeftMenuColumn from "../../LeftMenuColumn/LeftMenuColumn";
import LeftAsideTitleBlock from "../../LeftAsideTitleBlock/LeftAsideTitleBlock";
import Banner from "../../Banner/Banner";

import IMM_NewMachine from "../../../assets/img/imm/D160.jpg";


export default function Home() {
    return (
        <>
            <Header/>
            <Main>
                <LeftAsideColumn>
                    <LeftAsideTitleBlock text="Оборудование"/>
                    <LeftMenuColumn/>
                    <LeftAsideTitleBlock text="Статьи"/>
                </LeftAsideColumn>
                <article className={styles.home__contentHolder}>
                    <Banner/>
                    <section className={styles.home__introText}>
                        <article>
                            <h2 className={styles.regularText_title}>Добро пожаловать на сайт компании Тедерик
                            </h2>
                            <p>Более чем двадцать лет наша компания занимается производством изделий из пластмасс
                                методом литья под давлением.</p>
                            <p>Мы первые кто освоили производство бутылей из полиэтилентерефталата большого объма в
                                Украине</p>
                            <p>Благодаря накопленному опыту эксплуатации термопластавтоматов, мы стали представителем
                                компании Tederic в Украине</p>
                            <p>Специалисты нашей компании, оказывают полный спектр услуг по планированию производства,
                                подбору и доставки необходимого оборудования, а также запуск производства в эксплуатацию
                                и полное техническое гарантийное и после гарантийное обслуживание </p>
                        </article>
                    </section>
                    <section className={styles.newProductsIntro_section}>
                        <div className={styles.newProducts_pictureHolder}>
                            <img src={IMM_NewMachine} alt="D160"/>
                        </div>
                        <div className={styles.newProducts_textHolder}>
                            <span>Новый термопластавтома TEDERIC TRX-160D с сервомотором</span>
                            <span><span>Новинка</span> Снижение энергопотребления на 30%</span>
                                <Link className={styles.newProduct_link} to={}>
                                    Подробнее...
                                </Link>
                        </div>

                    </section>
                </article>
            </Main>

        </>
    );
}