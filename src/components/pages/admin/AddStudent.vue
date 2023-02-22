<template>
  <div v-if="store.user === 'admin'">
    <form @submit.prevent="addStore.addStudent">
      <div>
        <label for="passportId">Passport Id: </label>
        <input id="passportId" name="passportId" type="text" v-model="addStore.passportId" />
      </div>
      <div>
        <label for="studentNumber">Student Id: </label>
        <input id="studentNumber" name="studentNumber" type="text" v-model="addStore.studentNumber" />
      </div>
      <div>
        <label for="name">Name: </label>
        <input id="name" name="name" type="text" v-model="addStore.name" />
      </div>
      <div>
        <label for="surname">Surname: </label>
        <input id="surname" name="surname" type="text" v-model="addStore.surname" />
      </div>
      <div>
        <label for="pob">Place of Birth: </label>
        <input id="pob" name="pob" type="text" v-model="addStore.pob" />
      </div>
      <div>
        <label for="dob">Date of Birth: </label>
        <input id="dob" name="dob" type="date" v-model="addStore.dob" />
      </div>
      <div>
        <label for="gender">Gender: </label>
        <select id="gender" name="gender" v-model="addStore.gender">
          <option value="">Make a selection</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label for="nationality">Nationality: </label>
        <select id="gender" name="nationality" v-model="addStore.nationality">
          <option value="">Make a selection</option>
          <option value="afghan">Afghan</option>
          <option value="albanian">Albanian</option>
          <option value="algerian">Algerian</option>
          <option value="american">American</option>
          <option value="andorran">Andorran</option>
          <option value="angolan">Angolan</option>
          <option value="antiguans">Antiguans</option>
          <option value="argentinean">Argentinean</option>
          <option value="armenian">Armenian</option>
          <option value="australian">Australian</option>
          <option value="austrian">Austrian</option>
          <option value="azerbaijani">Azerbaijani</option>
          <option value="bahamian">Bahamian</option>
          <option value="bahraini">Bahraini</option>
          <option value="bangladeshi">Bangladeshi</option>
          <option value="barbadian">Barbadian</option>
          <option value="barbudans">Barbudans</option>
          <option value="batswana">Batswana</option>
          <option value="belarusian">Belarusian</option>
          <option value="belgian">Belgian</option>
          <option value="belizean">Belizean</option>
          <option value="beninese">Beninese</option>
          <option value="bhutanese">Bhutanese</option>
          <option value="bolivian">Bolivian</option>
          <option value="bosnian">Bosnian</option>
          <option value="brazilian">Brazilian</option>
          <option value="british">British</option>
          <option value="bruneian">Bruneian</option>
          <option value="bulgarian">Bulgarian</option>
          <option value="burkinabe">Burkinabe</option>
          <option value="burmese">Burmese</option>
          <option value="burundian">Burundian</option>
          <option value="cambodian">Cambodian</option>
          <option value="cameroonian">Cameroonian</option>
          <option value="canadian">Canadian</option>
          <option value="cape verdean">Cape Verdean</option>
          <option value="central african">Central African</option>
          <option value="chadian">Chadian</option>
          <option value="chilean">Chilean</option>
          <option value="chinese">Chinese</option>
          <option value="colombian">Colombian</option>
          <option value="comoran">Comoran</option>
          <option value="congolese">Congolese</option>
          <option value="costa rican">Costa Rican</option>
          <option value="croatian">Croatian</option>
          <option value="cuban">Cuban</option>
          <option value="cypriot">Cypriot</option>
          <option value="czech">Czech</option>
          <option value="danish">Danish</option>
          <option value="djibouti">Djibouti</option>
          <option value="dominican">Dominican</option>
          <option value="dutch">Dutch</option>
          <option value="east timorese">East Timorese</option>
          <option value="ecuadorean">Ecuadorean</option>
          <option value="egyptian">Egyptian</option>
          <option value="emirian">Emirian</option>
          <option value="equatorial guinean">Equatorial Guinean</option>
          <option value="eritrean">Eritrean</option>
          <option value="estonian">Estonian</option>
          <option value="ethiopian">Ethiopian</option>
          <option value="fijian">Fijian</option>
          <option value="filipino">Filipino</option>
          <option value="finnish">Finnish</option>
          <option value="french">French</option>
          <option value="gabonese">Gabonese</option>
          <option value="gambian">Gambian</option>
          <option value="georgian">Georgian</option>
          <option value="german">German</option>
          <option value="ghanaian">Ghanaian</option>
          <option value="greek">Greek</option>
          <option value="grenadian">Grenadian</option>
          <option value="guatemalan">Guatemalan</option>
          <option value="guinea-bissauan">Guinea-Bissauan</option>
          <option value="guinean">Guinean</option>
          <option value="guyanese">Guyanese</option>
          <option value="haitian">Haitian</option>
          <option value="herzegovinian">Herzegovinian</option>
          <option value="honduran">Honduran</option>
          <option value="hungarian">Hungarian</option>
          <option value="icelander">Icelander</option>
          <option value="indian">Indian</option>
          <option value="indonesian">Indonesian</option>
          <option value="iranian">Iranian</option>
          <option value="iraqi">Iraqi</option>
          <option value="irish">Irish</option>
          <option value="israeli">Israeli</option>
          <option value="italian">Italian</option>
          <option value="ivorian">Ivorian</option>
          <option value="jamaican">Jamaican</option>
          <option value="japanese">Japanese</option>
          <option value="jordanian">Jordanian</option>
          <option value="kazakhstani">Kazakhstani</option>
          <option value="kenyan">Kenyan</option>
          <option value="kittian and nevisian">Kittian and Nevisian</option>
          <option value="kuwaiti">Kuwaiti</option>
          <option value="kyrgyz">Kyrgyz</option>
          <option value="laotian">Laotian</option>
          <option value="latvian">Latvian</option>
          <option value="lebanese">Lebanese</option>
          <option value="liberian">Liberian</option>
          <option value="libyan">Libyan</option>
          <option value="liechtensteiner">Liechtensteiner</option>
          <option value="lithuanian">Lithuanian</option>
          <option value="luxembourger">Luxembourger</option>
          <option value="macedonian">Macedonian</option>
          <option value="malagasy">Malagasy</option>
          <option value="malawian">Malawian</option>
          <option value="malaysian">Malaysian</option>
          <option value="maldivan">Maldivan</option>
          <option value="malian">Malian</option>
          <option value="maltese">Maltese</option>
          <option value="marshallese">Marshallese</option>
          <option value="mauritanian">Mauritanian</option>
          <option value="mauritian">Mauritian</option>
          <option value="mexican">Mexican</option>
          <option value="micronesian">Micronesian</option>
          <option value="moldovan">Moldovan</option>
          <option value="monacan">Monacan</option>
          <option value="mongolian">Mongolian</option>
          <option value="moroccan">Moroccan</option>
          <option value="mosotho">Mosotho</option>
          <option value="motswana">Motswana</option>
          <option value="mozambican">Mozambican</option>
          <option value="namibian">Namibian</option>
          <option value="nauruan">Nauruan</option>
          <option value="nepalese">Nepalese</option>
          <option value="new zealander">New Zealander</option>
          <option value="ni-vanuatu">Ni-Vanuatu</option>
          <option value="nicaraguan">Nicaraguan</option>
          <option value="nigerien">Nigerien</option>
          <option value="north korean">North Korean</option>
          <option value="northern irish">Northern Irish</option>
          <option value="norwegian">Norwegian</option>
          <option value="omani">Omani</option>
          <option value="pakistani">Pakistani</option>
          <option value="palauan">Palauan</option>
          <option value="panamanian">Panamanian</option>
          <option value="papua new guinean">Papua New Guinean</option>
          <option value="paraguayan">Paraguayan</option>
          <option value="peruvian">Peruvian</option>
          <option value="polish">Polish</option>
          <option value="portuguese">Portuguese</option>
          <option value="qatari">Qatari</option>
          <option value="romanian">Romanian</option>
          <option value="russian">Russian</option>
          <option value="rwandan">Rwandan</option>
          <option value="saint lucian">Saint Lucian</option>
          <option value="salvadoran">Salvadoran</option>
          <option value="samoan">Samoan</option>
          <option value="san marinese">San Marinese</option>
          <option value="sao tomean">Sao Tomean</option>
          <option value="saudi">Saudi</option>
          <option value="scottish">Scottish</option>
          <option value="senegalese">Senegalese</option>
          <option value="serbian">Serbian</option>
          <option value="seychellois">Seychellois</option>
          <option value="sierra leonean">Sierra Leonean</option>
          <option value="singaporean">Singaporean</option>
          <option value="slovakian">Slovakian</option>
          <option value="slovenian">Slovenian</option>
          <option value="solomon islander">Solomon Islander</option>
          <option value="somali">Somali</option>
          <option value="south african">South African</option>
          <option value="south korean">South Korean</option>
          <option value="spanish">Spanish</option>
          <option value="sri lankan">Sri Lankan</option>
          <option value="sudanese">Sudanese</option>
          <option value="surinamer">Surinamer</option>
          <option value="swazi">Swazi</option>
          <option value="swedish">Swedish</option>
          <option value="swiss">Swiss</option>
          <option value="syrian">Syrian</option>
          <option value="taiwanese">Taiwanese</option>
          <option value="tajik">Tajik</option>
          <option value="tanzanian">Tanzanian</option>
          <option value="thai">Thai</option>
          <option value="togolese">Togolese</option>
          <option value="tongan">Tongan</option>
          <option value="trinidadian or tobagonian">
            Trinidadian or Tobagonian
          </option>
          <option value="tunisian">Tunisian</option>
          <option value="turkish">Turkish</option>
          <option value="tuvaluan">Tuvaluan</option>
          <option value="ugandan">Ugandan</option>
          <option value="ukrainian">Ukrainian</option>
          <option value="uruguayan">Uruguayan</option>
          <option value="uzbekistani">Uzbekistani</option>
          <option value="venezuelan">Venezuelan</option>
          <option value="vietnamese">Vietnamese</option>
          <option value="welsh">Welsh</option>
          <option value="yemenite">Yemenite</option>
          <option value="zambian">Zambian</option>
          <option value="zimbabwean">Zimbabwean</option>
        </select>
      </div>
      <div>
        <label for="fatherName">Father's Name: </label>
        <input id="fatherName" name="fatherName" type="text" v-model="addStore.fatherName" />
      </div>
      <div>
        <label for="fatherOccupation">Father's Occupation: </label>
        <input id="fatherOccupation" name="fatherOccupation" type="text" v-model="addStore.fatherOccupation" />
      </div>
      <div>
        <label for="motherName">Mother's Name: </label>
        <input id="motherName" name="motherName" type="text" v-model="addStore.motherName" />
      </div>
      <div>
        <label for="motherOccupation">Mother's Occupation: </label>
        <input id="motherOccupation" name="motherOccupation" type="text" v-model="addStore.motherOccupation" />
      </div>
      <div>
        <label for="faculty">Faculty: </label>
        <input id="faculty" name="faculty" type="text" v-model="addStore.faculty" />
        <!-- It should be a v-for option later -->
      </div>
      <div>
        <label for="department">Department: </label>
        <input id="department" name="department" type="text" v-model="addStore.department" />
        <!-- It should be a v-for option later -->
      </div>
      <div>
        <label for="dor">Date of Registry: </label>
        <input id="dor" name="dor" type="date" v-model="addStore.dor" />
      </div>
      <div class="address">
        <label for="address">Address: </label>
        <textarea
          name="address"
          id="address"
          cols="27"
          rows="10"
          placeholder="Enter the student's adress information."
          v-model="addStore.address"
        ></textarea>
      </div>
      <div></div>
      <div>
        <label for="phone">Phone Number: </label>
        <input id="phone" name="phone" type="text" v-model="addStore.phone" />
      </div>
      <div>
        <label for="email">E-mail: </label>
        <input id="email" name="email" type="email" v-model="addStore.email" />
      </div>
      <div>
        <label for="password">Password: </label>
        <input id="password" name="password" type="text" v-model="addStore.password" />
      </div>
      <div>
        <label for="courses">Courses: </label>
        <input id="courses" name="courses" type="text" v-model="addStore.courses" />
        <!-- It should be a checkbox section with a v-for to department courses -->
      </div>
      <div>
        <label for="debt">Debt: </label>
        <input id="debt" name="debt" type="number" v-model="addStore.debt" />
        <span>$</span>
      </div>
      <button>Register Student</button>
    </form>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user.js";
import { useAddStudentStore } from "@/stores/addstudent.js";

const store = useUserStore();
const addStore = useAddStudentStore();
</script>

<style scoped>
body {
  background-color: #f2f2f2;
  font-family: Arial, sans-serif;
  color: #444;
}

div {
  margin: 10px;
}

label {
  display: inline-block;
  width: 120px;
  font-weight: bold;
}

input[type="text"],
input[type="number"],
input[type="email"],
select {
  padding: 5px;
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

input[type="date"] {
  padding: 5px;
  width: 205px;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

input[type="text"]:focus,
input[type="number"]:focus,
input[type="date"]:focus,
select:focus {
  border: 1px solid #555;
}

select option:first-child {
  color: #999;
}

button {
  padding: 5px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

button:active {
  background-color: #222;
}

label {
  text-align: left;
}
</style>
