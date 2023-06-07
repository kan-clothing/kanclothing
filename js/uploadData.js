function uploadDatabase() {
  var input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";

  input.onchange = function (event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function (e) {
      try {
        var jsonData = JSON.parse(e.target.result);
        // Check if the JSON data is a valid Firebase database file
        if (jsonData && typeof jsonData === "object") {
          // Upload the data to your Firebase database
          firebase
            .database()
            .ref()
            .set(jsonData)
            .then(function () {
              alert("Database uploaded successfully!");
            })
            .catch(function (error) {
              console.log("Error uploading database:", error);
            });
        } else {
          alert("Invalid Firebase Database File!");
        }
      } catch (error) {
        alert("Invalid Firebase Database File!");
      }
    };

    reader.readAsText(file);
  };

  input.click();
}
