set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "public"."users" (
	"userId" serial NOT NULL,
	"name" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"hashedPassword" TEXT NOT NULL UNIQUE,
	"createdAt" TIMESTAMP NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."entries" (
	"entryId" serial NOT NULL,
	"plantId" integer NOT NULL,
	"notes" TEXT NOT NULL,
	"photoUrl" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	CONSTRAINT "entries_pk" PRIMARY KEY ("entryId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."plants" (
	"plantId" serial NOT NULL,
	"userId" integer NOT NULL,
	"plantName" TEXT NOT NULL,
	"createdAt" TIMESTAMP NOT NULL,
	CONSTRAINT "plants_pk" PRIMARY KEY ("plantId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public"."plantCollections" (
	"plantCollectionId" serial NOT NULL,
	"userId" integer NOT NULL,
	"plantId" integer NOT NULL,
	CONSTRAINT "plantCollections_pk" PRIMARY KEY ("plantCollectionId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "entries" ADD CONSTRAINT "entries_fk0" FOREIGN KEY ("plantId") REFERENCES "plants"("plantId");

ALTER TABLE "plants" ADD CONSTRAINT "plants_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "plantCollections" ADD CONSTRAINT "plantCollections_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "plantCollections" ADD CONSTRAINT "plantCollections_fk1" FOREIGN KEY ("plantId") REFERENCES "plants"("plantId");
