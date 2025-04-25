import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import aData from "../Project/aData.json";
import Navbar from "./navbar.jsx";
import bgImage from "../Project/asset/bgImage.jpg";
import logoCiwidey from "../Project/asset/logoCiwidey.png";

const Home = () => {
  const [data, setData] = useState({ aktivitas: [], foto_keluarga: [] });

  useEffect(() => {
    setData(aData);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar /> {/* Navbar ditempatkan di sini */}
      {/* Hero Section */}
      <div
        className="relative h-[90vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row items-center text-white max-w-4xl w-full gap-8"
          >
            {/* Logo di kiri */}
            <motion.img
              src={logoCiwidey}
              alt="Logo Kawah Putih"
              className="w-32 sm:w-40 md:w-52 lg:w-96 object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />

            {/* Teks di kanan */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Selamat Datang di Kawah Putih
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6">
                Keindahan Alam Ciwidey yang Mempesona
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Link
                  to="/detail"
                  className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Jelajahi Sekarang
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/*Higlight Section */}
      <section className="py-32 px-4 sm:px-8 md:px-16 bg-[#FFF6DA] text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-10">
          Kenapa Harus Kawah Putih?
        </h2>

        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={true}
          className="max-w-xl mx-auto"
        >
          {/* Card 1 */}
          <div className="p-4">
            <div className="bg-white shadow-md px-16 pb-16 pt-12 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3 text-[#328E6E]">
                Pemandangan Eksotis
              </h3>
              <p>
                Danau vulkanik berwarna putih kehijauan dengan kabut mistis yang
                menakjubkan.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4">
            <div className="bg-white shadow-md px-16 pb-16 pt-12 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3 text-[#328E6E]">
                Udara Sejuk
              </h3>
              <p>
                Berada di ketinggian 2.400 mdpl, cocok untuk melepas penat dari
                hiruk pikuk kota.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4">
            <div className="bg-white shadow-md px-16 pb-16 pt-12 rounded-xl border">
              <h3 className="text-xl font-semibold mb-3 text-[#328E6E]">
                Spot Foto Instagramable
              </h3>
              <p>
                Cocok untuk prewedding, foto liburan, atau konten sosial media
                kamu.
              </p>
            </div>
          </div>
        </Slider>
      </section>
      {/*Aktivitas */}
      <section className="bg-[#20bcb2] py-32 px-4 sm:px-8 md:px-16 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-10">
          Aktivitas di Kawah Putih
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.aktivitas.map((item, index) => (
            <div
              key={index}
              className="bg-green-100 w-auto h-[450px] rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="text-gray-800 text-center">{item}</p>
            </div>
          ))}
        </div>
      </section>
      {/*Apa Kata Mereka? */}
      <section className="bg-[#FFF6DA]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {/* Baris 1 */}
          <div className="bg-[#F26430] text-[#F6E3C5] p-6 flex items-center justify-center min-h-[200px]">
            <h3 className="text-2xl font-bold">Kata Mereka?</h3>
          </div>

          <img
            src="https://panghealingan.com/wp-content/uploads/2023/03/291717928_547410973761248_8122536801985989048_n.jpg"
            alt="Pengunjung 1"
            className="w-full h-full object-cover min-h-[200px]"
          />

          <div className="bg-[#EFD9A7] p-6 flex flex-col justify-center text-[#4B3E2B] min-h-[200px]">
            <p className="italic mb-2 text-sm">
              “SOOOO HUGE. I walk for 6 hours and still places undiscovered...”
            </p>
            <p className="text-right font-semibold text-sm">— Jovina Maulida</p>
          </div>

          <img
            src="https://wartaparahyangan.com/wp-content/uploads/2024/06/IMG_20240602_084517-e1717292973484.jpg"
            alt="Tiket"
            className="w-full h-full object-cover min-h-[200px]"
          />

          {/* Baris 2 */}
          <img
            src="https://c-rafting.com/wp-content/uploads/2020/11/116878151_930352557461010_3362227765889611232_n.jpg.webp"
            alt="Pengunjung 2"
            className="w-full h-full object-cover min-h-[200px]"
          />

          <div className="bg-[#17494D] p-6 text-[#F6E3C5] flex flex-col justify-center min-h-[200px]">
            <p className="italic mb-2 text-sm">
              “Great place to bring your families here to play and also
              learn...”
            </p>
            <p className="text-right font-semibold text-sm">— Aldo Maudy</p>
          </div>

          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAI6QqxESQoW204C7EY5rlS4rhs7SMfBuTai4Mbz_B9DgklRNC2343yZ0QfgKSgN0J3fLs73CyK2EhTJvYjZjA0J3OGzGSKe0ecqXxhqOKhrRW9L3p-W4DVJCqN3f8VJ_0P1oD_KiWtKw/s1600/DSC_0251.JPG"
            alt="Pengunjung 3"
            className="w-full h-full object-cover min-h-[200px]"
          />

          <div className="bg-[#F26430] p-6 text-[#F6E3C5] flex flex-col justify-center min-h-[200px]">
            <p className="italic mb-2 text-sm">
              “Kids so happy and have fun here... well organized. Two thumbs
              up.”
            </p>
            <p className="text-right font-semibold text-sm">— Jovina Maulida</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Kawah Putih Ciwidey. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
