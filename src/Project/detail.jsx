import React from "react";
import data from "../Project/aData.json";
import Navbar from "./navbar";
// import bgImage from "../Project/asset/bgImage.jpg";
// import logoCiwidey from "../Project/asset/logoCiwidey.png";
import { MapPin, Clock } from "lucide-react";

const Detail = () => {
  const { nama, deskripsi, lokasi, jam_operasional, harga_tiket, fasilitas } =
    data;

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF6DA]">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(bgImage.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center text-white max-w-4xl w-full gap-8">
            <img
              src="logoCiwidey.png"
              alt="Logo Kawah Putih"
              className="w-28 sm:w-36 md:w-44 lg:w-72 object-contain"
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                {nama}
              </h1>
              <p className="text-base sm:text-lg md:text-xl">
                Keindahan Alam Ciwidey yang Mempesona
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Deskripsi */}
      <section className="p-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
          Kawah Putih Ciwidey
        </h2>
        <p className="leading-relaxed text-gray-700 text-center w-full sm:w-1/2 mx-auto">
          {deskripsi}
        </p>
      </section>

      {/* Lokasi */}
      <section className="p-6 space-y-2 mx-4">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <MapPin size={20} className="text-gray-500" /> Lokasi
        </h2>
        <p>{lokasi.alamat}</p>
        <p className="text-sm text-gray-500">
          Lat: {lokasi.latitude}, Long: {lokasi.longitude}
        </p>
      </section>

      {/* Jam Operasional */}
      <section className="p-6 mx-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Clock size={20} className="text-gray-500" /> Jam Operasional
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-2 gap-x-8 text-gray-700">
          {Object.entries(jam_operasional).map(([hari, jam]) => (
            <div key={hari} className="flex justify-between">
              <span className="capitalize">{hari}</span>
              <span>{jam}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Harga Tiket */}
      <section className="w-full px-4 sm:px-6 lg:px-8 flex justify-center h-[400px] mb-8">
        <div className="bg-[#20bcb2] p-8 shadow-md relative w-full max-w-4xl rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Harga Tiket</h2>
          <div className="space-y-4 text-white text-[16px]">
            <div className="flex justify-between border-b pb-1">
              <span>Wisatawan Domestik</span>
              <span className="font-medium">
                Rp{harga_tiket.wisatawan_domestik.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span>Wisatawan Mancanegara</span>
              <span className="font-medium">
                Rp{harga_tiket.wisatawan_mancanegara.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span>Parkir Mobil</span>
              <span className="font-medium">
                Rp{harga_tiket.parkir_mobil.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between border-b pb-1">
              <span>Parkir Motor</span>
              <span className="font-medium">
                Rp{harga_tiket.parkir_motor.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shuttle Angkot</span>
              <span className="font-medium">
                Rp{harga_tiket.angkot_shuttle.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="absolute bottom-1 right-2 text-[#FFF6DA] font-bold text-8xl leading-none select-none pointer-events-none z-0">
            TIKET
          </div>
          <button className="absolute bottom-6 right-14 bg-black text-white opacity-30 px-6 py-2 hover:opacity-100 transition z-10">
            Beli Sekarang!
          </button>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          Fasilitas
        </h2>
        <div className="grid grid-cols-3 gap-4 auto-rows-[240px]">
          {fasilitas.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden shadow-lg ${
                index === 0 || index === 6 ? "col-span-2" : ""
              } group`}
            >
              <img
                src={item.foto}
                alt={item.nama}
                className="object-cover w-full h-full transition duration-300 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-300 text-center px-2">
                  {item.nama}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Kawah Putih Ciwidey. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Detail;
