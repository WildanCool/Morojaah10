import Navbar from "./navbar";
import { MapPin } from "lucide-react"; // pastikan lucide-react sudah terinstall
import data from "../Project/aData.json"; // sesuaikan path jika perlu

const Kontak = () => {
  const { lokasi } = data; // Ambil hanya yang dibutuhkan, atau bisa juga semua

  return (
    <div className="font-sans text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(bgImage.jpg)` }} // Pastikan gambar ada di folder publik atau ganti dengan import
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center px-8 md:px-20">
          <div className="max-w-4xl">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4 text-left">
              Kontak
            </h1>
            <p className="text-white text-xl md:text-2xl text-left">
              Kami siap membantu Anda. Jangan ragu untuk menghubungi kami untuk
              pertanyaan, masukan, atau kerjasama.
            </p>
          </div>
        </div>
      </div>

      {/* Lokasi */}
      <section className="p-6 space-y-2 mx-4 mt-5">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <MapPin size={20} className="text-gray-500" /> Lokasi
        </h2>
        <p>{lokasi.alamat}</p>
        <p className="text-sm text-gray-500">
          Lat: {lokasi.latitude}, Long: {lokasi.longitude}
        </p>
      </section>

      {/* Form Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white shadow-2xl rounded-3xl p-10 space-y-8">
          <h2 className="text-3xl font-bold text-center text-black">
            Kirim Pesan Anda
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Nama</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Nama lengkap Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Email aktif Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Pesan</label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-xl h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Tuliskan pesan Anda"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Kesan dan Saran
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-xl h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Bagikan kesan dan saran Anda"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gray-600 hover:bg-black text-white font-semibold px-8 py-3 rounded-xl transition duration-300"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Kawah Putih Ciwidey. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0"></div>
        </div>
      </footer>
    </div>
  );
};

export default Kontak;
