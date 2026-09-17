export const formatParams = (searchParams) => {
  let query = "";
//   console.log(searchParams);
  Object.entries(searchParams).map((param)=>{
    const [key,value]=param;
    if (value) query += `${key}=${value}&`;
  })
  return query;
};
