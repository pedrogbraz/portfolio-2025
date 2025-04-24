import axios from "axios";

const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";

const query = `
  query($username: String!) {
    user(login: $username) {
      contributionsCollection {
        contributionCalendar {
          weeks {
            contributionDays {
              date
              contributionCount
            }
          }
        }
      }
    }
  }
`;

export async function fetchContributions(username: string, token: string) {
  const res = await axios.post(
    GITHUB_GRAPHQL_API,
    {
      query,
      variables: { username },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const days = res.data.data.user.contributionsCollection.contributionCalendar.weeks.flatMap(
    (week: any) => week.contributionDays
  );

  return days;
}
