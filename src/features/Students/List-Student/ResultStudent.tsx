import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import SSPaper from '../../../components/common/other/SSPaper';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { STUDENT_ROUTER } from '../../../shared/constants/router/student-router.constant';
import { useAppDispatch } from '../../../app/hooks';
import { getByIdStudentAsync } from '../redux/student.reducer';
const ResultStudent = () => {
    const students = useSelector((state: any) => state.student.entities);
    const navigate = useNavigate();
    const handleUpdate = async (row: any) => {
        navigate(STUDENT_ROUTER.childrens.updateUser.buildPath(row.maSv));
    }
    return (
        <>
            {(students == null) ? null :
                (<SSPaper>
                    {
                        (students.length == 0) ? null : (
                            <>
                                <TableContainer>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontSize: '1rem' }}>STT</TableCell>
                                                <TableCell sx={{ fontSize: '1rem' }}>Mã sinh viên</TableCell>
                                                <TableCell sx={{ fontSize: '1rem' }}>Họ và tên</TableCell>
                                                <TableCell sx={{ fontSize: '1rem' }}>Nơi sinh</TableCell>
                                                <TableCell sx={{ fontSize: '1rem' }}>Năm sinh</TableCell>
                                                <TableCell sx={{ fontSize: '1rem' }}>Giới tính</TableCell>
                                                <TableCell sx={{ fontSize: '1rem' }}>Khoa</TableCell>
                                                <TableCell sx={{ fontSize: '1rem' }}>Thao tác</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                students.map((row: any, index: number) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell>{index + 1}</TableCell>
                                                        <TableCell>{row.maSv}</TableCell>
                                                        <TableCell>{row.hoSv} {row.tenSv}</TableCell>
                                                        <TableCell>{row.noiSinh}</TableCell>
                                                        <TableCell>{row.ngaySinh}</TableCell>
                                                        <TableCell>{row.phai == true ? 'Nam' : 'Nữ'}</TableCell>
                                                        <TableCell>{row.khoa?.tenKh}</TableCell>
                                                        <TableCell>
                                                            <Button variant="outlined" size='small' onClick={() => { handleUpdate(row) }}>
                                                                Cập nhật
                                                            </Button>
                                                            <Button variant="outlined" size='small' onClick={() => { handleUpdate(row) }}>
                                                                Chi tiết
                                                            </Button>
                                                        </TableCell>
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

export default ResultStudent;