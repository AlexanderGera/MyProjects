import Header from "../../Header/Header";
import Main from "../../Main/Main";
import LeftAsideColumn from "../../LeftAsideColumn/LeftAsideColumn";
import LeftMenuColumn from "../../LeftMenuColumn/LeftMenuColumn";
import LeftAsideTitleBlock from "../../LeftAsideTitleBlock/LeftAsideTitleBlock";

export default function Home() {
    return (
        <>
            <Header/>
            <Main>
                <LeftAsideColumn>
                    <LeftAsideTitleBlock text="Оборудование" />
                    <LeftMenuColumn/>
                    <LeftAsideTitleBlock text="Статьи" />
                </LeftAsideColumn>

            </Main>
        </>
    );
}