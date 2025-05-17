const app = require("./src/app");

app.listen(8080, (err) => {
  if (err) {
    console.error("Something went wrong", err);
  } else {
    console.log("Server running on port 8080 🚀");
  }
});
