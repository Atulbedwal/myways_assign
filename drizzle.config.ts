import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.ts",
  dbCredentials:{
    url:'postgresql://myways_owner:dANik0PzVtL2@ep-weathered-sound-a5hq1ks3.us-east-2.aws.neon.tech/myways?sslmode=require',
  }
});

