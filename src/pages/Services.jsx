import React from "react";
import { images } from "../assets/assets";
import Hero from "../component/Hero";
import HomeSection from "../component/HomeSection";
import "../styles/services.css";

const Services = () => {
  return (
    <main id="services">
      <Hero
        title={"What we do"}
        image={images.services}
        btn={"Book a service"}
        desc={
          "Vedgiland engages in the production of fruit and leafy vegetables, poultry and other products with controlled farming systems. The main concept of the business is to contribute to food security and nutrition through the production of Fruit and leafy vegetables, such as tomatoes, chilies, onions, production of herbs such as mint, oregano and so on. Also the production of carbohydrates such as grains and tubers like potatoes as well as the production of proteins such as poultry, rabbits and insects farming"
        }
        link={'/booking'}
      />
      <section className="overview">
        <h1>Vedgiland Farming design System</h1>
        <p>
          Vedgiland will engage in the production of fruit and leafy vegetables,
          poultry and other products with controlled farming systems. The main
          concept of the business is to contribute to food security and
          nutrition through the production of Fruit and leafy vegetables, such
          as tomatoes, chilis, onions, production of herbs such as mint, oregano
          etc. t he production of carbohydrates such as grains and tubers like
          potatoes as well as the production of proteins such as poultry,
          rabbits and insects farming. The overall plan of the business is to
          reduce costs through precision agriculture and integration of farming
          operations so that a waste fro m an operation will become an input in
          another. This will greatly re duce farming cost, reduce wastages,
          minimize the release of greenhouse gases and improve the quality of
          food. The business also has the plan to include value addition to
          minimize post-harvest losses and food losses and increase profits. It
          is understood that if integration is achieved and wastages are
          minimized, cost of production will greatly reduce therefore cost of
          food will also go down while still driving profit margin higher,
          consequently, facilitating economic access to food, a vital component
          of food security. The Farming Concept The project therefore includes
          the use of greenhouses and nethouses for the production of fruit and
          leafy vegetable, below is the descrip tion of every element of the
          project. Greenhouses, Nethouses. Diverse greenhouse technologies and
          methodologies will be employed towards the production of fruit
          vegetables such as T omatoes, Habaneros, Jalapenos, Capsicum, Kimchi,
          Strawberries. The g reenhouses will also be engaged in the production
          of her bs such as Oregano, mint, cabbages, lettuce and celery. The
          fruit and leafy vegetables produced from these greenhouses will be
          processed an d sold bulk. For example, the tomatoes produced will be
          processed into pastes and ketchup and be sold to bulk buyers who will
          eventually ret ail the product. Wastes will be converted to biogas and
          ethanol
        </p>
      </section>
      <HomeSection
        sectionImg={images.poultry}
        sectionTitle={"CFE Poultry Farming"}
        sectionText={`
            The controlled Farming System for the production of 
            broilers poultry comes with the advantages of reduction 
            \in loss through death, and reduction in spread of diseases, 
            improved Food Conversion Ratio (FCR), shorter production time
            and reduction in labor requirement. This enables efficient 
            healthy and national chicken production. The output 
            of the farm will be processed and frozen chicken. 
            The wastes such as droppings will be used in the 
            Biogas system for the production of Biogas and manure. 
            Some of the poultry droppings will be utilized in the 
            production of Black Flea Larvae. Waste blood and feathers 
            may be used for protein supplements in animal feed. 
            The poultry project will be a complete value chain 
            system from breeders to table chicken. 
        `}
      />
      <HomeSection
        sectionImg={images.insects}
        sectionBg={images.insects}
        sectionTitle={"Insect Farming"}
        sectionText={`
        •Supply of soya beans sometimes are short and there will be 
        need to find clean and healthy alternative to protein. Black 
        Flea Larvae from the Black Soldier fly is a good way of 
        utilizing the poultry waste to produce larvae, which matches 
        soybeans in protein supply to the poultry and other livestock. 
        The black flea larvae are used to partly or completely replace the protein in the poultry diet 
        and as such reduces wastages, reduces the release of greenhouse 
        gases and ultimately, reduces cost of production while increasing 
        the quality of meat produced. Biogas system. The biogas 
        system utilizes wastes from the farms and converts them into 
        biogas, other gases and manures. The main advantage of the 
        biogas system is the renewable energy supply and reduction 
        of farm waste. This will end up reducing the cost of production 
        further while improving the profitability margin of the Farm. 
        `}
      />
    </main>
  );
};

export default Services;
