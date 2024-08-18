import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import ErrorPage from "./components/ErrorPage.jsx";
import './index.css'
import Sejarah from './pages/Sejarah.jsx';
import VisiMisi from './pages/VisiMisi.jsx';
import LatarBelakang from './pages/LatarBelakang.jsx';
import CapaianIndikMutu from './pages/CapaianIndikMutu.jsx';
import Igd from './pages/Igd.jsx';
import Mcu from './pages/Mcu.jsx';
import Rajal from './pages/Rajal.jsx';
import Ranap from './pages/Ranap.jsx';
import PenMedis from './pages/PenMedis.jsx';
import FasilitasLain from './pages/FasilitasLain.jsx';
import PoliReguler from './pages/PoliReguler.jsx';
import PoliEksekutif from './pages/PoliEksekutif.jsx';
import AsuransiRekanan from './pages/AsuransiRekanan.jsx';
import AlurDaftarPasien from './pages/AlurDaftarPasien.jsx';
import HakKewajibanPasien from './pages/HakKewajibanPasien.jsx';
import LokerRsmd from './pages/LokerRsmd.jsx';
import PasienBpjs from './pages/PasienBpjs.jsx';
import PasienUmumAsuransi from './pages/PasienUmumAsuransi.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sejarah",
    element: <Sejarah />,
  },
  {
    path: "/visimisi",
    element: <VisiMisi />,
  },
  {
    path: "/latarbelakang",
    element: <LatarBelakang />,
  },
  {
    path: "/capaianindikatormutu",
    element: <CapaianIndikMutu />,
  },
  {
    path: "/igd",
    element: <Igd />,
  },
  {
    path: "/mcu",
    element: <Mcu />,
  },
  {
    path: "/rajal",
    element: <Rajal />,
  },
  {
    path: "/ranap",
    element: <Ranap />,
  },
  {
    path: "/penunjangmedis",
    element: <PenMedis />,
  },
  {
    path: "/fasilitaslain",
    element: <FasilitasLain />,
  },
  {
    path: "/polireguler",
    element: <PoliReguler />,
  },
  {
    path: "/polieksekutif",
    element: <PoliEksekutif />,
  },
  {
    path: "/asuransirekanan",
    element: <AsuransiRekanan />,
  },
  {
    path: "/alurpendaftaranpasien",
    element: <AlurDaftarPasien />,
  },
  {
    path: "/hakdankewajibanpasien",
    element: <HakKewajibanPasien />,
  },
  {
    path: "/lowongankerjarsmd",
    element: <LokerRsmd />,
  },
  {
    path: "/pasienbpjs",
    element: <PasienBpjs />,
  },
  {
    path: "/pasienumumdanasuransi",
    element: <PasienUmumAsuransi />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
