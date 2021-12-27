import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import LandingSection from "../../Components/LandingSection/LandingSection";
import StrengthsSection from "../../Components/StrengthsSection/StrengthsSection";
import AboutUs from "../../Components/AboutUs/AboutUs";
import ServicesMainPage from "../../Components/ServicesMainPage/ServicesMainPage";
import ClientsCarousel from "../../Components/ClientsCarousel/ClientsCarousel";
import StatisticsSection from "../../Components/StatisticsSection/StatisticsSection";
import Footer from "../../Components/Footer/Footer";

import "./MainPage.css";
import ContactSection from "../../Components/ContactSection/ContactSection";

export default function MainPage() {
    return (
        <div className="main-page">
            <LandingSection></LandingSection>
            <AboutUs></AboutUs>
            <StrengthsSection></StrengthsSection>
            <ServicesMainPage></ServicesMainPage>
            <ClientsCarousel></ClientsCarousel>
            <StatisticsSection></StatisticsSection>
            <ContactSection></ContactSection>
            <Footer></Footer>
        </div>
    );
}
