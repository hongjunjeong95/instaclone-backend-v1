import jwt from "jsonwebtoken";
import client from "../client";
import { Resolver } from "../types";

export const getUser = async (token: string) => {
  try {
    if (!token) {
      return null;
    }
    const decoded = await jwt.verify(token, process.env.SECRET_KEY || "aldkfj");

    if (typeof decoded === "object" && decoded.hasOwnProperty("id")) {
      const user = await client.user.findUnique({ where: { id: decoded.id } });
      if (user) {
        return user;
      } else {
        return null;
      }
    }
  } catch {
    return null;
  }
};

export const protectedResolver =
  (ourResolver: Resolver) =>
  (root: any, args: any, context: any, info: any) => {
    if (!context.loggedInUser) {
      return {
        ok: false,
        error: "Please log in to perform this action.",
      };
    }
    return ourResolver(root, args, context, info);
  };
