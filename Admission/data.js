import { db } from "./firbase.mjs";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let dataButton = document.getElementById('data');
let tableBody = document.querySelector('#table-data tbody');

dataButton.addEventListener('click', async function () {
  const querySnapshot = await getDocs(collection(db, "Admission"));
  querySnapshot.forEach((doc) => {
    let dataGet = doc.data();
    console.log(dataGet);

    let newRow = `
      <tr>
        <td data-label="First name">${dataGet.Firstname}</td>
        <td data-label="Last name">${dataGet.Lastname}</td>
        <td data-label="Father's name">${dataGet.Fathername}</td>
        <td data-label="Mobile Number">${dataGet.MobileNumber}</td>
        <td data-label="Cnic">${dataGet.cnic}</td>
        <td data-label="Age">${dataGet.age}</td>
        <td data-label="Address">${dataGet.Address}</td>
        <td data-label="Gender">${dataGet.Gender}</td>
        <td data-label="Country">${dataGet.country}</td>
        <td data-label="City">${dataGet.city}</td>
        <td data-label="Course">${dataGet.courses}</td>
        <td data-label="Email ID">${dataGet.Email}</td>      
      </tr>`;

    tableBody.innerHTML += newRow;
  });
});
