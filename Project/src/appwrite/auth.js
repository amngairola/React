import config from "../config/Config.js";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  acount;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.acount = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.acount.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.logIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (err) {
      console.log("Appwrite error:: create Acount error", error);
    }
  }

  async logIn({ email, password }) {
    try {
      return await this.acount.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.acount.get();
    } catch (error) {
      console.log("Appwrite error:: login Acount error", error);
    }
    return null;
  }

  async logOut() {
    try {
      await this.Account.deleteSessions();
    } catch (error) {
      console.log("Appwrite error:: logout Acount error", error);
    }
  }
}

const authservice = new AuthService();

export default authservice;
