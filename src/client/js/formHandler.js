function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  const isUrl = Client.checkIsUrl(formText);

  if (isUrl) {
    fetch("http://localhost:8081/api", {
      method: "POST",
      body: JSON.stringify({
        url: formText,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(function (res) {
        document.getElementById("polarity").innerHTML =
          "Polarity: " + convertPolarity(res.score_tag);
        document.getElementById(
          "agreement"
        ).innerHTML = `Agreement: ${res.agreement}`;
        document.getElementById(
          "subjectivity"
        ).innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById(
          "confidence"
        ).innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
      })
      .catch((err) => {
        console.log("err : ", err);
      });
  } else {
    alert("Please input a valid url");
  }
}

const convertPolarity = (score) => {
  let display;
  switch (score) {
    case "P+":
      display = "strong positive";
      break;
    case "P":
      display = "positive";
      break;
    case "NEW":
      display = "neutral";
      break;
    case "N":
      display = "negative";
      break;
    case "N+":
      display = "strong negative";
      break;
    case "NONE":
      display = "no sentiment";
  }
  return display ? display.toUpperCase() : "";
};

export { handleSubmit };
