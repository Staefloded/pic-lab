import Prismic from "@prismicio/client";

// Update your-repo-name with the name of your repository.
const apiEndpoint = "https://pic-lab.prismic.io/api/v2";

export const accessToken = "";

const Client = (req = null) => Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

const createClientOptions = (req = null, accessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = accessToken ? { accessToken } : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

export default Client;
