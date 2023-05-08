
export const ACCESS_RIGHT = {
    ADMIN: 'ADMIN',//Admin,ADMIN,NULL,1

    USER: 'USER',//Người dùng,USER,NULL,3
    USER_VIEW: 'USER_VIEW',//Xem,USER_VIEW,USER,1
    USER_ADD: 'USER_ADD',//Thêm, USER_ADD, USER, 2
    USER_UPDATE: 'USER_UPDATE',//Sửa, USER_UPDATE, USER, 3

    AUTHORIZATION: 'AUTHORIZATION',//Nhóm quyền,AUTHORIZATION,NULL,4
    AUTHORIZATION_VIEW: 'AUTHORIZATION_VIEW',//Xem, AUTHORIZATION_VIEW, AUTHORIZATION, 1
    AUTHORIZATION_ADD: 'AUTHORIZATION_ADD',//Thêm, AUTHORIZATION_ADD, AUTHORIZATION, 2
    AUTHORIZATION_UPDATE: 'AUTHORIZATION_UPDATE',//Sửa, AUTHORIZATION_UPDATE, AUTHORIZATION, 3
    AUTHORIZATION_DELETE: 'AUTHORIZATION_DELETE',//Xóa, AUTHORIZATION_DELETE, AUTHORIZATION, 4

    ASSET: 'ASSET',//Tài sản,ASSET,NULL,5
    ASSET_ADD: 'ASSET_ADD',//Thêm, ASSET_ADD, ASSET, 2
    ASSET_DELETE: 'ASSET_DELETE',//Xóa, ASSET_DELETE, ASSET, 4
    ASSET_REPORT: 'ASSET_REPORT',//báo cáo, ASSET_REPORT, ASSET, 5
    ASSET_IMPORT: 'ASSET_IMPORT',//Import, ASSET_IMPORT, ASSET, 6
    ASSET_IN_QR: 'ASSET_IN_QR',//In QR, ASSET_IN_QR, ASSET, 7
    ASSET_DROP_QR: 'ASSET_DROP_QR', // Mất QRR, ASSET_DROP_QR, 8
    ASSET_LOCATION: 'ASSET_LOCATION',//Định danh vị trí, ASSET_LOCATION, ASSET, 9
    ASSET_TRANSFER: 'ASSET_TRANSFER',//Điều chuyển, ASSET_TRANSFER, ASSET, 10


    TYPE_ASSET: 'TYPE_ASSET',//Loại tài sản,TYPE_ASSET,NULL,6
    TYPE_ASSET_ADD: 'TYPE_ASSET_ADD',//Thêm, TYPE_ASSET_ADD, TYPE_ASSET, 2

    GROUP_ASSET: 'GROUP_ASSET',//Nhóm tài sản,GROUP_ASSET,NULL,7
    GROUP_ASSET_ADD: 'GROUP_ASSET_ADD',//Thêm, GROUP_ASSET_ADD, GROUP_ASSET, 2

    ASSET_CLASS: 'ASSET_CLASS',//Kiểu tài sản,ASSET_CLASS,NULL,8
    ASSET_CLASS_VIEW: 'ASSET_CLASS_VIEW',//Xem, ASSET_CLASS_VIEW, ASSET_CLASS, 1
    ASSET_CLASS_ADD: 'ASSET_CLASS_ADD',//Thêm, ASSET_CLASS_ADD, ASSET_CLASS, 2
    ASSET_CLASS_UPDATE: 'ASSET_CLASS_UPDATE',//Sửa, ASSET_CLASS_UPDATE, ASSET_CLASS, 3

    BUILDING: 'BUILDING',//Tòa nhà,BUILDING,NULL,9
    BUILDING_VIEW: 'BUILDING_VIEW',//Xem, BUILDING_VIEW, BUILDING, 1
    BUILDING_ADD: 'BUILDING_ADD',//Thêm, BUILDING_ADD, BUILDING, 2
    BUILDING_UPDATE: 'BUILDING_UPDATE',//Sửa, BUILDING_UPDATE, BUILDING, 3

    DEPARTMENT: 'DEPARTMENT',//Danh sách đơn vị,DEPARTMENT,NULL,10
    DEPARTMENT_VIEW: 'DEPARTMENT_VIEW',//Xem, DEPARTMENT_VIEW, DEPARTMENT, 1
    DEPARTMENT_ADD: 'DEPARTMENT_ADD',//Thêm, DEPARTMENT_ADD, DEPARTMENT, 2
    DEPARTMENT_UPDATE: 'DEPARTMENT_UPDATE',//Sửa, DEPARTMENT_UPDATE, DEPARTMENT, 3

    MAINTENANCE: 'MAINTENANCE',//Bảo trì bảo dưỡng,MAINTENANCE,NULL,11
    MAINTENANCE_VIEW: 'MAINTENANCE_VIEW',//Xem, MAINTENANCE_VIEW, MAINTENANCE, 1
    MAINTENANCE_UPDATE: 'MAINTENANCE_UPDATE',//Sửa, MAINTENANCE_UPDATE, MAINTENANCE, 3
    MAINTENANCE_SCHEDULE: 'MAINTENANCE_SCHEDULE',//Lịch Bảo trì / bảo dưỡng, MAINTENANCE_SCHEDULE, MAINTENANCE, 10
    MAINTENANCE_HISTORY: 'MAINTENANCE_HISTORY', //lịch sử bảo trì / bảo dưỡng, MAINTENANCE_HISTORY, MAINTENANCE, 11
}