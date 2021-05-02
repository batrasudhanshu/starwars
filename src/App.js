import {
  FormControl,
  Input,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import TableWrapper from "./styles/style.table";
import React, { useEffect, useState } from "react";
import "./App.css";
import Film from "./components/film";
import Species from "./components/Species";
import { Spinner } from "./components/Spinner";
import { SearchApiLink } from "./components/SearchApiLink";
import Vehicle from "./components/Vehicle";
import ColorBox from "./components/ColorBox";
import UrlLink from "./components/UrlLink";
import Planet from "./components/Planet";

function App() {
  const tableHead = [
    "Name",
    "Height",
    "Mass",
    "Hair Color",
    "Skin Color",
    "Eye Color",
    "Birth Year",
    "Gender",
    "HomeWorld",
    "Films",
    "Species",
    "Vehicles",
    "StarShips",
    "Created At",
    "Edited At",
    "Url",
  ];
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [searchInput, setsearchInput] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  //function for searchbar
  const handleSearch = (event) => {
    setsearchInput(event.target.value);
  };
  //Function from which searchAPI will be called
  const searchApi = async () => {
    let data1 = await fetch(
      `https://swapi.dev/api/people/?search=${searchInput}`
    );
    let res1 = await data1.json();
    let result1 = res1.results;
    setData(result1);
  };
  //Function to fetch data from API
  const loadData = async () => {
    let dataAll = [];
    for (let i = 1; i < 10; i++) {
      setIsLoading(true);
      let data = await fetch(`https://swapi.dev/api/people/?page=${i}`);
      let res = await data.json();
      let view = res.results;
      dataAll.push(...view);
    }

    setData(dataAll);
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    searchApi();
  }, [searchInput]);
  const onChangePage = (event, nextPage) => {
    setPage(nextPage);
  };

  return (
    <TableWrapper>
      <div className="App">
        <Typography variant="h1" component="h2">
          Star Wars
        </Typography>

        <FormControl>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchApiLink />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <i class="fa fa-search" aria-hidden="true"></i>
              </InputAdornment>
            }
            type="text"
            value={searchInput}
            onChange={handleSearch}
          />
        </FormControl>
        <TableContainer component={Paper} maxWidth="90%">
          <Table className="table">
            <TableHead style={{ position: "sticky" }} className="table-head">
              <TableRow>
                {tableHead.map((item) => (
                  <TableCell className="head-cell" key={item}>
                    {" "}
                    {item}{" "}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                <TableBody style={{ position: "relative" }}>
                  {data
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item, index) => (
                      <TableRow
                        style={
                          index % 2
                            ? { background: "#BADAFA" }
                            : { background: "#FAD8EA" }
                        }
                      >
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.height}</TableCell>
                        <TableCell>{item.mass}</TableCell>
                        <TableCell className="hair-style">
                          {item.hair_color.split(", ").map((color) => (
                            <ColorBox color={color} />
                          ))}
                        </TableCell>
                        <TableCell>
                          {item.skin_color.split(", ").map((color) => (
                            <ColorBox color={color} />
                          ))}
                        </TableCell>
                        <TableCell>
                          {item.eye_color.split(", ").map((color) => (
                            <ColorBox color={color} />
                          ))}
                        </TableCell>
                        <TableCell>{item.birth_year}</TableCell>
                        <TableCell>{item.gender}</TableCell>
                        <TableCell>
                          <Planet link={item.homeworld} />
                        </TableCell>
                        <TableCell>
                          {item.films.map((link) => {
                            return (
                              <>
                                <Film link={link} />
                              </>
                            );
                          })}
                        </TableCell>
                        <TableCell>
                          {item.species.map((link) => {
                            return (
                              <>
                                <Species link={link} />
                              </>
                            );
                          })}
                        </TableCell>
                        <TableCell>
                          {item.vehicles.map((link) => {
                            return (
                              <>
                                <Vehicle link={link} />
                              </>
                            );
                          })}
                        </TableCell>
                        <TableCell>
                          {item.starships.map((link) => {
                            return (
                              <>
                                <Vehicle link={link} />
                              </>
                            );
                          })}
                        </TableCell>
                        <TableCell>{item.created}</TableCell>
                        <TableCell>{item.edited}</TableCell>
                        <TableCell>
                          <UrlLink link={item.url} />
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                <TablePagination
                  rowsPerPage={rowsPerPage}
                  count={data.length}
                  page={page}
                  rowsPerPageOptions={10}
                  onChangePage={onChangePage}
                />
              </>
            )}
          </Table>
        </TableContainer>
      </div>
    </TableWrapper>
  );
}

export default App;
