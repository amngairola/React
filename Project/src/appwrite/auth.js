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
      throw error;
    }
  }

  async logIn({ email, password }) {
    try {
      return await this.acount.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
}

const authservice = new AuthService();

export default authService;
