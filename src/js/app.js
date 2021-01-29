const backDropEl = document.getElementById("backdrop");
const addUserSectionEl = document.getElementById("add_user_section");
const addUserContentBtn = document.getElementById("add_user_btn");
const cancelAddUserContentBtn = document.getElementById("add_user_actions")
  .children[0];
const storeAddUserContentBtn = document.getElementById("add_user_actions")
  .children[1];
const userInputsEntries = addUserSectionEl.firstElementChild.querySelectorAll(
  "input"
);

console.log(userInputsEntries);

const clearApplicantInputEntries = () => {
  for (const usrinput of userInputsEntries) {
    if (usrinput.type == "text") {
      usrinput.value = "";
    } else if (usrinput.type == "number") {
      usrinput.value = "0";
    }else if (usrinput.type == "time") {
        usrinput.value = "";
    }
    else {
      addUserSectionEl.querySelector("#recommended_input").checked =true;
      addUserSectionEl.querySelector("#status_input").value = "Pending";
      addUserSectionEl.querySelector("#final_verdict_input").value = "Pending";
    }
  }
};
const toggleBackdropHandler = () => {
  backDropEl.classList.toggle("visible");
};
const toggleaddUserHandler = () => {
  addUserSectionEl.classList.toggle("visible");
  toggleBackdropHandler();
};
const backdrophandler = () => {
  toggleaddUserHandler();
};

const cancelAddUserContentHandler = () => {
  toggleaddUserHandler();
  clearApplicantInputEntries();
};
const getExtraUserData = () => {
  let qrateScore;
  const qrateEL = document.getElementsByName("qrate score");
  for (let i = 0; i < qrateEL.length; i++) {
    if (qrateEL[i].checked) {
      qrateScore = qrateEL[i].value;
    }
  }
  let status = document.getElementsByName("status")[0].value;
  
  let finalVerdict = document.getElementsByName("final verdict")[0].value;
  return {
    "QRATE SCORE": qrateScore,
    "STATUS": status,
    "FINAL VERDICT": finalVerdict,
  };
};

const storeAddUserContentHandler = () => {
  const usrdata = {
    ...getExtraUserData(),
    NAME: userInputsEntries[0].value.trim(),
    "PROFILE SCORE": userInputsEntries[0].value,
    "QUIZ SCORE": userInputsEntries[4].value,
    "COMM SCORE": userInputsEntries[5].value,
    "INTERVIEW SCORE": userInputsEntries[6].value,
    "TIME STAMP": userInputsEntries[7].value,
  };
  if (
    usrdata["NAME"] === "" ||
    usrdata["TIME STAMP"] === "" ||
    +usrdata["QUIZ SCORE"] < 0 ||
      +usrdata["QUIZ SCORE"] > 100 ||
      +usrdata["COMM SCORE"] < 0 || +usrdata["COMM SCORE"] > 100 ||
      +usrdata["INTERVIEW SCORE"] < 0 || +usrdata["INTERVIEW SCORE"] > 100
  ) {
      alert("Please Enter the inputs correctly!!");
      console.log(usrdata);
      return;
    }
    applicantList.push(usrdata);
    setUserData(usrdata);
  console.log(applicantList);
};

addUserContentBtn.addEventListener("click", toggleaddUserHandler);
backDropEl.addEventListener("click", backdrophandler);
cancelAddUserContentBtn.addEventListener("click", cancelAddUserContentHandler);
storeAddUserContentBtn.addEventListener("click", storeAddUserContentHandler);
