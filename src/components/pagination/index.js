import React from 'react';
import './styles.scss'
import { Button } from "@chakra-ui/react"

const Pagination = ({ currentPage, onChange, totalPages }) => {
  const renderPages = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          variant={i === currentPage ? 'solid' : 'outline'}
          onClick={() => onChange(i)}
        >{i}</Button>
      )
    }
    return buttons;
  }
  return (
    <div className="pagination">
      <Button
        variant="outline"
        onClick={() => onChange(parseInt(currentPage) - 1)}
        isDisabled={currentPage <= 1}
      >Prev</Button>
      {renderPages()}
      <Button
        variant="outline"
        onClick={() => onChange(parseInt(currentPage) + 1)}
        isDisabled={currentPage === totalPages}
      >Next</Button>
    </div>
  )
};

export default Pagination;