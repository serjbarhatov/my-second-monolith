export interface ApiResponse<T = unknown> {
  data?: T;
  error?: unknown;
}

/**
 * Function to get data from a server
 * @param {string} url The URL to fetch data from.
 * @returns {Promise<ApiResponse>} A promise that resolves to the API response
 * containing the data or an error.
 */
export const getData = async (url: string): Promise<ApiResponse> => {
  try {
    const res: Response = await fetch(url);
    const items: ApiResponse = await res.json();
    return items;
  } catch (error) {
    return {
      error,
    };
  }
};

/**
 * Function to get all data from different urls
 * @param {string} appUrlsData
 * @returns {Promise<ApiResponse[]>}
 */

export const getAllDataFromDifferentUrls = async (
  appUrlsData: string[]
): Promise<ApiResponse[]> => {
  // setup the promises
  const promises: Promise<ApiResponse>[] = appUrlsData.map((url: string) =>
    getData(`http://localhost:3010${url}`)
  );

  // fetch all appointments
  try {
    const items: ApiResponse[] = await Promise.all(promises);
    return items;
  } catch (error: unknown) {
    console.log('🐮', error);
    return [{ error }];
  }
};
