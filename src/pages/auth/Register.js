import React, { useState } from "react";
import Editor from "react-simple-wysiwyg";
const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [moreInformation, setMoreInformation] = useState();

  const [specialties, setSpecialties] = useState({
    cartoonCharacterSpecialist: false,
    celebrityVoiceImpersonator: false,
    warmAndFriendlyNarrator: false,
    multilingualVoiceArtist: false,
  });
  const [characters, setCharacters] = useState({
    mickeyMouse: false,
    spongeBobSquarePants: false,
    scoobyDoo: false,
    elsaFrozen: false,
    spiderMan: false,
    tomAndJerry: false,
    doraTheExplorer: false,
    peppaPig: false,
  });
  const [voiceSampleFile, setVoiceSampleFile] = useState(null);

  const handleSpecialtyChange = (e) => {
    const { name, checked } = e.target;
    setSpecialties((prevSpecialties) => ({
      ...prevSpecialties,
      [name]: checked,
    }));
  };

  const handleCharacterChange = (e) => {
    const { name, checked } = e.target;
    setCharacters((prevCharacters) => ({
      ...prevCharacters,
      [name]: checked,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setVoiceSampleFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log("Form submitted with:", {
      firstName,
      lastName,
      gender,
      date,
      address,
      city,
      state,
      zipCode,
      phoneNo,
      email,
      password,
      confirmPassword,
      moreInformation,
      specialties,
      characters,
      voiceSampleFile,
    });
    // Reset the form or perform other actions after submission
  };

  return (
    <div className="flex items-center justify-center p-10">
      <div className="mx-auto w-full max-w-5xl p-12 bg-white rounded-lg shadow-md">
        <label className="mb-2 block text-xl font-semibold text-[#000D]">
          <span className="border-b-4 p-2">Profile</span>
        </label>
        <hr className="border-[#DCDCDC] mb-8" />
        <form onSubmit={handleSubmit}>
          <div className="mb-5 pt-3">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="firstName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="lastName"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="gender"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Gender
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="address"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="city"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="state"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="Enter state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="zipCode"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    id="zipCode"
                    placeholder="Enter zip code"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus
                    "
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="phoneNo"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Phone No
                  </label>
                  <input
                    type="text"
                    name="phoneNo"
                    id="phoneNo"
                    placeholder="Enter phone number"
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus
"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus
"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus
"
                    required
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="confirmPassword"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full rounded-none border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus
"
                    required
                  />
                </div>
              </div>

              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="moreInformation"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    <span className="font-bold italic">More Information</span>
                  </label>

                  <Editor
                    value={moreInformation}
                    onChange={(e) => setMoreInformation(e.target.value)}
                    placeholder="Enter more information"
                    richText
                    autoFocus
                  />
                </div>
                {/* Specialty checkboxes */}
                <div className="mb-5">
                  <p className="block text-base font-medium text-[#07074D] mb-3">
                    Select Specialty for Your Voice Message:
                  </p>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="cartoonCharacterSpecialist"
                      checked={specialties.cartoonCharacterSpecialist}
                      onChange={handleSpecialtyChange}
                      className="mr-2"
                    />
                    Cartoon Character Specialist
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="celebrityVoiceImpersonator"
                      checked={specialties.celebrityVoiceImpersonator}
                      onChange={handleSpecialtyChange}
                      className="mr-2"
                    />
                    Celebrity Voice Impersonator
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="warmAndFriendlyNarrator"
                      checked={specialties.warmAndFriendlyNarrator}
                      onChange={handleSpecialtyChange}
                      className="mr-2"
                    />
                    Warm and Friendly Narrator
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="multilingualVoiceArtist"
                      checked={specialties.multilingualVoiceArtist}
                      onChange={handleSpecialtyChange}
                      className="mr-2"
                    />
                    Multilingual Voice Artist
                  </label>
                </div>

                {/* Characters checkboxes */}
                <div className="mb-5">
                  <p className="block text-base font-medium text-[#07074D] mb-3">
                    Select Which Characters You Can Voice Over:
                  </p>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="mickeyMouse"
                      checked={characters.mickeyMouse}
                      onChange={handleCharacterChange}
                      className="mr-2"
                    />
                    Mickey Mouse
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="spongeBobSquarePants"
                      checked={characters.spongeBobSquarePants}
                      onChange={handleCharacterChange}
                      className="mr-2"
                    />
                    SpongeBob SquarePants
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="scoobyDoo"
                      checked={characters.scoobyDoo}
                      onChange={handleCharacterChange}
                      className="mr-2"
                    />
                    Scooby Doo
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="elsaFrozen"
                      checked={characters.elsaFrozen}
                      onChange={handleCharacterChange}
                      className="mr-2"
                    />
                    Elsa (Frozen)
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="spiderMan"
                      checked={characters.spiderMan}
                      onChange={handleCharacterChange}
                      className="mr-2"
                    />
                    Spider Man (Animated Series)
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="tomAndJerry"
                      checked={characters.tomAndJerry}
                      onChange={handleCharacterChange}
                      className="mr-2"
                    />
                    Tom and Jerry
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="doraTheExplorer"
                      checked={characters.doraTheExplorer}
                      onChange={handleCharacterChange}
                      className="mr-2"
                    />
                    Dora the Explorer
                  </label>
                  <br />
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="peppaPig"
                      checked={characters.peppaPig}
                      onChange={handleCharacterChange}
                      className="mr-2"
                    />
                    Peppa Pig
                  </label>
                </div>

                <div className="mb-5">
                  <p className="block text-base font-medium text-[#07074D] mb-3">
                    Upload Sample Voice
                  </p>
                  <div className="flex items-center">
                    <input
                      type="file"
                      id="voiceSample"
                      name="voiceSample"
                      accept=".mp3, .wav"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label
                      htmlFor="voiceSample"
                      className="flex items-center cursor-pointer border p-3 w-50 bg-stone-500 text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                      Browse Files
                    </label>
                  </div>
                  {voiceSampleFile && (
                    <div className="mt-3 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 mr-2 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-green-500">
                        {voiceSampleFile.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-center p-12">
            <button
              type="reset"
              class="border border-gray-300 text-black font-normal py-2 px-4 rounded-none w-50 h-10 mr-4 hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 uppercase"
            >
              Reset
            </button>
            <button
              type="submit"
              class="border border-black bg-black text-white font-normal py-2 px-4 rounded-none w-50 h-10 focus:outline-none focus:ring focus:ring-opacity-50 uppercase"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
