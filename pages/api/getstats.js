// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ENDPOINT = "https://wiki.verste.org/graphql";

export default async function handler(req, res) {
  // get jwt
  const mutationForJwt = `
  mutation { 
    authentication {
      login(
        username: "${ADMIN_EMAIL}",
        password: "${ADMIN_PASSWORD}",
        strategy: "local"
     ) {
        jwt
      }
    }
  }
  `;
  const jwtHeaders = {
    "Content-Type": "application/json",
  };

  const jwtJson = await queryGraphQl(mutationForJwt, jwtHeaders);
  const jwt = jwtJson.data.authentication.login.jwt;

  // use jwt to get page count
  const getPagesQuery = `
  query{
    pages {
          list {
        id,
              path,
        contentType
      }
    },
    users {
      list {
        id
          }
      }
  }
  `;

  const pagesHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${jwt}`,
  };

  const data = await queryGraphQl(getPagesQuery, pagesHeaders);
  const numPages = data.data.pages.list.length;
  const categories = new Set();

  data.data.pages.list.forEach((item) => {
    const subject = item.path.split("/")[0];
    categories.add(subject);
  });

  categories.delete("home");
  categories.delete("verste-resources");
  const numCategories = categories.size;
  const numContributors = data.data.users.list.length;
  const categoriesList = Array.from(categories);

  res.status(200).json({
    numPages,
    categories: categoriesList,
    numCategories,
    numContributors,
  });
}

const queryGraphQl = async (queryString, headers) => {
  const data = await fetch(ENDPOINT, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ query: queryString }),
  });
  const responseData = await data.json();
  return responseData;
};
