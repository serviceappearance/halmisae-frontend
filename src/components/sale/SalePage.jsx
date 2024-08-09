import "../common.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SaleInfoSection from "./salePageComponent/SaleInfoSection";
import SignBoard from "./salePageComponent/SignBoard";
import SaleSectionBottom from "./salePageComponent/SaleSectionBottom";
import AlertModal from "./BargainSale/AlertModal";
import PaymentInfoModal from "./BargainSale/PaymentInfoModal";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function SalePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("alert");
  const [saleInfo, setSaleInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({ lat: "", lon: "" });
  const [isBeforeOpening, setIsBeforeOpening] = useState(false);

  const { storeId } = useParams();

  useEffect(() => {
    const fetchSaleInfo = async () => {
      try {
        const docRef = doc(db, "stores", storeId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setSaleInfo(data);
          setLoading(false);

          // 주소
          if (data.address) {
            const geoResponse = await fetch(
              `https://nominatim.openstreetmap.org/search?format=json&q=${data.address
                .split(" ", 4)
                .join(" ")}`
            );
            const geoData = await geoResponse.json();
            if (geoData.length > 0) {
              const location = geoData[0];
              setCoordinates({ lat: location.lat, lon: location.lon });
            }
          }

          const now = new Date();
          const nowMonth =
            now.getMonth() >= 10
              ? now.getMonth() + 1
              : `0${now.getMonth() + 1}`;
          const openDate = `${now.getFullYear()}-${`${nowMonth}`}-${now.getDate()}`;

          const openTime = new Date(
            `${openDate}T${data.openTime.slice(0, 2)}:${data.openTime.slice(
              2,
              4
            )}:00`
          );
          setIsBeforeOpening(now < openTime);
        } else {
          console.error("No such document!");
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to fetch sale info:", error);
        setLoading(false);
      }
    };
    fetchSaleInfo();
  }, [storeId]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentModal("alert");
  };

  const handleConfirm = () => {
    setCurrentModal("payment");
  };

  // 시간 포맷 설정
  const formatTime = (timeString) => {
    if (!timeString) {
      return "영업 전";
    }

    const date = new Date(timeString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const pickingTimeFormatted = saleInfo
    ? `${formatTime(saleInfo.pickupTime)} - ${saleInfo.closeTime}`
    : "";

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!saleInfo) {
    return <div>Error loading sale info.</div>;
  }

  const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });

  const MapComponent = ({ mapLocation, address }) => {
    const position = [mapLocation.lat, mapLocation.lon];
    return (
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "230px", width: "250px", borderRadius: "10px" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={defaultIcon}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    );
  };

  return (
    <div
      className="style-page"
      style={{
        display: "grid",
        gridTemplateRows: "105px 124px 220px 40px 40px ",
        position: "relative",
      }}
    >
      <SignBoard storeName={saleInfo.storeName} imgUrl={saleInfo.image} />
      <SaleInfoSection
        storeName={saleInfo.storeName}
        opening={`${saleInfo.openTime} - ${saleInfo.closeTime}`}
        breaking={`${saleInfo.breakStart} - ${saleInfo.breakEnd}`}
        picking={pickingTimeFormatted}
        price={saleInfo.closingPrice}
        isBeforeOpening={isBeforeOpening}
      />

      <div style={{ padding: "0 40px" }}>
        <MapComponent mapLocation={coordinates} address={saleInfo.address} />
        <div className="font-body2" style={{ marginTop: "10px" }}>
          <span>{saleInfo.address.split("(")[0]}</span>
          {` ${saleInfo.addressDetail}`}
        </div>
      </div>
      <SaleSectionBottom
        rating={"4.5"}
        toggleModal={toggleModal}
        storeId={storeId}
        storeName={saleInfo.storeName}
        isBeforeOpening={isBeforeOpening}
      />
      <div
        className={`overlay ${isModalOpen ? "open" : ""}`}
        onClick={toggleModal}
      ></div>
      {currentModal === "alert" && (
        <AlertModal
          isOpen={isModalOpen}
          onConfirm={handleConfirm}
          toggleModal={toggleModal}
        />
      )}
      {currentModal === "payment" && (
        <PaymentInfoModal
          isOpen={isModalOpen}
          toggleModal={toggleModal}
          price={saleInfo.closingPrice}
          storeName={saleInfo.storeName}
          picking={pickingTimeFormatted}
          storeNumber={saleInfo.storeNumber}
          foodLimit={saleInfo.closingFoodCount}
        />
      )}
    </div>
  );
}
