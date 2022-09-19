import React, { useState, useEffect } from "react";
import Navbar from "../components/landingpage/Navbar";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
// const ModalContext = createContext()
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import registerImg from "../public/register.jpeg";
import hero from "../public/hero.svg";
import PersonalDetails from "../components/regform/PersonalDetails";
import ContactDetails from "../components/regform/ContactDetails";
import ChooseCourse from "../components/regform/ChooseCourse";
import { useDisclosure } from "@chakra-ui/react";

const Register = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tabIndex, setTabIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    birthday: 0,
    gender: "",
    experience: "",
    email: "",
    phonenumber: 0,
    level: "",
    program: "",
    referral: "",
  });
  const handleSliderChange = (event) => {
    setTabIndex(parseInt(event.target.value, 10));
  };
  const handleSliderChangeBtn = (i) => {
    setTabIndex(parseInt(i, 10));
  };

  const handleTabsChange = (index) => {
    setTabIndex(index);
  };
  useEffect(() => {
  });
  return (
    <>
      <Navbar />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              labore deserunt nobis reiciendis repudiandae, aspernatur esse
              laboriosam iusto veritatis dolorum fuga amet harum asperiores
              fugiat natus quam vero accusamus ipsa.
            </p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <section id="register" className="container mx-auto mb-32 mt-16">
        <div className="max-w-6xl px-5 mx-auto md:mt-32 mb-10 text-center">
          <h2 className="md:text-6xl text-4xl font-bold text-center">
            Register!
          </h2>
        </div>
        <div className="">
          <div className="flex  mx-auto md:p-10">
            <div className=" relative mr-7 w-1/2 md:flex hidden bg-[#448a9c] g-main">
              <div className="bg-white  w-full h-full absolute -left-5 border-[#448a9c] border-3 -bottom-5">
                <Image
                  layout="fill"
                  priority
                  src={hero}
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 p-3 ">
              <Box>
                {/* <input
                    type="range"
                    min="0"
                    max="2"
                    value={tabIndex}
                    onChange={handleSliderChange}
                  />
                  <div>
                    <CheckCircleIcon />
                    <CheckCircleIcon />
                    <CheckCircleIcon />
                  </div> */}
                <Tabs index={tabIndex} >
                  <TabList>
                    <Tab>Personal details</Tab>
                    <Tab>Contact details</Tab>
                    <Tab>Choose course</Tab>
                  </TabList>
                  <TabPanels>
                    <PersonalDetails
                      formData={formData}
                      setFormData={setFormData}
                      handleSliderChangeBtn={handleSliderChangeBtn}
                    />
                    <ContactDetails
                      formData={formData}
                      setFormData={setFormData}
                      handleSliderChangeBtn={handleSliderChangeBtn}
                    />
                    <ChooseCourse
                      formData={formData}
                      setFormData={setFormData}
                      handleSliderChangeBtn={handleSliderChangeBtn}
                      onOpen={onOpen}
                    />
                  </TabPanels>
                </Tabs>
              </Box>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
