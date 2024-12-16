import styles from './LeftMenuColumn.module.scss';

import {Link} from "react-router-dom";

export default function LeftMenuColumn() {

    let equipmentLists = [
        {
            title: 'Термопластавтоматы',
            items: [
                {
                    name: 'Стандартная серия',
                    key: 'standard_series',
                    link: '/equipment/imm/standard_series'
                },
                {
                    name: 'PVC серия',
                    key: 'pvc_series',
                    link: '/equipment/imm/pvc_series'
                },
                {
                    name: 'PET серия',
                    key: 'pet-series',
                    link: '/equipment/imm/pet_series'
                },
                {
                    name: 'F серия',
                    key: 'f-series',
                    link: '/equipment/imm/f_series'
                },
            ]

        },
        {
            title: 'Вспомогательное оборудование',
            items: [
                {
                    name: 'Дробилки',
                    key: 'crushers',
                    link: '/equipment/additional_equipment/crushers'
                },
                {
                    name: 'Автозагрузчики',
                    key: 'loaders',
                    link: '/equipment/additional_equipment/loaders'
                },
                {
                    name: 'Бункеры-осушители',
                    key: 'dryers',
                    link: '/equipment/additional_equipment/dryers'
                },
                {
                    name: 'Миксеры',
                    key: 'mixers',
                    link: '/equipment/additional_equipment/mixers'
                },
                {
                    name: 'Контроллеры температуры',
                    key: 'temperature-controllers',
                    link: '/equipment/additional_equipment/temperature-controllers'
                },
            ],
        },
        {
            title: 'Холодильное оборудование',
            items: [
                {
                    name: 'Градирни',
                    key: 'cooling-towers',
                    link: '/equipment/cooling_equipment/cooling-towers'
                },
                {
                    name: 'Холодильники',
                    key: 'refrigerators',
                    link: '/equipment/cooling_equipment/refrigerators'
                },
            ],
        },
        {
            title: 'Услуги',
            items: [
                {
                    key: 'services',
                    link: '/services'
                }
            ],
        }
    ];


    return (
        <>
            {equipmentLists.map((insideListItems) => {
                return (
                    <>
                        <li className={styles.leftMenu__title}>{insideListItems.title}</li>
                        {insideListItems.items ? insideListItems.items.map((item) => {
                            return (

                                <Link className={styles.leftMenu__regularText} to={item.link} key={item.k}>
                                    {item.name}
                                </Link>

                            );
                        }) : []}
                    </>
                );
            })

            }

        </>
    );
}