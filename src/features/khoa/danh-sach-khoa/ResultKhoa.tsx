import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import SSPaper from '../../../components/common/other/SSPaper';

const ResultKhoa = () => {
    const khoa = useSelector((state: any) => state.khoa?.entities);
    console.log(khoa);
    return (
        <>
            {(khoa == null) ? null :
                (<SSPaper>
                    {
                        (khoa.length == 0) ? null : (
                            <>
                                <TableContainer>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontSize: '1rem' }}>STT</TableCell>
                                                <TableCell sx={{ fontSize: '1rem' }}>Mã Khoa</TableCell>
                                                <TableCell sx={{ fontSize: '1rem' }}>Tên khoa</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                khoa.map((row: any, index: number) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell>{index + 1}</TableCell>
                                                        <TableCell>{row.id}</TableCell>
                                                        <TableCell>{row.tenKh}</TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </>
                        )
                    }
                </SSPaper>)
            }
        </>
    );
};

export default ResultKhoa;