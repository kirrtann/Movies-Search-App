// import React, { ReactNode, useContext, useEffect } from "react";
// const AppContext = React.createContext("");
// const API_URl = `https://www.omdbapi.com/?apikey=19f4e811&s=titanic`
// interface AppProviderProps {
//   children: ReactNode;
// }

// const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
//   const getMovies = async (url:string) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       // console.log(data);
//       // console.log(res);

//     } 
//     catch (error) {
//       console.log(error);

//     }
//   }
//   useEffect(() => {
//     getMovies(API_URl)
//   }, [])

//   return <AppContext.Provider value={""}>{children}</AppContext.Provider>;
// };


// const UseGlobalCOntext = () => {
//   return useContext(AppContext)

// }
// export { AppContext, AppProvider, UseGlobalCOntext };