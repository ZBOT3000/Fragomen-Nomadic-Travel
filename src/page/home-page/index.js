import { React, useState, useEffect } from "react";
import "react-datepicker/dist/react-datepicker.css";
import SearchFilter from "../../components/search";
import Dropdown from "../../components/dropdown";
import Calendar from "../../components/calendar";

const countriesTravel = [
  { name: "Germany" },
  { name: "France" },
  { name: "England" },
  { name: "Canada" },
  { name: "South Africa" },
  { name: "United States" },
];

const countriesDestination = [
  { name: "Germany" },
  { name: "France" },
  { name: "England" },
  { name: "Canada" },
  { name: "South Africa" },
  { name: "United States" },
];

const travelPurpose = [
  { name: "Marine & Offshore" },
  { name: "Business" },
  { name: "Leisure" },
];

const data = [
  "Oscar Webber (Fragomen Germany)",
  "Oscar Wilde (Fragomen Ireland)",
  "Oscar De La Hoya (Fragomen US)",
];

function Home() {
  const [selectTravelOrigin, setSelectedTravelOrigin] = useState(
    countriesTravel[0]
  );
  const [selectedDestination, setSelectedFDestination] = useState(
    countriesDestination[3]
  );

  const [selectedPurspose, setSelectedPurpose] = useState(travelPurpose[0]);

  const [arrivialDate, setArrivialDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());

  const [isOpen, setIsOpen] = useState(false);

  const [isOpenDes, setIsOpenDes] = useState(false);

  const [isOpenTravel, setIsOpenTravel] = useState(false);

  const [isOpenArrivialDate, setIsOpenArrivialDate] = useState(false);

  const [isOpenDepatureDate, setIsOpenDepartureDate] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedTravelOrigin(country);
    setIsOpen(false);
  };

  const handleCountrySelectDes = (country) => {
    setSelectedFDestination(country);
    setIsOpenDes(false);
  };

  const handleTravelPurposeSelect = (purpose) => {
    setSelectedPurpose(purpose);
    setIsOpenTravel(false);
  };

  const handleArrivialSelect = (date) => {
    setArrivialDate(date);
    setIsOpenArrivialDate(false);
  };

  const handleDepartureSelectDes = (date) => {
    setDepartureDate(date);
    setIsOpenDepartureDate(false);
  };

  const toggleDropdownTrav = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownDes = () => {
    setIsOpenDes(!isOpenDes);
  };

  const toggleDropdownPurpose = () => {
    setIsOpenTravel(!isOpenTravel);
  };

  const toggleDropdownArrival = () => {
    setIsOpenArrivialDate(!isOpenArrivialDate);
  };

  const toggleDropdownDeparture = () => {
    setIsOpenDepartureDate(!isOpenDepatureDate);
  };
  // Search filter

  const [filteredData, setFilteredData] = useState(data);

  const [query, setQuery] = useState("");

  const [selectedValue, setSelectedValue] = useState([]);

  const handleItemClick = (item) => {
    const isSelected = selectedValue.includes(item);

    if (isSelected) {
      const updatedValues = selectedValue.filter((value) => value !== item);
      setSelectedValue(updatedValues);
    } else {
      const updatedValues = [...selectedValue, item];
      setSelectedValue(updatedValues);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filteredData);
  };

  useEffect(() => {
    console.log("Selected value updated:", selectedValue);
  }, [selectedValue]);

  // Search Filter

  var yearArrivial = arrivialDate.getFullYear();
  var monthArrivial = (arrivialDate.getMonth() + 1).toString().padStart(2, "0");
  var dayArrivial = arrivialDate.getDate().toString().padStart(2, "0");

  var formattedDateArrivial =
    dayArrivial + "/" + monthArrivial + "/" + yearArrivial;

  var yearDeparture = departureDate.getFullYear();
  var monthDeparure = (departureDate.getMonth() + 1)
    .toString()
    .padStart(2, "0");
  var dayDeparture = departureDate.getDate().toString().padStart(2, "0");

  var formattedDateDeparture =
    dayDeparture + "/" + monthDeparure + "/" + yearDeparture;

  return (
    <div className="min-h-full bg-green ml-3">
      <div className="h-[893px] w-[454px] bg-dark-blue">
        <div className="flex flex-col pl-5 pt-3 ">
          <h1 className="font-montserrat text-[24px] font-semibold leading-29 text-left text-white">
            Create Itinerary
          </h1>
          <div className="pt-4 w-[398px] mb-2">
            <form class="">
              <div className="relative inline-block text-left font-montserrat font-medium pt-1">
                <Dropdown
                  label={"Travel Origin"}
                  toggle={toggleDropdownTrav}
                  name={selectTravelOrigin.name}
                  isOpen={isOpen}
                  items={countriesTravel}
                  handleSelect={handleCountrySelect}
                />

                <div>
                  <div className="pt-4">
                    <Dropdown
                      label={"Travel Destination"}
                      toggle={toggleDropdownDes}
                      name={selectedDestination.name}
                      isOpen={isOpenDes}
                      items={countriesDestination}
                      handleSelect={handleCountrySelectDes}
                    />
                  </div>
                </div>

                <Calendar
                  toggleDropdownArrival={toggleDropdownArrival}
                  toggleDropdownDeparture={toggleDropdownDeparture}
                  formattedDateArrivial={formattedDateArrivial}
                  isOpenArrivialDate={isOpenArrivialDate}
                  formattedDateDeparture={formattedDateDeparture}
                  isOpenDepatureDate={isOpenDepatureDate}
                  arrivialDate={arrivialDate}
                  setArrivialDate={setArrivialDate}
                  departureDate={departureDate}
                  setDepartureDate={setDepartureDate}
                />

                <div>
                  <div className="pt-4">
                    <Dropdown
                      label={"Purpose of Travel"}
                      toggle={toggleDropdownPurpose}
                      name={selectedPurspose.name}
                      isOpen={isOpenTravel}
                      items={travelPurpose}
                      handleSelect={handleTravelPurposeSelect}
                    />
                  </div>
                </div>
                <div>
                  <div className="pt-4">
                    <SearchFilter
                      label={"Add Travellers"}
                      query={query}
                      handleSearch={handleSearch}
                      filteredData={filteredData}
                      selectedValue={selectedValue}
                      handleItemClick={handleItemClick}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
