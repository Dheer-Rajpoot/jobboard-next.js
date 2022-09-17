// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { searchJobs } from "../../datalayer";
export default async function handler(req, res) {
  const { searchFormState, sidebarFormState } = req.body;
  const query = {
    ...sidebarFormState,
    searchBarText: searchFormState,
  };
  const jobs = await searchJobs(query);
  res.status(200).json(jobs);
}
