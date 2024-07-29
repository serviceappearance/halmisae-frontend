import "../common.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReactComponent as MapPinIcon } from "../../assets/icons/map-pin.svg";
import AdditionalSection from "./salePageComponent/AdditionalSection";
import SaleInfoSection from "./salePageComponent/SaleInfoSection";
import SignBoard from "./salePageComponent/SignBoard";
import SaleSectionBottom from "./salePageComponent/SaleSectionBottom";
import AlertModal from "./BargainSale/AlertModal";
import PaymentInfoModal from "./BargainSale/PaymentInfoModal";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function SalePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState("alert");
  const [saleInfo, setSaleInfo] = useState(0);
  const [loading, setLoading] = useState(true);
  const [coordinates, setCoordinates] = useState({ lat: "", lon: "" });

  const { storeId } = useParams();

  useEffect(() => {
    const fetchSaleInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/v1/api/user/main/detail?storeNumber=${storeId}`
        );
        setSaleInfo(response.data);
        setLoading(false);

        if (response.data.address) {
          const geoResponse = await axios.get(
            `https://nominatim.openstreetmap.org/search?format=json&q=${response.data.address
              .split(" ", 3)
              .join(" ")}`
          );
          if (geoResponse.data.length > 0) {
            const location = geoResponse.data[0];
            setCoordinates({ lat: location.lat, lon: location.lon });
          }
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

  const formatTime = (timeString) => {
    if (!timeString || timeString.length !== 4) {
      return "00:00";
    }
    return `${timeString.slice(0, 2)}:${timeString.slice(2)}`;
  };

  const formatTimeFromArray = (dateString) => {
    if (!dateString) {
      return "00:00";
    }

    const parts = dateString.split(" ");

    if (parts.length < 2) {
      return "00:00";
    }

    const timeParts = parts[1].split(":");

    if (timeParts.length < 2) {
      return "00:00";
    }

    const hours = timeParts[0].padStart(2, "0");
    const minutes = timeParts[1].padStart(2, "0");

    return `${hours}${minutes}`;
  };

  const pickingTimeFormatted = saleInfo
    ? `${formatTimeFromArray(saleInfo.pickupTime)} -  ${formatTime(
        saleInfo.closeTime
      )}`
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
        gridTemplateRows: "105px 124px 250px 40px 40px ",
        position: "relative",
      }}
    >
      <SignBoard
        storeName={saleInfo.storeName}
        imgUrl={
          "https://cdn.pixabay.com/photo/2018/05/25/18/04/nature-3429700_1280.jpg"
        } // info.imgUrl로 교체
      />
      <SaleInfoSection
        storeName={saleInfo.storeName}
        opening={`${formatTime(saleInfo.openTime)} - ${formatTime(
          saleInfo.closeTime
        )}`}
        breaking={`${formatTime(saleInfo.breakStart)} - ${formatTime(
          saleInfo.breakEnd
        )}`}
        picking={pickingTimeFormatted}
        price={saleInfo.closingPrice}
      />

      {/* <AdditionalSection icon={<MapPinIcon />} address={saleInfo.address} />
      <AdditionalSection icon={null} address={"재료 및 알레르기 성분 정보"} /> */}

      <div style={{ placeSelf: "center" }}>
        <MapComponent mapLocation={coordinates} address={saleInfo.address} />
        <div className="font-body2" style={{ marginTop: "10px" }}>
          {saleInfo.address}
        </div>
      </div>
      <SaleSectionBottom
        rating={"4.5"}
        toggleModal={toggleModal}
        storeId={storeId}
        storeName={saleInfo.storeName}
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
