import "reflect-metadata";

import path from "node:path";

import express from "express";
import http from "http";
import jwt from "jsonwebtoken";

import { AuthenticationError } from "apollo-server";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { PrismaClient } from "@prisma/client";

import { CustomUserResolver } from "./resolvers/LoginResolver";
import { RideCrudResolver, SubscribedRideCrudResolver,FindManyUsersResolver, DeleteOneUsersResolver, UpsertOneUsersResolver } from "../prisma/generated/type-graphql";

async function main(): Promise<void> {
  interface Context {
    prisma: PrismaClient;
    token: string | undefined;
    SECRET: string | undefined;
    user: string | jwt.JwtPayload | undefined;
  }

  const prisma = new PrismaClient();

  const schema = await buildSchema({
    resolvers: [
      FindManyUsersResolver,
      DeleteOneUsersResolver,
      UpsertOneUsersResolver,
      RideCrudResolver,
      SubscribedRideCrudResolver,
      CustomUserResolver,
    ],
    validate: false,
  });

  const app = express();
  const httpServer = http.createServer(app);

  const getUser = (token: any) => {
    const SECRET: string = process.env.SECRET || "";
    if (token) {
      try {
        return jwt.verify(token, SECRET);
      } catch (err) {
        return false;
      }
    }
  };

  const server = new ApolloServer({
    schema,
    context: async ({ req }): Promise<Context> => {
      const token = req.headers.authorization;
      if (!token) {
        throw new AuthenticationError("Must be authenticated");
      }
      const user = getUser(token.split("Bearer ")[1]);
      if (!user) {
        throw new AuthenticationError("Must be authenticated");
      }
      return {
        prisma: prisma,
        user: user,
        SECRET: process.env.SECRET,
        token: req.headers.authorization,
      };
    }
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

main();
