import { Resource } from "sst";
import { Handler } from "aws-lambda";
import { Example } from "../../../packages/core/src/example/index";

export const handler: Handler = async (_event) => {
  return {
    statusCode: 200,
    body: `${Example.hello()} Linked to ${Resource.Uploads.name}.`,
  };
};