import styled from "styled-components";
export default styled.div`
  .table-head {
    background-color: rgba(2, 37, 72, 0.95);
    font-family: "Titillium" !important;
  }
  .MuiTableContainer-root {
    width: 98%;
    overflow-x: auto;
    margin: 10px 10px 10px 10px;
  }
  .MuiInputBase-input {
    color: white;
    font-size: 1.5rem;
  }
  .MuiTableCell-root {
    vertical-align: middle;
    font-family: "Titillium";
    text-align: "center";
    font-size: 1.05rem;
  }
  h2 {
    color: orangered;
  }
  .head-cell {
    width: auto;
    font-size: 1rem;
    color: white;
  }
  .table {
    min-width: 800px;
  }
  .fa-android {
    color: green;
    font-size: 3rem;
  }
  .fa-spinner {
    color: red;
    font-size: 3rem;
  }
  .fa-search {
    color: orangered;
    font-size: 2rem;
  }
  .fa-question {
    color: blue;
    font-size: 3rem;
  }
  .MuiTablePagination-caption {
    font-size: 1.5rem;
  }
  .MuiSvgIcon-rootl {
    font-size: 2rem;
  }
  .MuiTableCell-body {
    border: solid black 0.1px;
    align-items: "center";
  }
  li {
    list-style: none;
    padding-bottom: 9px;
    float: left;
    width: 10rem;
  }
`;
