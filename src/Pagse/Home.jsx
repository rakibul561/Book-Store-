import Books from "../component/Books";
import Card from "../component/Card";
import Hero from "../component/Hero"
const Home = () => {
    return (
        <div>
            <div className="flex flex-col, items-center, justify-center">
                <Hero></Hero>

            </div>
            <div>
                <Books></Books>
                <Card></Card>

            </div>
        </div>
    );
};

export default Home;