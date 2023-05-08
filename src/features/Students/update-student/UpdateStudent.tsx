import { Button, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import { useAppDispatch } from '../../../app/hooks';
import TextFieldContainer from '../../../components/common/form/TextFieldContainer';
import SSPaper from '../../../components/common/other/SSPaper';
import { filterKhoa } from '../../../shared/api/khoa.api';
import { getByIdStudent } from '../../../shared/api/student.api';
import { DATE_FORMAT } from '../../../shared/constants/date-time.constant';
import { STUDENT_ROUTER } from '../../../shared/constants/router/student-router.constant';
import { dateTimeToDateStr } from '../../../shared/utils/data-time.util';
import { msgErrorRequired } from '../../../shared/utils/error.util';
import { isFulfilledAction } from '../../../shared/utils/reducer.utils';
import { createStudentAsync, updateStudentAsync } from '../redux/student.reducer';
const optionsPhai = [
    {
        value: true,
        key: 'Nam'
    },
    {
        value: false,
        key: 'Nữ'
    }
]
const UpdateStudent = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        maSv: '',
        hoSv: '',
        tenSv: '',
        ngaySinh: new Date(),
        noiSinh: '',
        phai: true,
        maKh: ''
    })
    const dispatch = useAppDispatch();
    const item = {
        label: 'Chọn khoa',
        value: ''
    }
    const [dataKhoa, setDataKhoa] = useState([item]);
    const [khoa, setKhoa] = useState({
        label: '',
        value: ''
    });
    useEffect(() => {
        filterKhoa('').then(res => {
            return res.data.map((item: any) => ({ label: item.tenKh, value: item.id }))
        }).then((data) => {
            setDataKhoa([item, ...data])
        });
        getByIdStudent(params.id).then(res => {
            setInitialValues({
                maSv: res.data.maSv,
                hoSv: res.data.hoSv,
                tenSv: res.data.tenSv,
                ngaySinh: moment(res.data.ngaySinh, DATE_FORMAT).toDate(),
                noiSinh: res.data.noiSinh,
                phai: res.data.phai,
                maKh: res.data.khoa.id
            });
            setKhoa({
                value: res.data.khoa.id,
                label: res.data.khoa.tenKh
            })
        })
    }, [])

    const validationSchema = Yup.object({
        maSv: Yup.string().max(3, 'Không được quá 3 kí tự').nullable().required(msgErrorRequired('Mã sinh viên')),
        hoSv: Yup.string().nullable().required(msgErrorRequired('Họ sinh viên')),
        tenSv: Yup.string().nullable().required(msgErrorRequired('Tên sinh viên')),
        ngaySinh: Yup.date().nullable().required(msgErrorRequired('Ngày sinh')),
        noiSinh: Yup.string().nullable().required(msgErrorRequired('Nơi sinh')),
        maKh: Yup.string().nullable().required(msgErrorRequired('Khoa')),

    })
    const handleSubmit = async (values: any, formik: any) => {
        const body = {
            ...values,
            ngaySinh: dateTimeToDateStr(values.ngaySinh)
        }
        const res = await dispatch(updateStudentAsync(body));
        if (isFulfilledAction(res)) {
            toast.success("Cập nhật thành công");
            navigate(STUDENT_ROUTER.childrens.listUser.path);
        } else toast.error("Cập nhật không thành công");
    }
    const handeChangePhai = (formik: any) => (e: any) => {
        const value = e.target.value;
        formik.setFieldValue('phai', value === 'true' ? true : false);
    }
    const handleBack = () => {
        navigate(STUDENT_ROUTER.childrens.listUser.path);
    }
    return (
        <>
            {
                initialValues.maSv != '' ? <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                    {
                        (formik) => (
                            <Form>
                                <SSPaper>
                                    <Grid container
                                        rowSpacing={2}
                                        columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                                        <Grid item sm={4}>
                                            <TextFieldContainer
                                                variant="input"
                                                type="text"
                                                label="Mã sinh viên"
                                                name="maSv"
                                                placeholder="Nhập mã sinh viên"
                                                isRequired
                                                disabled
                                            />
                                        </Grid>
                                        <Grid item sm={4}>
                                            <TextFieldContainer
                                                variant="input"
                                                type="text"
                                                label="Họ sinh viên"
                                                name="hoSv"
                                                placeholder="Nhập họ sinh viên"
                                                isRequired
                                            />
                                        </Grid>
                                        <Grid item sm={4}>
                                            <TextFieldContainer
                                                variant="input"
                                                type="text"
                                                label="Tên sinh viên"
                                                name="tenSv"
                                                placeholder="Nhập tên sinh viên"
                                                isRequired
                                            />
                                        </Grid>
                                        <Grid item sm={4}>
                                            <TextFieldContainer
                                                variant="date"
                                                className="form-control"
                                                placeholderText={DATE_FORMAT}
                                                type="text"
                                                label="Ngày sinh"
                                                name="ngaySinh"
                                                placeholder="Nhập ngày sinh"
                                                isRequired
                                            />
                                        </Grid>
                                        <Grid item sm={4}>
                                            <TextFieldContainer
                                                variant="input"
                                                type="text"
                                                label="Nơi sinh"
                                                name="noiSinh"
                                                placeholder="Nhập nơi sinh"
                                                isRequired
                                            />
                                        </Grid>
                                        <Grid item sm={4}>
                                            <TextFieldContainer
                                                variant="select"
                                                type="text"
                                                label="Khoa"
                                                name="maKh"
                                                values={khoa}
                                                options={dataKhoa}
                                                isRequired
                                            />
                                        </Grid>
                                        <Grid item sm={4}>
                                            <TextFieldContainer
                                                variant="radio"
                                                name="phai"
                                                options={optionsPhai}
                                                onChange={handeChangePhai(formik)}
                                            />
                                        </Grid>
                                    </Grid>
                                </SSPaper>
                                <SSPaper>
                                    <Grid container
                                        rowSpacing={2}
                                        columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
                                        <Grid item sm={6} style={{ textAlign: "right" }}>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                sx={{ width: "165px" }}
                                            >
                                                Lưu
                                            </Button>
                                        </Grid>
                                        <Grid item sm={6} >
                                            <Button
                                                variant="contained"
                                                color="info"
                                                type="button"
                                                sx={{ width: "165px" }}
                                                onClick={handleBack}
                                            >
                                                Quay lại
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </SSPaper>
                            </Form>
                        )
                    }
                </Formik> : null
            }

        </>
    );
};

export default UpdateStudent;