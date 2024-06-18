import { Route, Routes } from "react-router-dom";
import CreateDonation from "../components/Donations/CreateDonation";
import DonationList from "../components/Donations/DonationList";
import Footer from '../components/Footer';
import ProjectList from '../components/ProjectList';
import Projects from '../components/Admin/Projects';


const Donar = () => {
  return (
    <>
      <Routes>
        <Route path="create-donation" element={<CreateDonation />} />
        <Route path="donations" element={<DonationList />} />
        <Route path="projects" element={<ProjectList projects={Projects} content/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default Donar;
