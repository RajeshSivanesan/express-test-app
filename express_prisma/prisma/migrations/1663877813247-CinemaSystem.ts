import { Migration } from '../cli/migration';
import { PrismaClient } from "@prisma/client";

export default class implements Migration {
  async up(prisma: PrismaClient) {
    try {
      await prisma.$queryRaw`CREATE TABLE "movies" (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "name" TEXT NOT NULL,
        "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
      )`;
    } catch (ex) {

    }
    /**
     # ToDo: Create a migration that creates all tables for the following user stories

     For an example on how a UI for an api using this might look like, please try to book a show at https://in.bookmyshow.com/.
     To not introduce additional complexity, please consider only one cinema.

     Please list the tables that you would create including keys, foreign keys and attributes that are required by the user stories.

     ## User Stories

     **Movie exploration**
     * As a user I want to see which films can be watched and at what times
     * As a user I want to only see the shows which are not booked out

     **Show administration**
     * As a cinema owner I want to run different films at different times
     * As a cinema owner I want to run multiple films at the same time in different showrooms

     **Pricing**
     * As a cinema owner I want to get paid differently per show
     * As a cinema owner I want to give different seat types a percentage premium, for example 50 % more for vip seat

     **Seating**
     * As a user I want to book a seat
     * As a user I want to book a vip seat/couple seat/super vip/whatever
     * As a user I want to see which seats are still available
     * As a user I want to know where I'm sitting on my ticket
     * As a cinema owner I dont want to configure the seating for every show
     */

    throw new Error('TODO: implement migration in task 4');
  }

  async down(prisma: PrismaClient) {
    // do nothing
  }
}
