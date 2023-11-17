const BASE_URL = "http://localhost:5050/api";
const RESOURSE_URL = `${BASE_URL}/planes`;

const baseRequest = async ({ path = "", method = "GET", body = null }) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }

    return await fetch(`${RESOURSE_URL}${path}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};

// findAll
export const getAllPlanes = async () => {

    const rawResp = await baseRequest({path: "/", method: "GET"});
    
    console.log("getting");
    const data = await rawResp.json();
    return data;
}

export const deleteAllPlanes = async() => {

    const rawResp = await baseRequest({path:  "/", method: "DELETE"});
    console.log("deleting");
}

// create
export const postPlane = (body) => baseRequest({path: "/", method: "POST", body});

// update
export const editPlane = (id, body) => baseRequest({path: `/${id}`, method: "PUT", body});

// delete
export const deletePlane = (id) => baseRequest({path: `/${id}`, method: "DELETE"});

// findOne
// export const getPlaneById = async (id) => {

//     const rawResp = await baseRequest({path: `/${id}`, method: "GET"});
//     return rawResp.json();
// } 
