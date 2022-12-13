import React from 'react';
import '../../styles/productsByPagination/paginationButtons.css';

const Paginationbottons = ({
  prevPageCount,
  nextPageCount,
  pageCount,
  imagesLength,
}) => {
  return (
    <div className='navegationBtn'>
      <button
        onClick={prevPageCount}
        className={pageCount <= 1 ? 'withoutBtn' : ''}
      >
        {pageCount <= 1 ? '' : 'Anterior'}
      </button>
      <p>{`Página ${pageCount}`}</p>
      <button
        onClick={nextPageCount}
        className={pageCount >= imagesLength / 6 ? 'withoutBtn' : ''}
      >
        {pageCount >= imagesLength / 6 ? '' : 'Siguiente'}
      </button>
    </div>
  );
};

export default Paginationbottons;
