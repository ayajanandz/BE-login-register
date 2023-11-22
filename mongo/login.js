"use strict";

const { connectDB } = require("./connect.js");

const login = async (req, res) => {
  const { email, password } = req.body;
  let likedMovieId = null;

  // CONNECTION WITH COLLECTIONS

  let mongoDB = await connectDB();
  let collection = mongoDB.collection("users");
  let recordCollection = mongoDB.collection("record");
  let Response = await collection.findOne({ Email: email });

  // console.log(Response);
  if (Response) {
    if (password === Response.Password) {
      //  console.log(Response);
      let likedResponse = await recordCollection.findOne({
        UserName: Response.Name,
      });
      // console.log("This user has liked movies bearing id: ", likedResponse.Movieid);
      if (likedResponse) {
        likedMovieId = likedResponse.Movieid;
        // console.log("hello",likedMovieId.length);
      } else {
        console.log("no liked movie by the user");
      }
       let dbResponse = {
        ...Response,
        ...likedResponse
       };
       console.log(dbResponse);
      res.send({ body: dbResponse, status: 200,  });
    } else {
      res.send({ body: {}, status: 200 });
    }
  } else {
    res.send({ message: "User not resgistered" });
  }
};

module.exports = {
  login,
};
