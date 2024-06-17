import { Route, Routes } from "react-router-dom";
import CreateDonation from "../components/Donations/CreateDonation";
import DonationList from "../components/Donations/DonationList";
import Footer from "../components/Footer";

const Donar = () => {
  return (
    <>
      <Routes>
        <Route path="create-donation" element={<CreateDonation />} />
        <Route path="donations" element={<DonationList />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Donar;
