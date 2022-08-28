import { Route, Routes } from "react-router-dom"
import { Home } from "../components/Home/Home"
import { Account } from "./Account/Account"
import { Security } from "./Account/Security/Security"
import { Settings } from "./Account/Settings/Settings"
import { AddAuthor } from "./AddAuthor/AddAuthor"
import { AddBook } from "./AddBook/AddBook"
import { Book } from "./Book/Book"
import { BookJadid } from "./Book/BookJadid/BookJadid"
import { BookMustaqillik } from "./Book/BookMustaqillik/BookMustaqillik"
import { BookSovet } from "./Book/BookSovet/BookSovet"
import { BookTemuriy } from "./Book/BookTemuriy/BookTemuriy"
import { SingleJadid } from "./Book/SingleJadid/SingleJadid"
import { SingleMustaqillik } from "./Book/SingleMustaqillik/SingleMustaqillik"
import { SingleSovet } from "./Book/SingleSovet/SingleSovet"
import { SingleTemuriy } from "./Book/SingleTemuriy/SingleTemuriy"
import { Jadid } from "./Jadid/Jadid"
import { Login } from "./Login/Login"
import { Mustaqillik } from "./Mustaqillik/Mustaqillik"
import { Register } from "./Register/Register"
import { SinglePageJadid } from "./SinglePageJadid/SinglePageJadid"
import { SinglePageMustaqillik } from "./SinglePageMustaqillik/SinglePageMustaqillik"
import { SinglePageSovet } from "./SinglePageSovet/SinglePageSovet"
import { SinglePageTemuriy } from "./SinglePageTemuriy/SinglePageTemuriy"
import { Sovet } from "./Sovet/Sovet"
import { Temuriy } from "./Temuriy/Temuriy"
import { ThemeProvider } from "../context/ThemeContext"

export const Private = () => {
    return (
        <Routes>
            {/* BASIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/books" element={<Book />} />
            <Route path="/temuriy" element={<Temuriy />} />
            <Route path="/jadid" element={<Jadid />} />
            <Route path="/sovet" element={<Sovet />} />
            <Route path="/mustaqillik" element={<Mustaqillik />} />
            {/* BASIC ROUTES THE END */}

            {/* BOOKS ROUTE GENRE */}
            <Route path="/books/temuriy" element={<BookTemuriy />} />
            <Route path="/books/jadid" element={<BookJadid />} />
            <Route path="/books/sovet" element={<BookSovet />} />
            <Route path="/books/mustaqillik" element={<BookMustaqillik />} />
            {/* BOOKS ROUTE GENRE THE END */}

            {/* BOOKS ROUTE SINGLE PAGE GENRE */}
            <Route path="/books/temuriy/:id" element={<SingleTemuriy />} />
            <Route path="/books/jadid/:id" element={<SingleJadid />} />
            <Route path="/books/sovet/:id" element={<SingleSovet />} />
            <Route path="/books/mustaqillik/:id" element={<SingleMustaqillik />} />
            {/* BOOKS ROUTE SINGLE PAGE GENRE THE END */}

            {/* AUTHOR ROUTE SINGLE PAGE GENRE */}
            <Route path="/temuriy/:id" element={<SinglePageTemuriy />} />
            <Route path="/jadid/:id" element={<SinglePageJadid />} />
            <Route path="/sovet/:id" element={<SinglePageSovet />} />
            <Route path="/mustaqillik/:id" element={<SinglePageMustaqillik />} />
            {/* AUTHOR ROUTE SINGLE PAGE GENRE THE END */}

            {/* ADD PAGE */}
            <Route path="/add-author" element={<AddAuthor />} />
            <Route path="/add-book" element={<AddBook />} />
            {/* ADD PAGE THE END */}

            {/* ACCOUNT SETTINGS SECURITY */}
            <Route path="/account" element={<Account />} />
            <Route path="/security" element={<Security />} />
            <Route path="/settings" element={<Settings />} />
            {/* ACCOUNT SETTINGS SECURITY PAGES THE END */}
        </Routes>
    )
}