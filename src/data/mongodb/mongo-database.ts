import mongoose from "mongoose";

interface Options {
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(options: Options) {
    const { mongoUrl, dbName } = options;

    console.log(options);

    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      });

      console.log("Mongo connected");
    } catch (error) {
      console.error("Mongo connection error");
      throw error;
    }
  }
}
