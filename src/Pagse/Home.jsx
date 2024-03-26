import { useLoaderData } from "react-router-dom";
import Books from "../component/Books";
import Card from "../component/Card";
import Hero from "../component/Hero"
const Home = () => {
    const books = useLoaderData()
    // console.log(books);
    return (
        <div>
            <div className="flex flex-col, items-center, justify-center">
                <Hero></Hero>

            </div>
            <div>
                <Books books={books} ></Books>
                <Card></Card>


            </div>
        </div>
    );
};

export default Home;