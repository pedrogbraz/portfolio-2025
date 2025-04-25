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

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface ContributionCalendar {
  weeks: Week[];
}

interface User {
  contributionsCollection: {
    contributionCalendar: ContributionCalendar;
  };
}

interface GithubResponse {
  data: {
    user: User;
  };
}

export async function fetchContributions(username: string, token: string) {
  const res = await axios.post<GithubResponse>(
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
    (week) => week.contributionDays
  );

  return days;
}
