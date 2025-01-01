import Cover from "../components/shared/Cover";
import banner from '../assets/shop/banner2.jpg'
import DynamicTitle from "../components/shared/DynamicTitle";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import ChefRecomCard from "../components/shared/ChefRecomCard";

export default function ShopLayout() {
    const [tabIndex, setTabIndex] = useState(1);

    // loading data
    const [items] = useMenu()
    const todaysOffers = items.filter(item => item.category === "offered")
    const popularMenu = items.filter(item => item.category === "popular")
    const dessertsMenu = items.filter(item => item.category === "dessert")
    const pizzaMenu = items.filter(item => item.category === "pizza")
    const saladMenu = items.filter(item => item.category === "salad")
    const soupMenu = items.filter(item => item.category === "soup")
    const drinksMenu = items.filter(item => item.category === "drinks")
    return (
        <>
            <DynamicTitle title={'Our Shop | BistroBoss'} />
            <Cover image={banner} title={'OUR SHOP'} subTitle={'Would you like to try a dish?'} />
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} className={'max-w-screen-xl mx-auto my-7'}>

                <TabList>
                    <Tab>POPULAR</Tab>
                    <Tab>OFFERED</Tab>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                {/* popular */}
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            popularMenu.map(item => <ChefRecomCard key={item._id} title={item.name} image={item.image} descrip={item.recipe} />)
                        }
                    </div>
                </TabPanel>
                {/* offer */}
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            todaysOffers.map(item => <ChefRecomCard key={item._id} title={item.name} image={item.image} descrip={item.recipe} />)
                        }
                    </div>
                </TabPanel>
                {/* salad */}
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            saladMenu.map(item => <ChefRecomCard key={item._id} title={item.name} image={item.image} descrip={item.recipe} />)
                        }
                    </div>
                </TabPanel>
                {/* pizza */}
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            pizzaMenu.map(item => <ChefRecomCard key={item._id} title={item.name} image={item.image} descrip={item.recipe} />)
                        }
                    </div>
                </TabPanel>
                {/* soup */}
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            soupMenu.map(item => <ChefRecomCard key={item._id} title={item.name} image={item.image} descrip={item.recipe} />)
                        }
                    </div>
                </TabPanel>
                {/* dessert */}
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            dessertsMenu.map(item => <ChefRecomCard key={item._id} title={item.name} image={item.image} descrip={item.recipe} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {
                            drinksMenu.map(item => <ChefRecomCard key={item._id} title={item.name} image={item.image} descrip={item.recipe} />)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </>
    )
}
