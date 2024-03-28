import Books from "../components/Books/Books-slider";
import Services from "../components/Services/Services";
import Slider from "../components/slider/SliderContainer";
import BookStoreProvider from "../context/BookStoreProvider";

function Home (){

    return <div>
        <BookStoreProvider >
                <Slider />
                <Services />
                <Books title='Most Gifted'  />
                <Books title='Wished Books' />
                <Books title='Top Rated' />
        </BookStoreProvider>
            </div>
}
export default Home;