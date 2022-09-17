// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { xl } from "@tailwindcss/typography/src/styles";
import { searchJobs } from "../../datalayer";
export default async function handler(req, res) {
  const { searchFormState, sidebarFormState } = req.body;

  const minBaseAnnualSalary =
    sidebarFormState.baseSalaryBounds.length > 0
      ? Math.min(...sidebarFormState.baseSalaryBounds)
      : 0;

  const maxBaseAnnualSalary =
    sidebarFormState.baseSalaryBounds.length > 0
      ? Math.max(...sidebarFormState.baseSalaryBounds)
      : 1000000;

  const job_skill = sidebarFormState.job_skill.map((skill) => {
    return skill.value;
  });

  const query = {
    ...sidebarFormState,
    searchBarText: searchFormState,
    minBaseAnnualSalary,
    maxBaseAnnualSalary,
    job_skill,
  };

  const jobs = await searchJobs(query);
  res.status(200).json(jobs);
}
