import app from "./app.js";
import { connectDb } from "./db.js";

connectDb();

const port = 3000;
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
