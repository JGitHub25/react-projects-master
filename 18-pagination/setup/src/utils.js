const paginate = (dataArray) => {
  const itemsPerPage = 10; //A piacere
  const totalPages = Math.ceil(dataArray.length / itemsPerPage);

  const dataArrayOfArrays = Array.from({ length: totalPages }, (_, index) => {
    const start = index * itemsPerPage;
    return dataArray.slice(start, start + itemsPerPage);
  });

  return dataArrayOfArrays;
};

export default paginate;
