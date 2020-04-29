import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ccc",
    color: theme.palette.common.black,
    padding:"10px",
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);


const rows = (props) => (
    props.data
 )

 const headerRows = (props) => (
     props.headerData
  )

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },

  editButton: {
    color: '#0043ce',
  },

  deleteButton: {
    color:'red',
  },

  tableHeadBagroundColor: {

  },
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const data = rows(props);
  const headerData = headerRows(props);
  var newrow;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead className={classes.tableHeadBagroundColor}>
          <TableRow>

          {headerData.map((row) => (
            <StyledTableCell>{row.name}</StyledTableCell>
          ))}
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <StyledTableRow key={row.name}>
            {Object.keys(row).map((row2,value) => (
                 row2 != 'id' &&
                    <StyledTableCell>{row[row2]}</StyledTableCell>

            ))}

              <StyledTableCell align="right">
                  <Grid container>
                        <Grid item sm={6}>
                            <Button className={classes.editButton}>Edit</Button>
                        </Grid>
                        <Grid item sm={6}>
                            <Button className={classes.deleteButton}>Delete</Button>
                        </Grid>
                </Grid>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
