import * as contentstack from "contentstack";
import * as Utils from "@contentstack/utils";

import ContentstackLivePreview from "@contentstack/live-preview-utils";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const envConfig = process.env.CONTENTSTACK_API_KEY
  ? process.env
  : publicRuntimeConfig;

const Stack = contentstack.Stack({
  api_key: envConfig.CONTENTSTACK_API_KEY
    ? envConfig.CONTENTSTACK_API_KEY
    : envConfig.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
  delivery_token: envConfig.CONTENTSTACK_DELIVERY_TOKEN,
  environment: envConfig.CONTENTSTACK_ENVIRONMENT,
  region: envConfig.CONTENTSTACK_REGION ? envConfig.CONTENTSTACK_REGION : "us",
  live_preview: {
    enable: true,
    management_token: envConfig.CONTENTSTACK_MANAGEMENT_TOKEN,
    host: envConfig.CONTENTSTACK_API_HOST,
  },
});

if (envConfig.CONTENTSTACK_API_HOST) {
  Stack.setHost(envConfig.CONTENTSTACK_API_HOST);
}

ContentstackLivePreview.init({
  stackSdk: Stack,
  clientUrlParams: {
    host: envConfig.CONTENTSTACK_APP_HOST,
  },
  ssr: false,
});

export const { onEntryChange } = ContentstackLivePreview;

export const renderOption = {
  span: (node, next) => next(node.children),
};

export default {
  /**
   *
   * fetches all the entries from specific content-type
   * @param {* content-type uid} contentTypeUid
   * @param {* reference field name} referenceFieldPath
   * @param {* Json RTE path} jsonRtePath
   * @param {* specific field name} field
   */
  getEntry({ contentTypeUid, referenceFieldPath, jsonRtePath, field }) {
    return new Promise((resolve, reject) => {
      const jobQuery = Stack.ContentType(contentTypeUid).Query();
      if (referenceFieldPath) jobQuery.includeReference(referenceFieldPath);
      if (field) jobQuery.only(field);
      jobQuery
        .includeOwner()
        .toJSON()
        .includeEmbeddedItems()
        .find()
        .then(
          (result) => {
            jsonRtePath &&
              Utils.jsonToHTML({
                entry: result,
                paths: jsonRtePath,
                renderOption,
              });
            resolve(result);
          },
          (error) => {
            reject(error);
          }
        );
    });
  },

  /**
   *fetches specific entry from a content-type
   *
   * @param {* content-type uid} contentTypeUid
   * @param {* url for entry to be fetched} entryUrl
   * @param {* reference field name} referenceFieldPath
   * @param {* Json RTE path} jsonRtePath
   * @returns
   */
  getEntryByUrl({ contentTypeUid, entryUrl, referenceFieldPath, jsonRtePath }) {
    return new Promise((resolve, reject) => {
      const jobQuery = Stack.ContentType(contentTypeUid).Query();
      if (referenceFieldPath) jobQuery.includeReference(referenceFieldPath);
      jobQuery.includeOwner().toJSON();
      const data = jobQuery.where("url", `${entryUrl}`).find();
      data.then(
        (result) => {
          jsonRtePath &&
            Utils.jsonToHTML({
              entry: result,
              paths: jsonRtePath,
              renderOption,
            });
          resolve(result[0]);
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  },

  /**
   *
   * fetches all the Jobs from specific company
   * @param {* content-type uid} contentTypeUid
   * @param {* reference field name} referenceFieldPath
   * @param {* Json RTE path} jsonRtePath
   * @param {* specific company uid} uid
   */
  getJobsByCompany({ contentTypeUid, referenceFieldPath, jsonRtePath, uid }) {
    return new Promise((resolve, reject) => {
      const jobQuery = Stack.ContentType(contentTypeUid).Query();
      if (referenceFieldPath) jobQuery.includeReference(referenceFieldPath);

      jobQuery
        .includeOwner()
        .toJSON()
        .includeEmbeddedItems()
        .where("company.uid", uid)
        .find()
        .then(
          (result) => {
            jsonRtePath &&
              Utils.jsonToHTML({
                entry: result,
                paths: jsonRtePath,
                renderOption,
              });
            resolve(result);
          },
          (error) => {
            reject(error);
          }
        );
    });
  },

  /**
   *
   * search Jobs based on filters
   * @param {* content-type uid} contentTypeUid
   * @param {* reference field name} referenceFieldPath
   * @param {* Json RTE path} jsonRtePath
   * @param {* remote } remote
   * @param {* feature_job, } feature_job,

   */
  searchJobs({
    contentTypeUid,
    referenceFieldPath,
    jsonRtePath,
    remote,
    feature_job,
  }) {
    return new Promise((resolve, reject) => {
      const jobQuery = Stack.ContentType(contentTypeUid).Query();
      if (referenceFieldPath) jobQuery.includeReference(referenceFieldPath);

      if (remote) jobQuery.where("remote", remote);
      if (feature_job) jobQuery.where("feature_job", feature_job);
      jobQuery.includeOwner().toJSON();
      const data = jobQuery.find();
      data.then(
        (result) => {
          jsonRtePath &&
            Utils.jsonToHTML({
              entry: result,
              paths: jsonRtePath,
              renderOption,
            });
          resolve(result);
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    });
  },
};
