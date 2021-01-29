const applicantList = [];



const setUserData = (user) => {
  const userTableBody = document.getElementById("user_table_body");
  
    const tableRow = document.createElement('tr');
    let qrateClass;
    if (user["QRATE SCORE"] === "RECOMMENDED") {
      qrateClass = "recommended_style";
    }
    else if (user["QRATE SCORE"] === "PENDING") {
      qrateClass = "pending_style";
    }
    else if(user["QRATE SCORE"] === "REJECTED"){
      qrateClass = "rejected_style";
    }
    tableRow.innerHTML = `
    <td class="col_name_style">${user.NAME}</td>
    <td><div class="${qrateClass}">${user["QRATE SCORE"]}<div></td>
    <td>${user["PROFILE SCORE"]}</td>
    <td>${user["QUIZ SCORE"]}</td>
    <td>${user["COMM SCORE"]}</td>
    <td>${user["INTERVIEW SCORE"]}</td>
    <td>${user.STATUS}</td>
    <td>${user["FINAL VERDICT"]}</td>
    <td>${user["TIME STAMP"]}</td>
    `;
    userTableBody.appendChild(tableRow);
  
}
const fetchdata = () => {
    fetch("src\\js\\MOCK_DATA _10row.json")
    .then((Response) => {
        if (!Response.ok) {
          throw Error("ERROR");
        }
        return Response.json();
      })
      .then((userData) => {
        for (const user of userData) {
          setUserData(user);
        }
        applicantList.push(...userData);

        console.log(applicantList);
      });
}
fetchdata();