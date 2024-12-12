import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Movie {
    Search:string;
    Title: string;
    Year: number;
    imdbID: string;
    Poster: string;

}

const API = "https://www.omdbapi.com/?apikey=19f4e811&";

const Home = () => {
    const [Mydata, setMydata] = useState<Movie[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API}`);
                const postData: Movie[] = res.data.Search || [];
                setMydata(postData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const SearchMovies = async (e: React.FormEvent) => {
        e.preventDefault();
        if (searchValue) {
            try {
                const res = await axios.get(`${API}s=${searchValue}`);
                const postdata: Movie[] = res.data.Search || [];
                setMydata(postdata);
            } catch (error) {
                console.error("Error fetching movies:", error);
                setMydata([]);
            }
        }
    };

    return (
        <>
            <div className="bg-gray-800 min-h-screen">
                <div className="flex justify-between">
                <div className="text-center text-white pt-5 ">
                    <h1 className="text-4xl pl-5 font-serif mb-4">Search The Movies </h1>
                </div>
                <div className=" pr-5 py-5">
                    <form className="w-full max-w-md" onSubmit={SearchMovies}>
                        <div className="relative">
                            <input
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search Movies"
                                value={searchValue}
                                name="search"
                                type="search"
                                
                                className="w-full p-4 pl-5 text-sm  outline-none text-white border-gray-300 rounded-lg bg-gray-700 focus:ring-blue-500 focus:border-blue-500 "
                            />
                            <button
                                type="submit"
                                className="absolute right-2.5 top-2.5 bg-blue-600 text-white  rounded-lg text-sm px-4 py-2 hover:bg-blue-700"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                </div>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {Mydata.length > 0 ? (
                            Mydata.map((post) => (
                                <Link to={"Moviesdetail/" + post.imdbID  } key={post.imdbID}>
                                    <div className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                                        <img
                                            className="w-full h-[350px] object-cover rounded-xl mb-4"
                                            src={post.Poster}
                                            alt={post.Title}
                                        />
                                        <h2 className="text-xl text-white truncate">{post.Title}</h2>
                                        <p className="text-sm text-red-400">{post.Year}</p>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-2 sm:col-span-3 md:col-span-4 flex mx-auto h-[300px]">
                                <h1 className="text-3xl text-white font-serif">Search a Movie</h1>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
};

export default Home;
