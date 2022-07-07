import React from "react";
import Header from "../../components/HeaderTop/HeaderTop";
import Projects from "../../components/Projects/Projects";
import Order from "../../components/Order/Order";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import PagePatternLayout from "../../layouts/PagePatternLayout";

const PortfolioPage = () => {
    return (
        <PagePatternLayout
            pageTitle={"Наши работы"}
            pageText={
                <>
                    <span>Посмотрите авторские работы нашей компании.</span>
                    <br />
                    Монтаж и обслуживании каминов и барбекю и печей
                </>
            }
            isDots={true}
            srcImage={"/images/portfolio-bg.png"}
        >
            <Projects />
            <Order />
            <Contacts margin={true} />
        </PagePatternLayout>
    );
};

export default PortfolioPage;
